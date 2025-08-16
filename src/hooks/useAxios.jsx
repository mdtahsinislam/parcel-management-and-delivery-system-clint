import axios from "axios";

const axiosInstance = axios.create({
    baseURL: `https://parcelmanagementserver-mdtahsin.vercel.app`
})

const useAxios = () => {
    return axiosInstance;
};

export default useAxios;

// // import axios from "axios"; http://localhost:3000
// // import React from 'react';
// // import useAuth from "./useAuth";

// // const axiosInstance = axios.create({
// //     baseURL: `http://parcelmanagementserver-mdtahsin.vercel.app`

// // });

// // const useAxios = () => {
// //     const { user } = useAuth();

// //     // interceptor অ্যাড করো axiosInstance এ
// //     axiosSecure.interceptors.request.use(config => {
// //         if (user?.accessToken) {
// //             config.headers.Authorization = `Bearer ${user.accessToken}`;
// //         }
// //         return config;
// //     }, error => {
// //         return Promise.reject(error);
// //     });

// //     return axiosInstance;
// // };

// // export default useAxios;




// import axios from "axios";
// import React from 'react';
// import useAuth from "./useAuth";

// const axiosSecure = axios.create({
//   baseURL: `http://parcelmanagementserver-mdtahsin.vercel.app`
// });

// const useAxios = () => {
//   const { user } = useAuth();

//   axiosSecure.interceptors.request.use(
//     (config) => {
//       if (user?.accessToken) {
//         config.headers.Authorization = `Bearer ${user.accessToken}`;
//       }
//       return config;
//     },
//     (error) => {
//       return Promise.reject(error);
//     }
//   );

//   return axiosSecure;
// };

// export default useAxios;



// import axios from "axios";
// import React from 'react';
// import useAuth from "./useAuth";

// const axiosSecure = axios.create({
//   baseURL: `http://parcelmanagementserver-mdtahsin.vercel.app`,
// });

// const useAxios = () => {
//   const { user } = useAuth();

//   axiosSecure.interceptors.request.use(
//     (config) => {
//       if (user?.accessToken) {
//         config.headers.Authorization = `Bearer ${user.accessToken}`;
//       }
//       return config;
//     },
//     (error) => {
//       return Promise.reject(error);
//     }
//   );

//   return axiosSecure; // ✅ ঠিক এটা return করতে হবে
// };

// export default useAxios;



// // useAxios.js
// import axios from "axios";
// import React from "react";
// import useAuth from "./useAuth"; // Ensure useAuth provides user.accessToken properly

// // Create the axios instance
// const axiosSecure = axios.create({
//   baseURL: `http://parcelmanagementserver-mdtahsin.vercel.app`, // 🔁 Change this if deployed to Vercel or other
// });

// // Create and return custom axios hook
// const useAxios = () => {
//   const { user } = useAuth();

//   // Attach interceptor only if accessToken exists
//   axiosSecure.interceptors.request.use(
//     (config) => {
//       if (user?.accessToken) {
//         config.headers.Authorization = `Bearer ${user.accessToken}`;
//         // Optional: log to console
//         console.log("✅ Header set:", config.headers.Authorization);
//       } else {
//         console.warn("⚠️ No accessToken found in useAxios");
//       }
//       return config;
//     },
//     (error) => {
//       return Promise.reject(error);
//     }
//   );

//   return axiosSecure;
// };

// export default useAxios;
