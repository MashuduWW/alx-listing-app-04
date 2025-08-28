import React from "react";
import type { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, description, imageUrl, children }) => {
  return (
    <div className="rounded-xl shadow-md overflow-hidden border border-gray-200 bg-white dark:bg-gray-900">
      {imageUrl && (
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

export default Card;









