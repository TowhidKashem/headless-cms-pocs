export interface ButtonStoryblok {
  text: string;
  url: string;
  _uid: string;
  component: 'button';
  [k: string]: any;
}

export interface CardStoryblok {
  thumbnail: {
    alt?: string;
    copyright?: string;
    id: number;
    filename: string;
    name: string;
    title?: string;
  };
  title?: string;
  description?: string;
  _uid: string;
  component: 'card';
  [k: string]: any;
}

export interface CardSpotlightStoryblok {
  title?: string;
  description?: string;
  cards: CardStoryblok[];
  _uid: string;
  component: 'card_spotlight';
  [k: string]: any;
}

export interface DropdownMenuItemStoryblok {
  text: string;
  url: string;
  description?: string;
  _uid: string;
  component: 'dropdown_menu_item';
  [k: string]: any;
}

export interface HeaderNavItemStoryblok {
  text: string;
  url: string;
  is_button?: boolean;
  dropdown_links?: DropdownMenuItemStoryblok[];
  _uid: string;
  component: 'header_nav_item';
  [k: string]: any;
}

export interface HeroStoryblok {
  headline?: string;
  description?: string;
  button_label?: string;
  quote_label?: string;
  _uid: string;
  component: 'hero';
  [k: string]: any;
}

export interface LayoutStoryblok {
  header?: HeaderStoryblok[];
  _uid: string;
  component: 'layout';
  [k: string]: any;
}

export interface LayoutStoryblok {
  header_nav_left_links?: HeaderNavItemStoryblok[];
  header_nav_right_links?: HeaderNavItemStoryblok[];
  cta_header?: string;
  cta_button?: ButtonStoryblok[];
  footer_lists?: ListStoryblok[];
  footer_copyright_text?: string;
  _uid: string;
  component: 'Layout';
  [k: string]: any;
}

export interface ListStoryblok {
  header?: string;
  list_items: ListItemStoryblok[];
  _uid: string;
  component: 'list';
  [k: string]: any;
}

export interface ListItemStoryblok {
  text?: string;
  _uid: string;
  component: 'list_item';
  [k: string]: any;
}

export interface PageStoryblok {
  header?: HeaderNavStoryblok[];
  footer?: (ListStoryblok | TextStoryblok)[];
  _uid: string;
  component: 'page';
  uuid?: string;
  [k: string]: any;
}

export interface TextStoryblok {
  text?: string;
  _uid: string;
  component: 'text';
  [k: string]: any;
}
