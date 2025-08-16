import React from 'react';
import { Link, Outlet } from 'react-router';
import logologin from "../assets/newassets/Privacy-policy-rafiki.png";
import logo from "../assets/newassets/logo.png"
const AuthLayout = () => {
    return (
       



<div className="relative hero bg-base-200 min-h-screen">

  {/* ✅ Top-left corner logo */}
  <Link to="/">
  <div className="absolute top-4 left-4 flex items-center z-10">
    <img src={logo} alt="Logo" className="w-8" />
    <h1 className="text-xl font-bold -ml-3 mt-2">
      Parcel<span className="text-green-500">Management🎁</span>
    </h1>
  </div>
  </Link>
  

  {/* ✅ Main Content */}
  <div className="hero-content flex-col lg:flex-row w-full">
    
    {/* Left side - Image */}
    <div className="w-full lg:w-1/2 flex justify-center items-center p-4">
      <img src={logologin} alt="Login" className="max-w-full h-auto" />
    </div>

    {/* Right side - Outlet */}
    <div className="w-full lg:w-1/2 p-4">
      <Outlet />
    </div>
  </div>
</div>


      


    );
};

export default AuthLayout;
