import React from "react";
import BackgroundImage from "../commons/Background/BackgroundImg";

const Transform: React.FC = () => {
  return (
    <div className="mt-7 max-w-80 m-auto sm:mt-16 sm:max-w-7xl sm:relative  	xl:max-w-screen-lg ">
      <div className=" p-2 sm:p-3">
        <div className="flex flex-col justify-center items-center rounded-2xlsm:flex sm:flex-row sm:max-w-7xl sm:relative  m-auto sm:max-h-96 bg-clip-content  ">
          <div
            className="flex flex-col  justify-center sm:flex sm:flex-row rounded-2xl bg-gradient-to-r from-cyan-500  to-blue-500
           sm:max-w-7xl sm:w-full"
            style={{
              backgroundColor: "#f4f4f4",
              backgroundImage: "linear-gradient(#2F5478,#22405C )",
            }}
          >
            <div className=" sm:w-full  rounded-t-2xl sm:flex sm:flex-col sm:justify-between sm:max-w-7xl ">
              {/* background-top */}

              <BackgroundImage
                imageUrl="../../assets/Navbg.png"
                height="100px"
                showOnSmallScreen={true}
                rotate="180deg"
              />
              <div className="  max-w-80 mx-auto ml-10 sm:ml-24">
                <h1 className="text-white text-4xl font-light max-w-64 sm:max-w-2xl sm:text-5xl ">
                  Transforming your
                  <span className="font-bold pl-2 ">Ideas into reality</span>
                </h1>
                <p className="max-w-80 mx-auto text-xs mt-4 sm:text-lg">
                  Lets build something extraordinary together to captivate your
                  audience.
                </p>
              </div>
              {/* background-sm */}
              <div className="hidden sm:block">

              <BackgroundImage 
                imageUrl="../../assets/Navbg.png"
                height="100px"
                showOnSmallScreen={true}
              />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center  ml-16  mt-10 text-center border-white border-2 p-10 rounded-full h-40 w-40  sm:absolute sm:right-20 sm:top-20 ">
              <p>Lets work together</p>
            </div>
            {/* background-bottom */}
            <BackgroundImage
              imageUrl="../../assets/Navbg.png"
              height="100px"
              showOnSmallScreen={true}
              
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transform;
