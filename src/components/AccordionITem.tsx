import { useState } from "react";
import { GoChevronUp, GoChevronRight } from "react-icons/go";

interface item {
  id: number;
  label: string;
  content: string;
}

export const AccordionITem = ({ item }: { item: item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const content = isOpen && (
    <div className="transition delay-150 duration-300 ease-in-out p-2 bg-gray-100 rounded-md ">
      {item.content}
    </div>
  );

  const icon = isOpen ? <GoChevronUp /> : <GoChevronRight />;

  return (
    <div>
      <div
        className="flex justify-between cursor-pointer items-center p-2 bg-gray-200 rounded-md transition delay-150 duration-300 ease-in-out hover:bg-gray-300"
        onClick={() => handleClick()}
      >
        {item.label}
        {icon}
      </div>
      {isOpen && content}
    </div>
  );
};
