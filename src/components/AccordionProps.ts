export interface AccordionProps {
  customClass?: string;
  disabledCollapse?: string[] | number[] | null;
  hiddenIcon?: boolean;
  icon?: React.ReactNode;
  defaultActiveKeys?: string[] | number[] | null;
  toggleAccordion?: boolean;
  items: {
    id: number | string;
    label: string;
    content: React.ReactNode;
  }[];
}
