import React from "react";
import LoginForm from "./LoginForm.jsx";

export const metadata = {
  title: "ecomStore | Login",
  description: "One Stop Shop for All Your Needs",
};

const page = () => {
  return (
    <>
      <section className="login-page w-full animate__animated animate__fadeIn animate_faster">
        <div className="container mx-auto flex flex-col items-center justify-center w-1/3 max-sm:w-full px-12 py-18 max-lg:px-6">
          <h1 className="text-3xl font-bold mb-10">Login Here</h1>
          <LoginForm />
        </div>
      </section>
    </>
  );
};

export default page;
