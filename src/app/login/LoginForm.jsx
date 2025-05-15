"use client";
import React, { useState } from "react";
import Input from "../components/form/Input";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form className="flex flex-col gap-4 w-full">
      <Input
        type="text"
        placeholder="Enter your email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <div className="relative w-full">
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <span
          className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <FiEyeOff /> : <FiEye />}
        </span>
      </div>

      <button type="submit" className="button">
        Login
      </button>

      <div
        className="flex items-center justify-center bg-gray-100 rounded p-3 gap-2 cursor-pointer hover:bg-gray-200 duration-300 "
        onClick={() =>
          (window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/user/google`)
        }
      >
        <FcGoogle className="text-xl" />
        <span>Login with Google</span>
      </div>
    </form>
  );
};

export default LoginForm;
