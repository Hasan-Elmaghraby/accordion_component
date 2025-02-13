import { AccordionITem } from "./AccordionITem";

interface AccordionProps {
  items: {
    id: number;
    label: string;
    content: string;
  }[];
}
export const Accordion = ({ items }: AccordionProps) => {
  const renderedItems = items.map((item) => {
    return (
      <div className="" key={item.id}>
        <AccordionITem item={item} />
      </div>
    );
  });

  return <div className="flex flex-col gap-2">{renderedItems}</div>;
};
