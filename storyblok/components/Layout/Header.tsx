import type { NextPage } from 'next';
import type { NavLink } from './_data';
import Image from 'next/image';
import Link from '@components/Link';

const Header: NextPage<{
  navLinks: NavLink[];
}> = ({ navLinks }) => {
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
            .map((parentLink) => {
              const dropdownLinks = navLinks.filter(
                (childLink) => childLink.parent_id === parentLink.id
              );
              const hasDropdown = dropdownLinks.length > 0;

              return (
                <li key={parentLink.uuid}>
                  {parentLink.is_folder ? (
                    parentLink.name
                  ) : (
                    <Link href={parentLink.slug}>{parentLink.name}</Link>
                  )}

                  {hasDropdown && (
                    <nav className="dropdown">
                      <ul>
                        {dropdownLinks.map(({ uuid, name, slug }) => (
                          <li key={uuid}>
                            <Link href={slug}>{name}</Link>
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
