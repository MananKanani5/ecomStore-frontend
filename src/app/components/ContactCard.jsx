import React from "react";
import { RiMailLine, RiMapPin2Line, RiPhoneLine } from "react-icons/ri";

const ContactCard = ({ type, values }) => {
  const getIcon = () => {
    switch (type) {
      case "Address":
        return <RiMapPin2Line />;
      case "Phone":
        return <RiPhoneLine />;
      case "Email":
        return <RiMailLine />;
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 w-1/3 max-lg:w-full text-center border-1 border-gray-300 p-4 animate__animated animate__fadeInUp">
      <span className="text-2xl bg-[#a79d80] text-white rounded-full p-5">
        {getIcon()}
      </span>
      <span className="font-medium text-lg">{type}</span>
      <div className="flex flex-col text-balance">
        {values.map((val, idx) => (
          <p key={idx}>{val}</p>
        ))}
      </div>
    </div>
  );
};

export default ContactCard;
