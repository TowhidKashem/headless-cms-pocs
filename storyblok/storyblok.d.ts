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
  component: "card";
  [k: string]: any;
}

export interface CardSpotlightStoryblok {
  title?: string;
  description?: string;
  cards: CardStoryblok[];
  _uid: string;
  component: "card_spotlight";
  [k: string]: any;
}

export interface DropdownMenuStoryblok {
  dropdown_menu_item?: DropdownMenuItemStoryblok[];
  _uid: string;
  component: "dropdown_menu";
  [k: string]: any;
}

export interface DropdownMenuItemStoryblok {
  title?: string;
  description?: string;
  url?: string;
  _uid: string;
  component: "dropdown_menu_item";
  [k: string]: any;
}

export interface HeaderStoryblok {
  body?: any[];
  _uid: string;
  component: "header";
  [k: string]: any;
}

export interface HeaderNavStoryblok {
  header_nav_item?: HeaderNavItemStoryblok[];
  _uid: string;
  component: "header_nav";
  [k: string]: any;
}

export interface HeaderNavItemStoryblok {
  text?: string;
  url?: string;
  is_button?: boolean;
  dropdown_menu?: DropdownMenuStoryblok[];
  _uid: string;
  component: "header_nav_item";
  [k: string]: any;
}

export interface HeroStoryblok {
  headline?: string;
  description?: string;
  button_label?: string;
  quote_label?: string;
  _uid: string;
  component: "hero";
  [k: string]: any;
}

export interface HomeStoryblok {
  hero: HeroStoryblok[];
  card_spotlight?: CardSpotlightStoryblok[];
  _uid: string;
  component: "Home";
  [k: string]: any;
}

export interface LayoutStoryblok {
  header?: HeaderStoryblok[];
  footer?: ListStoryblok[];
  copyright_text?: string;
  _uid: string;
  component: "layout";
  [k: string]: any;
}

export interface ListStoryblok {
  header?: string;
  list_items: ListItemStoryblok[];
  _uid: string;
  component: "list";
  [k: string]: any;
}

export interface ListItemStoryblok {
  text?: string;
  _uid: string;
  component: "list_item";
  [k: string]: any;
}

export interface PageStoryblok {
  header?: HeaderNavStoryblok[];
  footer?: ListStoryblok[];
  copyright_text?: string;
  _uid: string;
  component: "page";
  uuid?: string;
  [k: string]: any;
}
