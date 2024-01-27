import React from "react";
import Card from "../commons/Card/Card";
import { data } from "@/services/mock.api";
import Banner from "../banner/Banner";
import BlogNav from "./BlogNav";
import Transform from "./Transform";

const Blog: React.FC = () => {
  return (
    <div>
      <BlogNav />
      <Banner
        banner={{
          tag: "FREELANCING 101",
          author: "William George",
          title: "07 Ways to get Consistent Clients from Social Media",
          readTime: "15 Min Read",
          date: "23-05-2023",
        }}
        variant="social"
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:max-w-7xl sm:mx-auto">
        {data.map((blog, index) => (
          <div key={index} className="flex flex-col justify-center items-center mt-24 ">
            <Card key={index} blog={blog} />
          </div>
        ))}
      </div>
      <Transform />
    </div>
  );
};

export default Blog;
