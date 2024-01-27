import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="mt-7 max-w-80 m-auto sm:max-w-screen-lg sm:flex sm:items-center sm:justify-center	xl:max-w-screen-2xl	gap-14 sm:mt-20 ">
      <h1
        className="text-3xl	font-bold  text-center sm:max-w-2xl sm:text-6xl	  "
        style={{
          color: "#10202E",
        }}
      >
        Atlast Premier
        <br />
        knowledge Blogs:
      </h1>
      <p
        className=" mt-4  text-sm sm:text-2xl font-medium sm:max-w-lg "
        style={{ color: "#667085" }}
      >
        Immerse yourself in the latest knowledge and research from our team of
        software engineers and design professionals.
      </p>
    </div>
  );
};

export default Hero;
