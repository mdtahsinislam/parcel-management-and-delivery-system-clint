// // // import React from 'react';
// // // //import { ImArrowUpRight2 } from "react-icons/im";
// // // import logo from '../../../assets/newassets/logo.png';
// // // import { ImArrowUpRight2 } from 'react-icons/im';
// // // import { Link, NavLink } from 'react-router';
// // // import useAuth from '../../../hooks/useAuth';
// // // //import lo from "../../../assets/newassets/IMG_20250708_213512__1_-removebg-preview.png"
// // // const Navbar = () => {
// // //     const {user,logOut}=useAuth();
// // //     const handleLogOut=()=>{
// // //         logOut()
// // //         .then (result=>{console.log(result)})
// // //         .catch(error=>console.log(error))
// // //     }
// // //   return (
// // //     <div className="navbar bg-base-100 shadow-lg">
// // //       <div className="container mx-auto flex justify-between items-center w-full px-4">
// // //         {/* Left Section */}
// // //         <div className='flex'>
// // //           <img src={logo} alt="Logo" className="w-8" />

// // //          <h1 className="text-xl font-bold mt-3 -ml-4">Pro<span className='text-green-500'>Fast</span></h1> 
// // //         </div>

// // //         {/* Middle Section */}
// // //         <div className="flex gap-6 font-semibold">
// // //             <Link to="/"> <h1>Home</h1></Link>
// // //          <Link to="/sendparcel"> <h1>Send Parcel</h1></Link>
// // //          <Link to="/coverage"><h1>Coverage</h1></Link>
// // //          {
// // //             user && <>
// // //                 <NavLink to="/dashboard">Dashboard</NavLink>
// // //             </>
// // //         }

// // //           {/* <h1>About us</h1>
// // //           <h1>Pricing</h1> */}
        
// // //          <Link to="/aboutus"><h1>About us</h1></Link>
// // //            <Link to="/beARider"><h1>Be a rider</h1></Link>
// // //         </div>

        


// // //         {/* Right Section */}
// // // <div className="flex items-center gap-4">
// // //   {user && user.photo && (
// // //     <img
// // //       src={user.photo}
// // //       alt={user.name || "User"}
// // //       className="w-10 h-10 rounded-full border-2 border-green-500 object-cover"
// // //       title={user.name} // Tooltip on hover
// // //     />
// // //   )}

// // //   {user ? (
// // //     <button
// // //       onClick={handleLogOut}
// // //       className="btn btn-outline btn-sm"
// // //     >
// // //       Log Out
// // //     </button>
// // //   ) : (
// // //     <Link to="/login">
// // //       <button className="btn btn-outline btn-sm">Login</button>
// // //     </Link>
// // //   )}

// // //   <button className="btn btn-neutral btn-sm rounded-full">
// // //     <ImArrowUpRight2 />
// // //   </button>
// // // </div>

// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Navbar;



// // import React, { useEffect, useState } from 'react';
// // import logo from '../../../assets/newassets/logo.png';
// // import { ImArrowUpRight2 } from 'react-icons/im';
// // import { Link, NavLink } from 'react-router';
// // import useAuth from '../../../hooks/useAuth';
// // import useAxios from '../../../hooks/useAxios';

// // const Navbar = () => {
// //   const { user, logOut } = useAuth();
// //   const axiosInstance = useAxios();
// //   const [dbUser, setDbUser] = useState(null);

// //   const handleLogOut = () => {
// //     logOut()
// //       .then((result) => console.log(result))
// //       .catch((error) => console.log(error));
// //   };

// //   // ✅ Fetch user info from MongoDB when logged in
// //   useEffect(() => {
// //     if (user?.email) {
// //       axiosInstance
// //         .get(`/users/${user.email}`)
// //         .then((res) => setDbUser(res.data))
// //         .catch((err) => console.error(err));
// //     }
// //   }, [user, axiosInstance]);

// //   // ✅ Determine which photo to use
// //   const profilePhoto =
// //     user?.photoURL || // From Firebase (Google login or email/password profile update)
// //     dbUser?.photo || // From MongoDB
// //     'https://i.ibb.co/4pDNDk1/default-avatar.png'; // Default avatar

// //   return (
// //     <div className="navbar bg-base-100 shadow-lg">
// //       <div className="container mx-auto flex justify-between items-center w-full px-4">
// //         {/* Left Section */}
// //         <div className="flex">
// //           <img src={logo} alt="Logo" className="w-8" />
// //           <h1 className="text-xl font-bold mt-3 -ml-4">
// //             Pro<span className="text-green-500">Fast</span>
// //           </h1>
// //         </div>

// //         {/* Middle Section */}
// //         <div className="flex gap-6 font-semibold">
// //           <Link to="/"> <h1>Home</h1></Link>
// //           <Link to="/sendparcel"> <h1>Send Parcel</h1></Link>
// //           <Link to="/coverage"><h1>Coverage</h1></Link>
// //           {user && <NavLink to="/dashboard">Dashboard</NavLink>}
// //           <Link to="/aboutus"><h1>About us</h1></Link>
// //           <Link to="/beARider"><h1>Be a rider</h1></Link>
// //         </div>

// //         {/* Right Section */}
// //         <div className="flex items-center gap-4">
// //           {user && (
// //             <img
// //               src={profilePhoto}
// //               alt="User"
// //               className="w-10 h-10 rounded-full border-2 border-green-500 object-cover"
// //             />
// //           )}
// //           {user ? (
// //             <button onClick={handleLogOut} className="btn btn-outline btn-sm">
// //               Log Out
// //             </button>
// //           ) : (
// //             <Link to="/login">
// //               <button className="btn btn-outline btn-sm">Login</button>
// //             </Link>
// //           )}
// //           <button className="btn btn-neutral btn-sm rounded-full">
// //             <ImArrowUpRight2 />
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Navbar;



// import React, { useEffect, useState } from 'react';
// import logo from '../../../assets/newassets/logo.png';
// import { ImArrowUpRight2 } from 'react-icons/im';
// import { Link, NavLink } from 'react-router';
// import useAuth from '../../../hooks/useAuth';
// import useAxios from '../../../hooks/useAxios';

// const Navbar = () => {
//     const { user, logOut } = useAuth();
//     const [dbUser, setDbUser] = useState(null);
//     const axiosInstance = useAxios();

//     const handleLogOut = () => {
//         logOut()
//             .then(result => console.log(result))
//             .catch(error => console.log(error));
//     };

//     // ✅ Fetch user from MongoDB if logged in
//     useEffect(() => {
//         if (user?.email) {
//             axiosInstance
//                 .get(`/users/search?email=${user.email}`)
//                 .then(res => {
//                     if (res.data && res.data.length > 0) {
//                         setDbUser(res.data[0]);
//                     }
//                 })
//                 .catch(err => console.error(err));
//         }
//     }, [user, axiosInstance]);

//     // ✅ Decide which image to show
//     const profileImage =
//         dbUser?.photo || // from MongoDB (email/password registered users)
//         user?.photoURL || // from Firebase Auth (Google login)
//         "https://i.ibb.co/2kRzYQd/default-avatar.png"; // fallback default

//     return (
//         <div className="navbar bg-base-100 shadow-lg">
//             <div className="container mx-auto flex justify-between items-center w-full px-4">
//                 {/* Left Section */}
//                 <div className="flex">
//                     <img src={logo} alt="Logo" className="w-8" />
//                     <h1 className="text-xl font-bold mt-3 -ml-4">
//                        Parcel<span className="text-green-500">Management🎁</span>
//                     </h1>
//                 </div>

                

//                 {/* Middle Section */}
// <div className="flex gap-6 font-semibold">
//     <NavLink 
//         to="/" 
//         className={({ isActive }) => isActive ? "text-green-500" : ""}>
//         Home
//     </NavLink>

//     <NavLink 
//         to="/sendparcel" 
//         className={({ isActive }) => isActive ? "text-green-500" : ""}>
//         Send Parcel
//     </NavLink>

//     <NavLink 
//         to="/coverage" 
//         className={({ isActive }) => isActive ? "text-green-500" : ""}>
//         Coverage
//     </NavLink>

//     {user && (
//         <NavLink 
//             to="/dashboard" 
//             className={({ isActive }) => isActive ? "text-green-500" : ""}>
//             Dashboard
//         </NavLink>
//     )}

//     <NavLink 
//         to="/aboutus" 
//         className={({ isActive }) => isActive ? "text-green-500" : ""}>
//         About us
//     </NavLink>

//     <NavLink 
//         to="/beARider" 
//         className={({ isActive }) => isActive ? "text-green-500" : ""}>
//         Be a rider
//     </NavLink>
// </div>


//                 {/* Right Section */}
//                 <div className="flex items-center gap-4">
//                     {user && (
//                         <img
//                             src={profileImage}
//                             alt="User"
//                             className="w-10 h-10 rounded-full border"
//                         />
//                     )}
//                     {user ? (
//                         <button
//                             onClick={handleLogOut}
//                             className="btn btn-outline btn-sm"
//                         >
//                             Log Out
//                         </button>
//                     ) : (
//                         <Link to="/login">
//                             <button className="btn btn-outline btn-sm">Login</button>
//                         </Link>
//                     )}
//                     <button className="btn btn-neutral btn-sm rounded-full">
//                         <ImArrowUpRight2 />
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Navbar;


// //give this code responsive for any devices



import React, { useEffect, useState } from "react";
import logo from "../../../assets/newassets/logo.png";
import { ImArrowUpRight2 } from "react-icons/im";
import { Link, NavLink } from "react-router";
import useAuth from "../../../hooks/useAuth";
import useAxios from "../../../hooks/useAxios";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [dbUser, setDbUser] = useState(null);
  const axiosInstance = useAxios();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  // Fetch user from MongoDB if logged in
  useEffect(() => {
    if (user?.email) {
      axiosInstance
        .get(`/users/search?email=${user.email}`)
        .then((res) => {
          if (res.data && res.data.length > 0) {
            setDbUser(res.data[0]);
          }
        })
        .catch((err) => console.error(err));
    }
  }, [user, axiosInstance]);

  // Decide which image to show
  const profileImage =
    dbUser?.photo || user?.photoURL || "https://i.ibb.co/2kRzYQd/default-avatar.png";

  return (
    <nav className="bg-base-100 shadow-lg">
      <div className="container mx-auto px-4 max-w-7xl flex justify-between items-center py-3">
        {/* Left Section */}
        <div className="flex ">
          <img src={logo} alt="Logo" className="w-8 " />
          <h1 className="text-xl font-bold -ml-4 mt-3">
            Parcel<span className="text-green-500">Management🎁</span>
          </h1>
        </div>

        {/* Desktop & Tab Menu */}
        <div className="hidden sm:flex gap-6 font-semibold items-center">
          <NavLink to="/" className={({ isActive }) => (isActive ? "text-green-500" : "")}>
            Home
          </NavLink>
          <NavLink
            to="/sendparcel"
            className={({ isActive }) => (isActive ? "text-green-500" : "")}
          >
            Send Parcel
          </NavLink>
          <NavLink
            to="/coverage"
            className={({ isActive }) => (isActive ? "text-green-500" : "")}
          >
            Coverage
          </NavLink>
          {user && (
            <NavLink
              to="/dashboard"
              className={({ isActive }) => (isActive ? "text-green-500" : "")}
            >
              Dashboard
            </NavLink>
          )}
          <NavLink
            to="/aboutus"
            className={({ isActive }) => (isActive ? "text-green-500" : "")}
          >
            About us
          </NavLink>
          <NavLink
            to="/beARider"
            className={({ isActive }) => (isActive ? "text-green-500" : "")}
          >
            Be a rider
          </NavLink>
        </div>

        {/* Right Section */}
        <div className="hidden sm:flex items-center gap-4">
          {user && (
            <img src={profileImage} alt="User" className="w-10 h-10 rounded-full border" />
          )}
          {user ? (
            <button onClick={handleLogOut} className="btn btn-outline btn-sm">
              Log Out
            </button>
          ) : (
            <Link to="/login">
              <button className="btn btn-outline btn-sm">Login</button>
            </Link>
          )}
          <button className="btn btn-neutral btn-sm rounded-full">
            <ImArrowUpRight2 />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="btn btn-square btn-sm"
          >
            {/* <ImArrowUpRight2 /> */}
            <button className="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
    </button>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-base-100 px-4 pb-4 flex flex-col gap-4 text-left font-semibold">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-green-500" : "")}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/sendparcel"
            className={({ isActive }) => (isActive ? "text-green-500" : "")}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Send Parcel
          </NavLink>
          <NavLink
            to="/coverage"
            className={({ isActive }) => (isActive ? "text-green-500" : "")}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Coverage
          </NavLink>
          {user && (
            <NavLink
              to="/dashboard"
              className={({ isActive }) => (isActive ? "text-green-500" : "")}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Dashboard
            </NavLink>
          )}
          <NavLink
            to="/aboutus"
            className={({ isActive }) => (isActive ? "text-green-500" : "")}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About us
          </NavLink>
          <NavLink
            to="/beARider"
            className={({ isActive }) => (isActive ? "text-green-500" : "")}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Be a rider
          </NavLink>

         {/* <div className="flex">
           {user && (
            <img src={profileImage} alt="User" className="text-left  w-10 h-10 rounded-full mx-auto" />
          )}

          {user ? (
            <button onClick={handleLogOut} className="btn btn-outline btn-sm mx-auto">
              Log Out
            </button>
          ) : (
            <Link to="/login">
              <button className="btn btn-outline btn-sm mx-auto">Login</button>
            </Link>
          )}
         </div> */}
         <div className="flex flex-col items-start gap-2">
  {user && (
    <img
      src={profileImage}
      alt="User"
      className="w-10 h-10 rounded-full"
    />
  )}

  {user ? (
    <button onClick={handleLogOut} className="btn btn-outline btn-sm">
      Log Out
    </button>
  ) : (
    <Link to="/login">
      <button className="btn btn-outline btn-sm">Login</button>
    </Link>
  )}
</div>

        </div>
      )}
    </nav>
  );
};

export default Navbar;
