import React from "react";
import Card from "../commons/Card/Card";
import { data } from "@/services/mock.api";


const Blog: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((blog, index) => (
        <div>
          <div>
            
          </div>
          <Card key={index} blog={blog} />
        </div>
      ))}
    </div>
  );
};

export default Blog;
