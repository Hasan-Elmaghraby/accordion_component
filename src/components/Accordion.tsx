import { useState } from "react";
import { GoChevronUp, GoChevronRight } from "react-icons/go";

interface AccordionProps {
  items: {
    id: number;
    label: string;
    content: string;
  }[];
}
export const Accordion = ({ items }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState<number | null>(null);

  const handleClick = (currentIndex: number) => {
    setIsOpen((currentExpandedIndex) =>
      currentExpandedIndex === currentIndex ? null : currentIndex
    );
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === isOpen;

    const icon = isExpanded ? <GoChevronUp /> : <GoChevronRight />;
    const content = isExpanded && (
      <div className="transition delay-150 duration-300 ease-in-out">
        {item.content}
      </div>
    );
    return (
      <div className="" key={item.id}>
        <div
          onClick={() => handleClick(index)}
          className="flex justify-between items-center bg-sky-500 hover:bg-sky-700 p-5 cursor-pointer transition delay-150 duration-300 ease-in-out"
        >
          {item.label}
          {icon}
        </div>
        {content}
      </div>
    );
  });

  return <div className="flex flex-col gap-2">{renderedItems}</div>;
};
