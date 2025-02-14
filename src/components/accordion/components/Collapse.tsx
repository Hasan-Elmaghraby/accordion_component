import React, { useState, ReactNode } from "react";
import type { PanelProps } from "./Panel";

interface CollapseProps {
  accordion?: boolean;
  children: ReactNode;
  tabIndex?: number;
}

const Collapse: React.FC<CollapseProps> = ({ accordion = false, children }) => {
  const items = React.Children.toArray(
    children
  ) as React.ReactElement<PanelProps>[];
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [openPanels, setOpenPanels] = useState<number[]>([]);

  const handleToggle = (index: number) => {
    if (accordion) {
      setOpenIndex(openIndex === index ? null : index);
    } else {
      setOpenPanels((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    }
  };

  return (
    <div className="w-full max-w-md mx-auto border rounded-lg shadow-lg">
      {items.map((item, index) =>
        React.cloneElement(item, {
          isOpen: accordion ? openIndex === index : openPanels.includes(index),
          onClick: () => handleToggle(index),
        })
      )}
    </div>
  );
};

export { Collapse };
