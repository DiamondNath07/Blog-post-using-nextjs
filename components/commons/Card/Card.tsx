import React from "react";

import { CardProps } from "./card.interface";

const Card: React.FC<CardProps> = ({ blog }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <div className="bg-[#F4F4F4] w-full flex justify-center align-middle">
        <img className="rounded-t-lg w-64 h-64" src={blog.image} alt="" />
      </div>

      <div className="p-5">
        <p className="text-sm text-gray-600 font-bold">
          {blog.tags.join(" . ")}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {blog.title}
        </p>
        <p>
          {blog.readTime} . {blog.date}
        </p>
      </div>
    </div>
  );
};

export default Card;
