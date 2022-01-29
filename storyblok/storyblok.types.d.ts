export interface BottomCtaStoryblok {
  title?: string;
  button?: ButtonStoryblok[];
  _uid: string;
  component: "bottom_cta";
  [k: string]: any;
}

export interface ButtonStoryblok {
  label: string;
  url: string;
  _uid: string;
  component: "button";
  [k: string]: any;
}

export interface CardStoryblok {
  title?: string;
  description?: string;
  thumbnail: {
    alt?: string;
    copyright?: string;
    id: number;
    filename: string;
    name: string;
    title?: string;
  };
  tag?: string;
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

export interface HeroStoryblok {
  title?: string;
  description?: string;
  image: {
    alt?: string;
    copyright?: string;
    id: number;
    filename: string;
    name: string;
    title?: string;
  };
  button?: ButtonStoryblok[];
  _uid: string;
  component: "hero";
  [k: string]: any;
}

export interface PageStoryblok {
  hero?: HeroStoryblok[];
  card_spotlight?: CardSpotlightStoryblok[];
  bottom_cta?: BottomCtaStoryblok[];
  _uid: string;
  component: "Page";
  [k: string]: any;
}
