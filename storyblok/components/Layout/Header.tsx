import type { NextPage } from 'next';
import type { HeaderNavItemStoryblok } from 'storyblok.types';
import SbEditable from 'storyblok-react';
import Image from 'next/image';
import Link from '@components/Link';

const Header: NextPage<{
  header_nav_left_links: HeaderNavItemStoryblok[];
  header_nav_right_links: HeaderNavItemStoryblok[];
}> = ({ header_nav_left_links, header_nav_right_links }) => {
  return (
    <header className="header content-center">
      <Image
        src="https://docrdsfx76ssb.cloudfront.net/static/1642780665/pages/wp-content/uploads/2021/08/bitly_logo.svg"
        width={150}
        height={150}
        className="logo"
        alt=""
      />
      <nav className="left-nav">
        <ul>
          {header_nav_left_links.map((link) => (
            <SbEditable key={link._uid} content={link}>
              <li>
                <Link href={link.url}>{link.text}</Link>

                {link.dropdown_links && (
                  <nav className="dropdown">
                    <ul>
                      {link.dropdown_links.map((link) => {
                        const { _uid, url, text, description } = link;

                        return (
                          <SbEditable key={link._uid} content={link}>
                            <li key={_uid}>
                              <Link href={url}>{text}</Link>

                              {description && (
                                <p>
                                  <small>{description}</small>
                                </p>
                              )}
                            </li>
                          </SbEditable>
                        );
                      })}
                    </ul>
                  </nav>
                )}
              </li>
            </SbEditable>
          ))}
        </ul>
      </nav>
      <nav className="right-nav">
        <ul>
          {header_nav_right_links.map((link) => (
            <SbEditable key={link._uid} content={link}>
              <li>
                <Link href={link.url}>
                  {link.is_button ? (
                    <a className="btn">{link.text}</a>
                  ) : (
                    link.text
                  )}
                </Link>
              </li>
            </SbEditable>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
