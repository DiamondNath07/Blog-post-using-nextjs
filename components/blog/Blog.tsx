import React from "react";
import Card from "../commons/Card/Card";
import { data } from "@/services/mock.api";

const Blog: React.FC = () => {
  return (
    <div>
      {/* BlogNav */}
      <div className="flex flex-col justify-center items-center mt-16 sm:flex-row sm:max-w-7xl sm:m-auto sm:mt-24 ">
        <h1
          className="text-5xl font-bold sm:w-full"
          style={{
            color: "#344054",
          }}
        >
          Blogs
        </h1>
        <ul
          className="grid grid-cols-6 max-w-sm m-auto text-xs justify-center items-center text-center mt-8 gap-6 sm:flex sm:flex-row sm:justify-between sm:max-w-3xl sm:items-end sm:w-full "
          style={{
            color: "#98A2B3",
          }}
        >
          <li className="col-span-3 text-right px-2 ">
            <a
              href="/"
              className="border-2 px-3 py-2 rounded-full"
              style={{
                border: "2px solid #294F74",
                backgroundColor: "#EDF2F5",
                color: "#294F74",
              }}
            >
              All Blogs
            </a>
          </li>
          <li className="col-span-3 text-left px-2">
            <a
              href="/"
              style={{
                color: "#98A2B3",
              }}
            >
              Trends
            </a>
          </li>
          <li className="col-span-2">
            <a
              href="/"
              style={{
                color: "#98A2B3",
              }}
            >
              Research
            </a>
          </li>
          <li className="col-span-2">
            <a
              href="/"
              style={{
                color: "#98A2B3",
              }}
            >
              Research
            </a>
          </li>
          <li className="col-span-2 text-xs  tracking-tighter">
            <a
              href="/"
              style={{
                color: "#98A2B3",
              }}
            >
              In-house knowledge
            </a>
          </li>
        </ul>
      </div>

      {/* normal card section  */}
      {/* card section */}
      <div className="mt-7 max-w-80 m-auto sm:mt-16 sm:max-w-screen-md 	xl:max-w-screen-lg ">
        <div className=" p-2 sm:p-3">
          <div className="flex flex-col justify-center items-center rounded-2xl p-2 sm:flex sm:flex-row sm:sm:max-w-screen-lg m-auto sm:max-h-96 bg-white ">
            <div
              className="sm:flex sm:flex-row rounded-2xl"
              style={{
                backgroundColor: "#f4f4f4",
              }}
            >
              <div className=" sm:w-full  rounded-t-2xl sm:flex sm:flex-col sm:justify-between sm:max-w-7xl ">
                {/* background-top */}
                <div
                  className=""
                  style={{
                    backgroundImage: `url("../../assets/Navbg.png")`,
                    backgroundSize: "cover",
                    backgroundPosition: "50% 50%",
                    backgroundRepeat: "no-repeat",
                    rotate: "180deg",
                    height: "100px",
                  }}
                ></div>

                <div>
                  <ul className="flex flex-row">
                    <li>
                      <img src="../../assets/Facebook.png" alt="icon" />
                    </li>
                    <li>
                      <img src="../../assets/LinkedIn.png" alt="icon" />
                    </li>
                    <li>
                      <img src="../../assets/Instagram.png" alt="icon" />
                    </li>
                    <li>
                      <img src="../../assets/Behance.png" alt="icon" />
                    </li>
                    <li>
                      <img src="../../assets/Dribble.png" alt="icon" />
                    </li>
                  </ul>
                </div>
                {/* background-sm */}
                <div
                  className="hidden sm:block "
                  style={{
                    backgroundImage: `url("../../assets/Navbg.png")`,
                    backgroundSize: "cover",
                    backgroundPosition: "50% 50%",
                    backgroundRepeat: "no-repeat",
                    height: "100px",
                  }}
                ></div>
              </div>
              <div className=" flex flex-col justify-center items-center px-4 rounded-b-2xl sm:w-full sm:p-16 sm:justify-start  sm:items-start pb-4 ">
                <h5
                  className="mt-16 text-sm sm:mt-0"
                  style={{
                    color: "#667085",
                  }}
                >
                  FREELANCING 101 &#x2022;
                  <span> William George</span>
                </h5>

                <h2
                  className="text-2xl text-center mt-4 font-medium sm:text-left sm:max-w-sm sm:text-3xl "
                  style={{ color: "#344054" }}
                >
                  07 Ways to get Consistent Clients from Social Media
                </h2>
                <h5
                  className="mt-10 text-sm"
                  style={{
                    color: "#667085",
                  }}
                >
                  15 Min Read &#x2022;
                  <span> 23-05-2023</span>
                </h5>
              </div>
              {/* background-bottom */}
              <div
                className=""
                style={{
                  backgroundImage: `url("../../assets/Navbg.png")`,
                  backgroundSize: "cover",
                  backgroundPosition: "50% 50%",
                  backgroundRepeat: "no-repeat",
                  height: "100px",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* card looping section */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((blog, index) => (
          <div className="flex flex-col justify-center items-center mt-24">
            <Card key={index} blog={blog} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
