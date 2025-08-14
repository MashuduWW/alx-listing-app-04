import React from "react";

interface PillProps {
  label: string;
  onClick?: () => void;
  selected?: boolean;
}

const Pill: React.FC<PillProps> = ({ label, onClick, selected }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full border text-sm ${
        selected
          ? "bg-blue-600 text-white"
          : "bg-gray-100 text-gray-700 hover:bg-blue-100"
      }`}
    >
      {label}
    </button>
  );
};

export default Pill;
