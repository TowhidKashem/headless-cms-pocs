export interface NavLink {
  id: number;
  is_folder: boolean;
  is_startpage: boolean;
  name: string;
  parent_id: number;
  path: string;
  position: number;
  published: boolean;
  real_path: string;
  slug: string;
  uuid: string;
}

export interface NavLinks {
  [key: string]: NavLink;
}
