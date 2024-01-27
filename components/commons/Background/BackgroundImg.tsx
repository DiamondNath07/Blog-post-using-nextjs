import React from "react";
import { IBackgroundImageProps } from "./backgroundImg.interface";

const BackgroundImage: React.FC<IBackgroundImageProps> = ({
  imageUrl,
  height,
  showOnSmallScreen,
  rotate,
}) => {
  return (
    <div
      className={showOnSmallScreen ? "" : "hidden sm:block "}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "50% 50%",
        backgroundRepeat: "no-repeat",
        transform: rotate ? `rotate(${rotate})` : undefined,
        height: height,
      }}
    ></div>
  );
};

export default BackgroundImage;
