"use client";
import React, { useState } from "react";
import TextArea from "./form/TextArea";
import { toast } from "react-toastify";
import Input from "./form/Input";

const ContactForm = ({ className }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
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
      const response = true;

      if (response.status) {
        toast.success(response.message || "Message sent successfully!");
      } else {
        toast.error(
          response.message || "Message failed to send. Please try again."
        );
      }
    } catch (error) {
      if (error.response) {
        toast.error(
          error.response.data.message ||
            "Message failed to send. Please try again."
        );
      } else {
        toast.error("Message failed to send. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col gap-7 w-full ${className}`}
    >
      <div className="flex gap-7 max-lg:flex-col">
        <Input
          type="text"
          placeholder="Your name"
          name="name"
          value={formData.name}
          className="bg-white border-0"
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          placeholder="Your email"
          name="email"
          className="bg-white border-0"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <Input
        type="text"
        placeholder="Subject"
        name="subject"
        className="bg-white border-0"
        value={formData.subject}
        onChange={handleChange}
        required
      />
      <TextArea
        placeholder="Your message"
        name="message"
        className="bg-white border-0"
        value={formData.message}
        rows={6}
        onChange={handleChange}
        required
      />

      <button type="submit" className="button" disabled={isLoading}>
        {isLoading ? "Loading..." : "Login"}
      </button>
    </form>
  );
};

export default ContactForm;
