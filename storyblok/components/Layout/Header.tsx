import type { NextPage } from 'next';
import Image from 'next/image';
import { StoryData } from 'storyblok-js-client';
import Link from '@components/Link';

const Header: NextPage<{
  navLinks: StoryData[];
}> = ({ navLinks }) => {
  console.log('navLinks', navLinks);

  const leftNavLinks = navLinks.filter(({ is_folder, parent_id, slug }) => {
    const isTopLevelPage = parent_id === 0 && !is_folder;
    const hideFolders = ['legal', 'company'];
    const hidePages = ['home'];

    return (
      (is_folder && !hideFolders.includes(slug)) ||
      (isTopLevelPage && !hidePages.includes(slug))
    );
  });

  return (
    <header className="header content-center">
      <Link href="/">
        <Image
          src="https://docrdsfx76ssb.cloudfront.net/static/1642780665/pages/wp-content/uploads/2021/08/bitly_logo.svg"
          width={150}
          height={150}
          alt=""
        />
      </Link>
      <nav className="left-nav">
        <ul>
          {leftNavLinks
            .sort((a, b) => b.position - a.position)
            .map((navLink) => {
              const dropdownLinks = navLinks.filter(
                (childLink) => childLink.parent_id === navLink.id
              );

              return (
                <li key={navLink.uuid}>
                  {navLink.is_folder ? (
                    navLink.name
                  ) : (
                    <Link href={navLink.real_path}>{navLink.name}</Link>
                  )}

                  {dropdownLinks.length > 0 && (
                    <nav className="dropdown">
                      <ul>
                        {dropdownLinks.map(({ uuid, name, real_path }) => (
                          <li key={uuid}>
                            <Link href={real_path}>{name}</Link>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  )}
                </li>
              );
            })}
        </ul>
      </nav>
      <nav className="right-nav">
        <ul>
          {/* {header_nav_right_links.map((link) => (
            <SbEditable key={link._uid} content={link}>
              <li>
                <Link href={link.url} className={link.is_button ? 'btn' : ''}>
                  {link.text}
                </Link>
              </li>
            </SbEditable>
          ))} */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
