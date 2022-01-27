import type { NextPage } from 'next';
import type { HeaderNavItemStoryblok } from 'storyblok.types';
import SbEditable from 'storyblok-react';
import Image from 'next/image';
import Link from 'next/link';

const Header: NextPage<{
  header_nav_left_links: HeaderNavItemStoryblok[];
  header_nav_right_links: HeaderNavItemStoryblok[];
}> = ({ header_nav_left_links, header_nav_right_links }) => {
  return (
    <header className="header content-center">
      <Image
        src="https://docrdsfx76ssb.cloudfront.net/static/1642780665/pages/wp-content/uploads/2021/08/bitly_logo.svg"
        width={200}
        height={150}
        className="logo"
        alt=""
      />
      <nav>
        <ul>
          {header_nav_left_links.map((item) => (
            <SbEditable key={item._uid} content={item}>
              <li>
                <Link href="#">{item.text}</Link>
              </li>
            </SbEditable>
          ))}
        </ul>
      </nav>
      <nav>
        <ul>
          {header_nav_right_links.map((item) => (
            <SbEditable key={item._uid} content={item}>
              <li>
                <Link href={item.link}>
                  {item.is_button ? (
                    <a className="btn">{item.text}</a>
                  ) : (
                    item.text
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
