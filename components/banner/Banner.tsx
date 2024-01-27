import React from "react";
import { IBannerProps } from "./banner.interface";
import SocialIconsList from "./SocialIconList";
import BackgroundImage from "../commons/Background/BackgroundImg";

const Banner: React.FC<IBannerProps & { variant: "default" | "social" }> = ({
  banner,
  variant,
}) => {
  return (
    <div className="mt-7 max-w-80 m-auto sm:mt-16 sm:max-w-screen-md xl:max-w-screen-lg">
      <div className="p-2 sm:p-3">
        <div className="flex flex-col justify-center items-center rounded-2xl p-2 sm:flex sm:flex-row sm:sm:max-w-screen-lg m-auto sm:max-h-96 bg-white">
          <div
            className={`sm:flex sm:flex-row rounded-2xl bg-[#f4f4f4] ${
              variant === "social" ? "sm:w-full" : "sm:w-11/12"
            }`}
          >
            {variant === "social" ? (
              <div className="sm:flex sm:flex-col sm:justify-between sm:max-w-7xl">
                <div className=" sm:block">
                  <BackgroundImage
                    imageUrl="../../assets/Navbg.png"
                    height="100px"
                    rotate="180deg"
                    showOnSmallScreen={true}
                  />
                </div>

                <div>
                  <SocialIconsList />
                </div>
                <div className=" sm:block">
                  <BackgroundImage
                    imageUrl="../../assets/Navbg.png"
                    height="100px"
                    showOnSmallScreen={true}
                  />
                </div>
              </div>
            ) : (
              <div className="sm:w-11/12">
                <img
                  src="../assets/MacBook.png"
                  alt="macbook.png"
                  className="rounded-t-2xl sm:rounded-l-2xl sm:rounded-r-none sm:w-full sm:h-full"
                />
              </div>
            )}

            <div className="flex flex-col justify-center items-center px-4 rounded-b-2xl sm:w-full sm:p-16 sm:justify-start sm:items-start pb-4">
              <h5
                className="mt-8 text-sm sm:mt-0"
                style={{
                  color: "#667085",
                }}
              >
                {
                  <>
                    {banner.tag} &#x2022;
                    <span>{banner.author}</span>
                  </>
                }
              </h5>

              <h2
                className="text-2xl text-center mt-4 font-medium sm:text-left sm:max-w-sm sm:text-3xl"
                style={{ color: "#344054" }}
              >
                {banner.title}
              </h2>

              <h5
                className="mt-10 text-sm"
                style={{
                  color: "#667085",
                }}
              >
                {
                  <>
                    {banner.readTime} &#x2022;
                    <span> {banner.date}</span>
                  </>
                }
              </h5>
              
            </div>

            {variant !== "social" && (
              
              <BackgroundImage
                imageUrl="../../assets/Navbg.png"
                height="100px"
                
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
