import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  bgColor?: string;
  textColor?: string;
  border?: string;
  borderRadius?: string;
}

export default ButtonProps;
