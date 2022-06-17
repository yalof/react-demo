import React, { FC } from "react";
import "./Button.css";

type ButtonProps = {
  value?: string;
  disabled?: boolean;
  onClick?: (event: any) => void;
  className: string;
  btnText?: any;
};

const Button: FC<ButtonProps> = ({
  value,
  disabled,
  onClick,
  className,
  btnText,
}) => {
  return (
    <button
      value={value}
      type="submit"
      disabled={disabled}
      onClick={onClick}
      className={className}
    >
      {" "}
      {btnText}{" "}
    </button>
  );
};

export default Button;
