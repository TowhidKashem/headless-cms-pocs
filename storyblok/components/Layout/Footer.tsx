import type { NextPage } from 'next';
import type { NavLink } from './_data';
import Image from 'next/image';
import Link from '@components/Link';

const Footer: NextPage<{
  navLinks: NavLink[];
}> = ({ navLinks }) => {
  return (
    <footer className="footer content-center">
      <nav>
        {navLinks
          .sort((a, b) => b.position - a.position)
          .filter(({ is_folder }) => is_folder)
          .map((parentLink) => {
            const dropdownLinks = navLinks.filter(
              (childLink) => childLink.parent_id === parentLink.id
            );

            return (
              <ul key={parentLink.uuid}>
                <li>
                  <strong>{parentLink.name}</strong>
                </li>
                {dropdownLinks.map(({ uuid, name, slug }) => (
                  <li key={uuid}>
                    <Link href={slug}>{name}</Link>
                  </li>
                ))}
              </ul>
            );
          })}
      </nav>
      <div>
        <Image
          src="https://docrdsfx76ssb.cloudfront.net/static/1642780665/pages/wp-content/uploads/2021/08/bitly_logo.svg"
          width={85}
          height={40}
          alt=""
        />
        <p>
          <span dangerouslySetInnerHTML={{ __html: '&copy;' }} />{' '}
          {new Date().getFullYear()} Bitly | Handmade in San Francisco, Denver,
          New York City, Bielefeld, and all over the world.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
