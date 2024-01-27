import React from "react";

import { CardProps } from "./card.interface";

const Card: React.FC<CardProps> = ({ blog }) => {
  return (
    <div
      className="max-w-xs m-auto bg-white rounded-lg shadow flex flex-col  "
      style={{
        height: "516px",
      }}
    >
      <div className="bg-[#F4F4F4]  flex justify-center   ">
        <img
          className="rounded-t-lg w-full h-60 object-contain	 "
          src={blog.image}
          alt=""
        />
      </div>

      <div className="mt-8 max-w-72	mx-auto flex flex-col justify-center items-center px-4">
        <p className="text-sm font-medium" style={{
          color:"#667085"
        }}>
          {blog.tags.join(" . ")} &#x2022;
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-2xl mt-5">
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
