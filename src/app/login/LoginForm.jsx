"use client";
import React, { useState } from "react";
import Input from "../components/form/Input";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { loginUser } from "../api/AuthAPI";
import { toast } from "react-toastify";
import Link from "next/link";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await loginUser(formData);

      if (response.status) {
        toast.success(response.message || "Login successful!");
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        window.location.href = "/";
      } else {
        toast.error(response.message || "Login failed. Please try again.");
      }
    } catch (error) {
      if (error.response) {
        toast.error(
          error.response.data.message ||
            "Login failed. Please check your credentials."
        );
      } else {
        toast.error("Login failed. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
      <Input
        type="text"
        placeholder="Enter your email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <div className="relative w-full">
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <span
          className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <FiEyeOff /> : <FiEye />}
        </span>
      </div>

      <div className="text-center flex justify-between text-sm">
        <Link className="text-primary" href={"/register"}>
          Register Here
        </Link>
        <span>
          <Link href={"/forgot-password"}>Forgot Password</Link>
        </span>
      </div>

      <button type="submit" className="button" disabled={isLoading}>
        {isLoading ? "Loading..." : "Login"}
      </button>

      <button
        className="flex items-center justify-center bg-gray-100 rounded p-3 gap-2 cursor-pointer hover:bg-gray-200 duration-300 "
        onClick={() =>
          (window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/user/google`)
        }
        type="button"
        disabled={isLoading}
        style={isLoading ? { cursor: "not-allowed", opacity: 0.6 } : {}}
      >
        <FcGoogle className="text-xl" />
        <span>Login with Google</span>
      </button>
    </form>
  );
};

export default LoginForm;
