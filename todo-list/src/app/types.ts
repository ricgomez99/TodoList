export type Task = {
  _id: string;
  title: string;
  body: string;
  date?: string;
};

export type ComponentWithChildren = {
  children: React.ReactNode;
};

export type PostBody = {
  title: string;
  body: string;
  date?: string;
};

export type CardProps = {
  id: string | any;
  title: string;
  body: string;
  date?: string;
  index?: number | any;
};

export interface FormState<T> {
  formData: {
    title: string;
    body: string;
  };
  setFormData: React.Dispatch<T>;
}

export type TooltipChildren = {
  children?: React.ReactNode;
  content: String;
};
