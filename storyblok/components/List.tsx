import type { NextPage } from 'next';
import type { ListStoryblok } from 'storyblok.types';
import SbEditable from 'storyblok-react';

const List: NextPage<{ list: ListStoryblok }> = ({ list }) => {
  const { header, list_items } = list;

  return (
    <SbEditable content={list}>
      <ul>
        {header && (
          <li>
            <header className="font-bold">{header}</header>
          </li>
        )}
        {list_items.map(({ _uid, text }) => (
          <li key={_uid}>{text}</li>
        ))}
      </ul>
    </SbEditable>
  );
};

export default List;
