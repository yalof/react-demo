import React, { FC } from "react";
import "./Input.css";

type InputProps = {
  className?: string;
  type?: string;
  onChange?: (event: any) => void;
  value?: string;
  required?: string;
};

const Input: FC<InputProps> = ({
  className,
  type,
  onChange,
  value,
  required,
  props,
}: any) => {
  return (
    <input
      value={value}
      className={className}
      required={required}
      type={type}
      onChange={onChange}
    />
  );
};

export default Input;
