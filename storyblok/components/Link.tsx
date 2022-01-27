import type { NextPage } from 'next';
import Link from 'next/link';

const CustomLink: NextPage<{ href: string }> = ({ href, children }) => {
  return <Link href={href}>{children}</Link>;
};

export default CustomLink;
