import React from "react";
import RegisterForm from "./RegisterForm.jsx";

export const metadata = {
  title: "ecomStore | Register",
  description: "One Stop Shop for All Your Needs",
};

const page = () => {
  return (
    <>
      <section className="login-page max-lg:h-40 w-full animate__animated animate__fadeIn animate_faster">
        <div className="container mx-auto flex flex-col items-center justify-center w-1/3 max-sm:w-full px-12 py-18 max-lg:px-6">
          <h1 className="text-3xl font-bold mb-10">Register Here</h1>
          <RegisterForm />
        </div>
      </section>
    </>
  );
};

export default page;
