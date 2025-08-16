//  import axios from 'axios';
// import React from 'react';

//  const axiosSecure = axios.create({
//     baseURL: `https://parcelmanagementserver-mdtahsin.vercel.app`
//  });

//  const useAxiosSecure = () => {
//      return axiosSecure;
// };

//  export default useAxiosSecure; 
 //parcelmanagementserver-mdtahsin.vercel.app //http://localhost:3000


import axios from 'axios';
import React from 'react';
import useAuth from './useAuth';

const axiosSecure = axios.create({
    baseURL: `https://parcelmanagementserver-mdtahsin.vercel.app`
});  

const useAxiosSecure = () => {
    const { user } = useAuth();

    axiosSecure.interceptors.request.use(config => {
        config.headers.Authorization = `Bearer ${user.accessToken}`
        return config;
    }, error => {
        return Promise.reject(error);
    })


    return axiosSecure;
};

export default useAxiosSecure;