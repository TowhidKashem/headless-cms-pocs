import type { NextPage } from "next";
import type { ListStoryblok } from "storyblok";

const List: NextPage<{ blok: ListStoryblok }> = ({ blok }) => {
  return (
    <ul>
      {blok.header && (
        <li>
          <header>{blok.header}</header>
        </li>
      )}
      {blok.list_items.map(({ _uid, text }) => (
        <li key={_uid}>{text}</li>
      ))}
    </ul>
  );
};

export default List;
