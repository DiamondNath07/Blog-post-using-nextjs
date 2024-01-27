import React from "react";

import { CardProps } from "./card.interface";

const Card: React.FC<CardProps> = ({ blog }) => {
  return (
    <div className="bg-white p-2 rounded-2xl w-80 sm:w-96	">
      <div
        className=" m-auto bg-[#F4F4F4] rounded-2xl shadow flex flex-col  "
        style={{
          height: "516px",
        }}
      >
        <div className="bg-[#edebeb]  flex justify-center   rounded-t-2xl">
          <img
            className="rounded-t-2xl w-full h-60 object-contain	 "
            src={blog.image}
            alt=""
          />
        </div>

        <div className="mt-8 max-w-72	mx-auto flex flex-col justify-center items-start px-6 ">
          <p
            className="text-sm font-medium"
            style={{
              color: "#667085",
            }}
          >
            {blog.tags.join(" . ")}
          </p>
          <p
            className="mb-3 font-normal text-2xl mt-5 max-w-72	mx-auto"
            style={{
              color: "#344054",
            }}
          >
            {blog.title}
          </p>
          <p
            className="mt-8"
            style={{
              color: "#667085",
            }}
          >
            {blog.readTime} . {blog.date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
