import React from "react";
import classNames from "classnames";
import { Slot } from "@radix-ui/react-slot";
import "./button.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger" | "ghost";
  icon?: React.ReactNode;
  asChild?: boolean;
  fullWidth?: boolean;
  noPadding?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  asChild,
  variant,
  children,
  fullWidth,
  noPadding,
  ...rest
}) => {
  const variantClass = classNames(
    "button",
    {
      "button--primary": variant === "primary",
      "button--secondary": variant === "secondary",
      "button--danger": variant === "danger",
      "button--ghost": variant === "ghost",
      "button--default": !variant,
    },
    {
      "button--full-width": fullWidth,
      "button--no-padding": noPadding,
    }
  );

  const Comp = asChild ? Slot : "button";

  return (
    <Comp className={variantClass} {...rest}>
      <span>{rest.icon && rest.icon}</span>
      {children}
    </Comp>
  );
};

export default Button;
