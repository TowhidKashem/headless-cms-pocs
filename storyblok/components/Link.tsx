import React from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';

const CustomLink: NextPage<
  {
    href: string;
  } & React.LinkHTMLAttributes<HTMLAnchorElement>
> = ({ href, children, ...anchorTagProps }) => {
  const isPreview = process.env.ENVIRONMENT !== 'development';

  // Disable links in preview mode otherwise anchor text is not easy to edit in the Storyblok visual editor
  return isPreview ? (
    <a
      href="#"
      {...anchorTagProps}
      onClick={(e: React.SyntheticEvent<HTMLAnchorElement>) =>
        e.preventDefault()
      }
    >
      {children}
    </a>
  ) : (
    <Link href={href} passHref>
      <a {...anchorTagProps}>{children}</a>
    </Link>
  );
};

export default CustomLink;
