import type { NextPage } from "next";
import type { ListStoryblok } from "storyblok.types";
import SbEditable from "storyblok-react";

const List: NextPage<{ blok: ListStoryblok }> = ({ blok }) => {
  const { header, list_items } = blok;

  return (
    <SbEditable content={blok}>
      <ul>
        {header && (
          <li>
            <header>{header}</header>
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
