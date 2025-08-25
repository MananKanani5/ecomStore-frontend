import React from "react";

const TextArea = ({
  placeholder = "Enter text",
  name,
  value,
  onChange,
  rows = 5,
  className = "",
  ...rest
}) => {
  return (
    <textarea
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      rows={rows}
      className={`border border-gray-300 w-full rounded-sm p-2 outline-none focus:border-gray-500 resize-y ${className}`}
      {...rest}
    />
  );
};

export default TextArea;
