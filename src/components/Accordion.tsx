import React, { useEffect, useState } from "react";
import { GoChevronUp, GoChevronRight } from "react-icons/go";
import classnames from "classnames";
import type { AccordionProps } from "./AccordionProps";

export const Accordion: React.FC<AccordionProps> = ({
  disabledCollapse,
  items,
  defaultActiveKeys,
  hiddenIcon,
  icon,
  toggleAccordion = false,
}) => {
  const [isOpen, setIsOpen] = useState<(number | string)[]>([]);

  const handleClick = (currentIndex: number | string) => {
    if (
      Array.isArray(disabledCollapse) &&
      disabledCollapse.some((key) => key === items[currentIndex as number].id)
    ) {
      return;
    }

    setIsOpen((prevOpen) =>
      toggleAccordion
        ? prevOpen.includes(currentIndex)
          ? []
          : [currentIndex]
        : prevOpen.includes(currentIndex)
        ? prevOpen.filter((key) => key !== currentIndex)
        : [...prevOpen, currentIndex]
    );
  };

  useEffect(() => {
    if (Array.isArray(defaultActiveKeys)) {
      setIsOpen(toggleAccordion ? [defaultActiveKeys[0]] : defaultActiveKeys);
    }
  }, [defaultActiveKeys, toggleAccordion]);

  const renderedItems = items.map((item) => {
    const classes = classnames(
      "flex justify-between items-center bg-sky-500 hover:bg-sky-700 p-5 cursor-pointer transition delay-150 duration-300 ease-in-out",
      {
        "!bg-red-500 pointer-events-none":
          Array.isArray(disabledCollapse) &&
          (disabledCollapse as (string | number)[]).includes(item.id),
      }
    );

    const isExpanded = isOpen.includes(item.id);

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
        <div onClick={() => handleClick(item.id)} className={classes}>
          {item.label}
          {hiddenIcon ? null : customIcon || defaultIcon}
        </div>
        {content}
      </div>
    );
  });

  return <div className="flex flex-col gap-2">{renderedItems}</div>;
};
