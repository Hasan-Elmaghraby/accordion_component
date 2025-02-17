import React, { useEffect, useState } from "react";
import { GoChevronUp, GoChevronRight } from "react-icons/go";
import classnames from "classnames";
import type { AccordionProps } from "./AccordionProps";

export const Accordion: React.FC<AccordionProps> = ({
  disabledCollapse,
  items,
  defaultActiveKey,
  hiddenIcon,
  icon,
}) => {
  const [isOpen, setIsOpen] = useState<
    number | string | number[] | string[] | null
  >([]);

  const handleClick = (currentIndex: number) => {
    if (
      Array.isArray(disabledCollapse) &&
      disabledCollapse.some((key) => key === items[currentIndex].id)
    ) {
      return;
    }
    setIsOpen((currentExpandedIndex) =>
      currentExpandedIndex === currentIndex ? null : currentIndex
    );
  };

  useEffect(() => {
    items.map((item, index) => {
      if (
        Array.isArray(defaultActiveKey) &&
        defaultActiveKey.some((key) => key === item.id)
      ) {
        setIsOpen(() => {
          return index;
        });
      }
    });
  }, [items, defaultActiveKey]);

  const renderedItems = items.map((item, index) => {
    const classes = classnames(
      "flex justify-between items-center bg-sky-500 hover:bg-sky-700 p-5 cursor-pointer transition delay-150 duration-300 ease-in-out",
      {
        "!bg-red-500 pointer-events-none":
          Array.isArray(disabledCollapse) &&
          (disabledCollapse as (string | number)[]).includes(item.id),
      }
    );
    const isExpanded = index === isOpen;

    const defaultIcon = isExpanded ? <GoChevronUp /> : <GoChevronRight />;
    const content = isExpanded && (
      <div className="transition delay-150 duration-300 ease-in-out">
        {item.content}
      </div>
    );
    const customIcon = icon ? (
      <div className={`${isExpanded ? "rotate-270" : ""}`}>{icon}</div>
    ) : null;

    return (
      <div className="" key={item.id}>
        <div onClick={() => handleClick(index)} className={classes}>
          {item.label}
          {hiddenIcon ? null : customIcon || defaultIcon}
        </div>
        {content}
      </div>
    );
  });

  return <div className="flex flex-col gap-2">{renderedItems}</div>;
};
