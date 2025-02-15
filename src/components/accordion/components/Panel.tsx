import { ReactNode } from "react";

export interface PanelProps {
  header: string;
  children: ReactNode;
  isOpen?: boolean;
  onClick?: () => void;
  tabIndex?: number;
}

export const Panel: React.FC<PanelProps> = ({
  header,
  children,
  isOpen,
  onClick,
  tabIndex,
}) => {
  return (
    <div className="border-b last:border-none">
      <button
        className="w-full text-left p-4 font-medium bg-gray-100 hover:bg-gray-200 focus:outline-none"
        onClick={onClick}
        tabIndex={tabIndex}
      >
        {header}
      </button>
      {isOpen && <div className="p-4 bg-white">{children}</div>}
    </div>
  );
};
