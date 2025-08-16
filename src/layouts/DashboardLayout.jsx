// import React from 'react';
// import { NavLink, Outlet } from 'react-router';
// import ProFastLogo from '../pages/shared/Navbar/ProFastLogo';
// //import { FaBoxOpen, FaCheckCircle, FaHome, FaMoneyCheckAlt, FaMotorcycle, FaSearchLocation, FaTasks, FaUserCheck, FaUserClock, FaUserEdit, FaUserShield } from 'react-icons/fa';
// import useUserRole from '../hooks/useUserRole';
// import { FaBoxOpen, FaCheckCircle, FaHome, FaMoneyCheckAlt, FaMotorcycle, FaSearchLocation, FaTasks, FaUserCheck, FaUserClock, FaUserEdit, FaUserShield, FaWallet } from 'react-icons/fa';


// const DashboardLayout = () => {
//      const { role, roleLoading } = useUserRole();
//     //console.log(role);
//     return (
//         <div className="drawer lg:drawer-open">
//             <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
//             <div className="drawer-content flex flex-col">

//                 {/* Navbar */}
//                 <div className="navbar bg-base-300 w-full lg:hidden">
//                     <div className="flex-none ">
//                         <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 className="inline-block h-6 w-6 stroke-current"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="M4 6h16M4 12h16M4 18h16"
//                                 ></path>
//                             </svg>
//                         </label>
//                     </div>
//                     <div className="mx-2 flex-1 px-2 lg:hidden">Dashboard</div>

//                 </div>
//                 {/* Page content here */}
//                 <Outlet></Outlet>
//                 {/* Page content here */}

//             </div>
//             <div className="drawer-side">
//                 <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
//                 <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
//                     {/* Sidebar content here */}
//                     <ProFastLogo></ProFastLogo>
//                     <li>
//                         <NavLink to="/dashboard">
//                             <FaHome className="inline-block mr-2" />
//                             Home
//                         </NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/dashboard/myParcels">
//                             <FaBoxOpen className="inline-block mr-2" />
//                             My Parcels
//                         </NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/dashboard/paymentHistory">
//                             <FaMoneyCheckAlt className="inline-block mr-2" />
//                             Payment History
//                         </NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/dashboard/track">
//                             <FaSearchLocation className="inline-block mr-2" />
//                             Track a Package
//                         </NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/dashboard/profile">
//                             <FaUserEdit className="inline-block mr-2" />
//                             Update Profile
//                         </NavLink>
//                     </li>

//                      {/* rider links */}
//                     {!roleLoading && role === 'rider' && <>
//                         <li>
//                             <NavLink to="/dashboard/pending-deliveries">
//                                 <FaTasks className="inline-block mr-2" />
//                                 Pending Deliveries
//                             </NavLink>
//                         </li>
//                         <li>
//                             <NavLink to="/dashboard/completed-deliveries">
//                                 <FaCheckCircle className="inline-block mr-2" />
//                                 Completed Deliveries
//                             </NavLink>
//                         </li>
//                         <li>
//                             <NavLink to="/dashboard/my-earnings">
//                                 <FaWallet className="inline-block mr-2" />
//                                 My Earnings
//                             </NavLink>
//                         </li>
//                     </>}
//                     {/* riders link */}
//                     {!roleLoading && role === 'admin' &&
//                         <>
//                             <li>
//                                 <NavLink to="/dashboard/assign-rider">
//                                     <FaMotorcycle className="inline-block mr-2" />
//                                     Assign Rider
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink to="/dashboard/active-riders">
//                                     <FaUserCheck className="inline-block mr-2" />
//                                     Active Riders
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink to="/dashboard/pending-riders">
//                                     <FaUserClock className="inline-block mr-2" />
//                                     Pending Riders
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink to="/dashboard/makeAdmin">
//                                     <FaUserShield className="inline-block mr-2" />
//                                     Make Admin
//                                 </NavLink>
//                             </li>
//                         </>
//                     }
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default DashboardLayout;

///uporer code is correct  ...



/**stylish code */




import React from 'react';
import { NavLink, Outlet } from 'react-router';
import ProFastLogo from '../pages/shared/Navbar/ProFastLogo';
import useUserRole from '../hooks/useUserRole';
import { 
  FaBoxOpen, FaCheckCircle, FaHome, FaMoneyCheckAlt, FaMotorcycle, 
  FaSearchLocation, FaTasks, FaUserCheck, FaUserClock, FaUserEdit, 
  FaUserShield, FaWallet 
} from 'react-icons/fa';

const DashboardLayout = () => {
  const { role, roleLoading } = useUserRole();

  // Active class styling
  const activeClass = "bg-green-500 text-white rounded-lg shadow-md";

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">

        {/* Navbar */}
        <div className="navbar bg-base-300 w-full lg:hidden">
          <div className="flex-none">
            <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-6 w-6 stroke-current">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 px-2 lg:hidden text-lg font-semibold">Dashboard</div>
        </div>

        {/* Page content */}
        <Outlet />

      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 space-y-2">

          <ProFastLogo />

          {/* Common Links */}
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 hover:bg-green-200 rounded-lg transition-all duration-200 ${isActive ? activeClass : ""}`
              }
            >
              <FaHome className="text-lg text-blue-600" /> Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/myParcels"
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 hover:bg-green-200 rounded-lg transition-all duration-200 ${isActive ? activeClass : ""}`
              }
            >
              <FaBoxOpen className="text-lg text-blue-600" /> My Parcels
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/paymentHistory"
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 hover:bg-green-200 rounded-lg transition-all duration-200 ${isActive ? activeClass : ""}`
              }
            >
              <FaMoneyCheckAlt className="text-lg text-green-600" /> Payment History
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/track"
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 hover:bg-green-200 rounded-lg transition-all duration-200 ${isActive ? activeClass : ""}`
              }
            >
              <FaSearchLocation className="text-lg text-blue-600" /> Track a Package
            </NavLink>
          </li>

          {/* <li>
            <NavLink
              to="/dashboard/profile"
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 hover:bg-green-200 rounded-lg transition-all duration-200 ${isActive ? activeClass : ""}`
              }
            >
              <FaUserEdit className="text-lg text-blue-600" /> Update Profile
            </NavLink>
          </li> */}

          {/* Rider Links */}
          {!roleLoading && role === 'rider' && <>
            <li>
              <NavLink
                to="/dashboard/pending-deliveries"
                className={({ isActive }) =>
                  `flex items-center gap-3 p-3 hover:bg-green-200 rounded-lg transition-all duration-200 ${isActive ? activeClass : ""}`
                }
              >
                <FaTasks className="text-lg text-blue-600" /> Pending Deliveries
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/completed-deliveries"
                className={({ isActive }) =>
                  `flex items-center gap-3 p-3 hover:bg-green-200 rounded-lg transition-all duration-200 ${isActive ? activeClass : ""}`
                }
              >
                <FaCheckCircle className="text-lg text-blue-600" /> Completed Deliveries
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/my-earnings"
                className={({ isActive }) =>
                  `flex items-center gap-3 p-3 hover:bg-green-200 rounded-lg transition-all duration-200 ${isActive ? activeClass : ""}`
                }
              >
                <FaWallet className="text-lg text-blue-600" /> My Earnings
              </NavLink>
            </li>
          </>}

          {/* Admin Links */}
          {!roleLoading && role === 'admin' && <>
            <li>
              <NavLink
                to="/dashboard/assign-rider"
                className={({ isActive }) =>
                  `flex items-center gap-3 p-3 hover:bg-green-200 rounded-lg transition-all duration-200 ${isActive ? activeClass : ""}`
                }
              >
                <FaMotorcycle className="text-lg text-blue-600" /> Assign Rider
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/active-riders"
                className={({ isActive }) =>
                  `flex items-center gap-3 p-3 hover:bg-green-200 rounded-lg transition-all duration-200 ${isActive ? activeClass : ""}`
                }
              >
                <FaUserCheck className="text-lg text-blue-600" /> Active Riders
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/pending-riders"
                className={({ isActive }) =>
                  `flex items-center gap-3 p-3 hover:bg-green-200 rounded-lg transition-all duration-200 ${isActive ? activeClass : ""}`
                }
              >
                <FaUserClock className="text-lg text-blue-600" /> Pending Riders
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/makeAdmin"
                className={({ isActive }) =>
                  `flex items-center gap-3 p-3 hover:bg-green-200 rounded-lg transition-all duration-200 ${isActive ? activeClass : ""}`
                }
              >
                <FaUserShield className="text-lg text-blue-600" /> Make Admin
              </NavLink>
            </li>
          </>}
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
