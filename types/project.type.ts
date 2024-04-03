export type ProjectDef = {
  title?: string;
  slug: string;
  name: string;
  address?: string;
  status: "doing" | "completed";
  area?: string;
  year_completed?: string;
  design_by?: string;
  photo?: string;
  images: string[];
};

export type DropdownLink = {
  label: string;
  items: {
    href: string;
    label: string;
  }[];
};
