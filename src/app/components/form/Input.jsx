import React from "react";

const Input = ({
  type = "text",
  placeholder = "Enter text",
  name,
  value,
  onChange,
  className = "",
  ...rest
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      className={`border border-gray-300 w-full rounded-sm transition-all duration-300 p-2 outline-none focus:border-gray-500 ${className}`}
      {...rest}
    />
  );
};

export default Input;
