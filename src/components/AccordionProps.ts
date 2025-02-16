export interface AccordionProps {
  customClass?: string;
  disabledCollapse?: string[] | number[] | null;
  showIcon?: boolean;
  icon?: React.ReactNode;
  defaultActiveKey?: string[] | number[] | null;
  items: {
    id: number | string;
    label: string;
    content: React.ReactNode;
  }[];
}
