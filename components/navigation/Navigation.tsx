"use client";
import { useState } from "react";
import Button from "../commons/Button/Button";

const Navigation: React.FC = () => {
  return (
    <div className="flex flex-col justify-center align-middle">
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
      <div className="flex justify-center align-middle ">
        <div className="border-2 rounded-full -mt-14 bg-white flex items-center justify-center">
          <Button
            variant="primary"
            bgColor="#FCFCFD"
            textColor="#294F74"
     
          >
            <img src="../../assets/A.png" alt="Icon" className="w- h-6" />
          </Button>

          <Button variant="primary" bgColor="#FCFCFD" textColor="#294F74">
            <img
              src="../../assets/basil_menu-solid.png"
              alt="Icon"
              className="w-6 h-6"
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
