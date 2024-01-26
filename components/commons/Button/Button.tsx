import React from "react";
import ButtonProps from "./button.interface";

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  bgColor,
  textColor,
  border,
  borderRadius,
  ...props
}) => {
  const buttonClasses = `px-4 py-2 rounded ${
    border ? `border ${border}` : ""
  } ${
    variant === "primary" ? bgColor || "bg-blue-500" : bgColor || "bg-gray-500"
  } ${textColor ? `text-${textColor}` : "text-white"} ${
    borderRadius ? `rounded-${borderRadius}` : ""
  }`;

  return <button className={buttonClasses} {...props} />;
};

export default Button;
