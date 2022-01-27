import type { NextPage } from 'next';
import type { ListStoryblok, TextStoryblok } from 'storyblok.types';
import SbEditable from 'storyblok-react';
import Image from 'next/image';
import List from '@components/List';

const Footer: NextPage<{
  footer_lists: ListStoryblok[];
  footer_copyright_text: TextStoryblok;
}> = ({ footer_lists, footer_copyright_text }) => {
  return (
    <footer className="footer content-center">
      <nav>
        {footer_lists.map((list) => (
          <List key={list._uid} list={list} />
        ))}
      </nav>
      <div>
        <Image
          src="https://docrdsfx76ssb.cloudfront.net/static/1642780665/pages/wp-content/uploads/2021/08/bitly_logo.svg"
          width={85}
          height={40}
          alt=""
        />
        <SbEditable content={footer_copyright_text}>
          <p>
            <span dangerouslySetInnerHTML={{ __html: '&copy;' }} />{' '}
            {new Date().getFullYear()} {footer_copyright_text.text}
          </p>
        </SbEditable>
      </div>
    </footer>
  );
};

export default Footer;
