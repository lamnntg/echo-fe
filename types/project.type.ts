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
