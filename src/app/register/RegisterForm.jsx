"use client";
import React, { useState } from "react";
import Input from "../components/form/Input";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { loginUser, registerUser } from "../api/AuthAPI";
import { toast } from "react-toastify";
import Link from "next/link";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
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

    try {
      const response = await registerUser(formData);

      if (response.status) {
        toast.success(response.message || "Registration successful!");
      } else {
        toast.error(
          response.message || "Registration failed. Please try again."
        );
      }
    } catch (error) {
      if (error.response) {
        toast.error(
          error.response.data.message ||
            "Registration failed. Please check your credentials."
        );
      } else {
        toast.error("Registration failed. Please try again.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
      <div className="flex gap-3 max-lg:flex-col">
        <Input
          type="text"
          placeholder="Firstname *"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          placeholder="Lastname *"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>

      <Input
        type="text"
        placeholder="Enter your email *"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <Input
        type="text"
        placeholder="Phone Number"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />

      <div className="relative w-full">
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Create password *"
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

      <p className="text-center text-sm">
        <span>
          Already Have Account ?{" "}
          <Link className="text-primary" href={"/login"}>
            Login Here
          </Link>
        </span>
      </p>

      <button type="submit" className="button">
        Register
      </button>

      <div
        className="flex items-center justify-center bg-gray-100 rounded p-3 gap-2 cursor-pointer hover:bg-gray-200 duration-300 "
        onClick={() =>
          (window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/user/google`)
        }
      >
        <FcGoogle className="text-xl" />
        <span>Register with Google</span>
      </div>
    </form>
  );
};

export default RegisterForm;
