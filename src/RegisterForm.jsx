
////***created form for all use */


import React from "react";
import { FaEnvelope, FaImage, FaLock, FaUser } from "react-icons/fa";

//import animationData from "../assets/ register (4).json"; // 🔁 your Lottie JSON path
import animationData from "../src/assets/register (4).json";
import animationDataa from "../src/assets/zpunet icon.json";
import Lottie from "lottie-react";
//import bgImage from "../src/assets/Privacy-policy-rafiki.png";

const RegisterForm = () => {
  return (
    <div className="max-w-md mx-auto bg-base-100 p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-2">Regiser Now!</h1>
      

{/* 🔥 First Lottie Animation */}
      <div className="w-40 mx-auto mb-4">
        <Lottie animationData={animationData} loop={true} />
      </div>

      {/* 🔥 Second Lottie Animation */}
      <div className="w-40 mx-auto mb-4">
        <Lottie animationData={animationDataa} loop={true} />
      </div>
      <div>
        {/* <img src="../src/assets/Privacy-policy-rafiki.png" alt="" /> */}
      </div>
      <form className="space-y-4">
        {/* Name */}
        <div className="flex items-center gap-2">
          <span className="w-12 h-12 flex items-center justify-center bg-base-200 rounded">
            <FaUser className="text-xl" />
          </span>
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="w-full shadow-sm px-4 py-2 border-2 border-transparent focus:border-green-500 focus:outline-none rounded-md"
          />
        </div>

        {/* Email */}
        <div className="flex items-center gap-2">
          <span className="w-12 h-12 flex items-center justify-center bg-base-200 rounded">
            <FaEnvelope className="text-xl" />
          </span>
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="w-full shadow-sm px-4 py-2 border-2 border-transparent focus:border-green-500 focus:outline-none rounded-md"
          />
        </div>

        {/* Password */}
        <div className="flex items-center gap-2">
          <span className="w-12 h-12 flex items-center justify-center bg-base-200 rounded">
            <FaLock className="text-xl" />
          </span>
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="w-full shadow-sm px-4 py-2 border-2 border-transparent focus:border-green-500 focus:outline-none rounded-md"
          />
        </div>

        {/* Photo Upload */}
        <div className="flex items-center gap-2">
          <span className="w-12 h-12 flex items-center justify-center bg-base-200 rounded">
            <FaImage className="text-xl" />
          </span>
          <input
            type="file"
            accept="image/*"
            name="photo"
            className="w-full shadow-sm px-4 py-[9px] border-2 border-transparent focus:border-green-500 focus:outline-none rounded-md file:border-1 file:bg-white file:text-gray-600"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button className="btn btn-neutral w-full">Register</button>
        </div>
      </form>
      
      
    </div>
  );
};

export default RegisterForm;

