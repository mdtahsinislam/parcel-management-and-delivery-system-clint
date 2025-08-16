import Lottie from 'lottie-react';
import React, { useState } from 'react';
import animationData from "../../../assets/register (4).json"
import { FaEnvelope, FaImage, FaLock, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router';
import SocialLogin from './SocialLogin';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';
import useAxios from '../../../hooks/useAxios';
const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
const {createUser} =useAuth();
const [profilepic,setProfilePic]=useState('');
const axiosInstance=useAxios();
const navigate = useNavigate();



        const onSubmit = data => {
            console.log(data);
             //console.log(createUser);
            createUser(data.email,data.password)
            .then (async(result) =>{
                console.log(result.user)
                navigate('/');
                
                const userInfo={
  email:data.email,
  role:'user',
  name: data.name, // ✅ Name যোগ করা হয়েছে
  photo: profilepic, // ✅ Photo URL যোগ করা হয়েছে
  created_at:new Date().toISOString(),
  last_log_in:new Date().toISOString()
}

         const userRes=await axiosInstance.post('/users',userInfo);
         console.log(userRes.data);
            })
            .catch(error => {
                console.log(error)
            })
        }
        const handleImageUpload=async(e)=>{
            const image=e.target.files[0];
            console.log(image);
            const formData=new FormData();
            formData.append('image',image);
            const imageUploadUrl=` https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_UPLOAd_KEY}`
            const res=await axios.post(imageUploadUrl,formData);
           setProfilePic(res.data.data.url);
        }
    return (
         <div className="max-w-md mx-auto bg-base-100 p-6 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold mb-2">Create Account</h1>
              
        
        {/* 🔥 First Lottie Animation */}
              <div className="w-40 mx-auto mb-4">
                <Lottie animationData={animationData} loop={true} />
              </div>
        
              
              <div>
                {/* <img src="../src/assets/Privacy-policy-rafiki.png" alt="" /> */}
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Name */}
                <div className="flex items-center gap-2">
                  <span className="w-12 h-12 flex items-center justify-center bg-base-200 rounded">
                    <FaUser className="text-xl" />
                  </span>
                  <input //in this input name not go
                    type="text"
                    placeholder="Name"
                      {...register('name')}
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
                      {...register('email')}
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
                    {...register('password', {
                                required: true,
                                minLength: 6
                            })}
                    name="password"
                    className="w-full shadow-sm px-4 py-2 border-2 border-transparent focus:border-green-500 focus:outline-none rounded-md"
                  />
                   {
                            errors.password?.type === 'required' && <p className='text-red-500'>Password is required</p>
                        }
                        {
                            errors.password?.type === 'minLength' && <p className='text-red-500'>Password Must be 6 characters or longer</p>
                        }
                </div>
        
                {/* Photo Upload */}
                <div className="flex items-center gap-2">
                  <span className="w-12 h-12 flex items-center justify-center bg-base-200 rounded">
                    <FaImage className="text-xl" />
                  </span>
                  <input
                    type="file"
                    //  {...register('photo')}
                    onChange={handleImageUpload}
                    accept="image/*"
                    name="photo"
                    className="w-full shadow-sm px-4 py-[9px] border-2 border-transparent focus:border-green-500 focus:outline-none rounded-md file:border-1 file:bg-white file:text-gray-600"
                  />
                </div>
        
                {/* Submit Button */}
                <div className="pt-4">
                  <button className="btn btn-neutral w-full">Register</button>
                </div>
           <p className='mb-1.5'>*Already have an account?<Link to="/login"><span className='text-blue-600'>Login</span></Link></p>
              </form>
              <SocialLogin></SocialLogin>
              
            </div>
          );
        };
        
     
        
        

export default Register;

