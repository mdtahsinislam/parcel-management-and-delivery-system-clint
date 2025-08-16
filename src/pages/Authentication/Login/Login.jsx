import Lottie from 'lottie-react';
import React from 'react';
import { FaEnvelope, FaImage, FaLock, FaUser } from 'react-icons/fa';
import SocialLogin from './SocialLogin';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';
import animationData from "../../../assets/zpunet icon.json"
import useAuth from '../../../hooks/useAuth';
const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {signIn}=useAuth();
const location =useLocation();
const navigate=useNavigate();
const from =location.state?.form || '/';
//console.log(location);
    const onSubmit = data => {
        signIn(data.email,data.password)
        .then(result =>{
            console.log(result.user);
            navigate(from);
        })
        .catch(error=>console.log(error))
    }
    return (
        <div className="max-w-md mx-auto bg-base-100 p-6 rounded-lg shadow-md">
               <h1 className="text-3xl font-bold mb-2">Wellcome Back!</h1>
                {/* 🔥 First Lottie Animation */}
              <div className="w-40 mx-auto mb-4">
                <Lottie animationData={animationData} loop={true} />
              </div>
             <div className='flex'>
                <p className='mb-2.5 '>Login with </p>
                <p className='font-bold ml-1'>Parcel<span className='text-green-500'>Management🎁</span></p>
             </div>
       
       {/* 🔥 First Lottie Animation */}
             {/* <div className="w-40 mx-auto mb-4">
               <Lottie animationData={animationData} loop={true} />
             </div> */}
       
             {/* 🔥 Second Lottie Animation */}
             {/* <div className="w-40 mx-auto mb-4">
               <Lottie animationData={animationDataa} loop={true} />
             </div> */}
             <div>
               {/* <img src="../src/assets/Privacy-policy-rafiki.png" alt="" /> */}
             </div>
             <form  onSubmit={handleSubmit(onSubmit)}  className="space-y-4">
               {/* Name */}
               {/* <div className="flex items-center gap-2">
                 <span className="w-12 h-12 flex items-center justify-center bg-base-200 rounded">
                   <FaUser className="text-xl" />
                 </span>
                 <input
                   type="text"
                   placeholder="Name"
                   name="name"
                   className="w-full shadow-sm px-4 py-2 border-2 border-transparent focus:border-green-500 focus:outline-none rounded-md"
                 />
               </div> */}
       
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
                   {...register('password', {
                                required: true,
                                minLength: 6
                            })}
                   placeholder="Password"
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
       <p>Forgot Password</p>
               {/* Photo Upload */}
               {/* <div className="flex items-center gap-2">
                 <span className="w-12 h-12 flex items-center justify-center bg-base-200 rounded">
                   <FaImage className="text-xl" />
                 </span>
                 <input
                   type="file"
                   accept="image/*"
                   name="photo"
                   className="w-full shadow-sm px-4 py-[9px] border-2 border-transparent focus:border-green-500 focus:outline-none rounded-md file:border-1 file:bg-white file:text-gray-600"
                 />
               </div> */}
       
               {/* Submit Button */}
               <div className="pt-4">
                 <button className="btn btn-neutral w-full">Continue</button>
               </div>
              <p>* Do not have an account? <Link to="/register"><span className='text-blue-600'>Register</span></Link></p>
              <p className='text-center'>Or</p>

            
             </form>
             
             <SocialLogin></SocialLogin>
           </div>
         );
       };
       

export default Login;

