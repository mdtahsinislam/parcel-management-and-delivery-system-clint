import React from 'react';
import { FaBiking, FaRegUser, FaUserShield } from 'react-icons/fa';
import { FaMotorcycle } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";
import { GiScooter } from "react-icons/gi";
import { TbMotorbike } from "react-icons/tb";
import Charges from './Charges';
import Award from './Award';


const Chafe = () => {
    return (

   <div>

     {/* ব্যানার সেকশন */}
                <div
                    className="h-20 flex items-center justify-center bg-cover bg-center mt-3"
                    style={{ backgroundImage: "url('https://i.imghippo.com/files/WyCQ3571ntg.jpg')" }}
                >
                    <p className="text-green-600 text-center font-bold">📦<span className='text-orange-500 font-extrabold'>Welcome</span> to A Complete Parcel Management & Delivery System platform 🎁</p>
                </div>

                



      {/**service section */} 
       <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left Section: Chef Image and Food Preparation */}
                <div className="relative">
                    {/* Main Chef Image */}
                    <img
                        src="https://i.ibb.co.com/zhVzyvM9/delivery1.jpg" // Using the provided direct image URL for the main chef
                        alt="Smiling Chef"
                        className="rounded-lg shadow-xl w-full h-auto object-cover md:max-w-md mx-auto"
                    />
                    {/* Overlaid Food Preparation Image */}
                    <img
                        src="https://i.ibb.co.com/DgzG4Jd6/delivery3.jpg" // Using the provided direct image URL for extra2.jpg
                        alt="Food Preparation"
                        className="absolute bottom-0 md:bottom-[-20%] left-1/2 transform -translate-x-1/2 md:translate-x-[-10%] w-3/4 md:w-2/3 lg:w-1/2 rounded-lg shadow-2xl border-4 border-white"
                        style={{ maxWidth: '400px' }} // Added inline style for better control on smaller screens if needed
                    />
                </div>

                {/* Right Section: Text Content and Benefits */}
                <div className="text-gray-800 space-y-6">
                        <div className="text-gray-800 ">
  <p
    className="text-orange-500 -mt-8   md:text-4xl"
    style={{ fontFamily: '"My Soul", cursive' }}
  >
    A Parcel Management System
  </p>
</div>


                    {/* <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                        Priately unleash &<br />
                        "outside the box"
                    </h1> */}
                    <p className="-mt-5 text-md sm:text-lg leading-relaxed">
                        It will be a modern and automated parcel management and delivery system that simplifies, accelerates, and makes transparent the entire process of parcel booking, tracking, and delivery across all 64 districts of Bangladesh. This platform will have three main users — Merchant, Admin, and Delivery Agent — who will coordinate with each other to ensure a seamless and efficient logistics experience.

Merchants will be able to book parcels, make payments, receive tracking IDs, and monitor the real-time progress of their parcels. Admins will oversee the entire system, including parcel collection, inter-city delivery, warehouse management, and agent assignments. Delivery Agents will collect parcels, transfer them, verify tracking numbers, complete successful deliveries, and earn a predetermined commission for each successful delivery.

The system will automatically calculate charges based on parcel type, weight, and destination, and provide real-time status updates at every step. The Parcel Management & Delivery System will become a reliable, smart, and scalable delivery solution that makes logistics management easier, more efficient, and more customer-friendly for businesses. 🚚📦
                    </p>

                    <div className="space-y-6 mt-8">
                        {/* Quiet Environment */}
                        <div className="flex items-center space-x-4 -mt-6">
                            {/* Icon for Quiet Environment */}
                            <div className="flex-shrink-0 p-3  rounded-full bg-orange-100 text-orange-500">
                                {/* This would typically be an SVG icon. For simplicity, we'll use a placeholder or assume an SVG library. */}
                                {/* For a real project, you might use an icon library like Heroicons or Font Awesome. */}
                              
                                <FaUserShield className="text-blue-600" size={30} />
                                 
      
      
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900">Admin</h3>
                                <p className="text-gray-600">- System control ,- Operational oversight</p>
                            </div>
                        </div>

                        {/* Hygienic Food */}
                        <div className="flex items-center space-x-4 -mt-3">
                            {/* Icon for Hygienic Food */}
                            <div className="flex-shrink-0 p-3 rounded-full bg-orange-100 text-orange-500">
                                <TbMotorbike className="text-blue-500 " size={30}/>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900">Rider</h3>
                                <p className="text-gray-600">Collect/Deliver parcels ,Update status, OTP confirmation ,Warehouse handoff</p>
                            </div>
                        </div>
                        
                        {/* Hygienic Food */}
                        <div className="flex items-center space-x-4 -mt-3">
                            {/* Icon for Hygienic Food */}
                            <div className="flex-shrink-0 p-3 rounded-full bg-orange-100 text-orange-500">
                               <FaRegUser className="text-blue-500" size={30}/>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900">User</h3>
                                <p className="text-gray-600">Creating and submitting parcel booking requests,Making payment,Reviewing the service after successful delivery.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div> 
        <Charges></Charges>  
        <Award></Award>      
   </div>

       
    );
};

export default Chafe;