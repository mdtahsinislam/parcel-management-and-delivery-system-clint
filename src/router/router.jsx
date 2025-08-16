
import {createBrowserRouter} from "react-router";
import App from "../App";
import RegisterForm from "../RegisterForm";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Login/Register";
import Coverage from "../pages/Covarage/Coverage";
import SendParcel from "../pages/SendParcel/SendParcel";
import PrivateRoute from "../routes/PrivateRoute";
import MyParcels from "../pages/Dashbord/MyParcels";
import DashboardLayout from "../layouts/DashboardLayout";
import Payment from "../pages/Dashbord/Payment/Payment";
import PaymentHistory from "../pages/Dashbord/PaymentHistory/PaymentHistory";
import TrackParcel from "../pages/Dashbord/TrackParcel/TrackParcel";
import BeARider from "../pages/Dashbord/BeARider/BeARider";
import PendingRiders from "../pages/Dashbord/TrackParcel/PendingRiders/PendingRiders";
import ActiveRiders from "../pages/Dashbord/TrackParcel/PendingRiders/ActiveRiders/ActiveRiders";
import MakeAdmin from "../pages/Dashbord/MakeAdmin/MakeAdmin";
import AdminRoute from "../routes/AdminRoute";
import AssignRider from "../pages/Dashbord/AssignRider/AssignRider";
import Forbidden from "../pages/Forbidden/Forbidden";
import RiderRoute from "../routes/RiderRoute";
import PendingDeliveries from "../pages/Dashbord/PendingDeliveries/PendingDeliveries";
import CompletedDeliveries from "../pages/Dashbord/CompletedDeliveries/CompletedDeliveries";
import MyEarnings from "../pages/Dashbord/MyEarnings/MyEarnings";
import DashboardHome from "../pages/Dashbord/DashbordHome/DashboardHome";
import ProfileUpdateForm from "../pages/Authentication/Login/ProfileUpdateForm";
import Chafe from "../pages/Home/Home/AboutUs/Chafe";


//   export const router = createBrowserRouter([
//   {
//     path: "/",
//     Component:RootLayout,
//     children:[
//       {
//         index:true,
//         Component:Home
//       },
//       {
//         path:'/coverage',
//         element:<Coverage></Coverage>,
//         loader: () => fetch('/warehouses.json').then(res => res.json())



//       },

//        {
//         path: 'beARider',
//         element: <PrivateRoute><BeARider></BeARider></PrivateRoute>,
//         // loader: () => fetch('./serviceCenter.json')
//          loader: () => fetch('/warehouses.json').then(res => res.json())
//       },
//       {
//         path:'/sendparcel',
//         element: <PrivateRoute><SendParcel></SendParcel></PrivateRoute>,
//          loader: () => fetch('/warehouses.json').then(res => res.json())
//       },
//       {
//         path: 'forbidden',
//         Component: Forbidden
//       }
//     ]
//   },
//   {
//     path:'/',
//     Component:AuthLayout,
//     children:[
//       {
//         path:'login',
//         Component:Login
//       },
//       {
//         path:'register',
//         Component:Register
//       }
//     ]
//   },
//   {
//     path: '/dashboard',
//     element: <PrivateRoute>
//              <DashboardLayout></DashboardLayout>
//     </PrivateRoute>,
//     children: [
//        {
//         index: true,
//         element: DashboardHome
//       },
      
//       {
//         path: 'myParcels',
//         Component: MyParcels
//       },
//       {
//         path:'payment/:parcelId',
//         Component:Payment
//       },
//       {
//         path:'paymentHistory',
//         Component:PaymentHistory
//       },
//       {
//         path:'track',
//         Component:TrackParcel
//       },
//        {
//         path: 'my-earnings',
//         element: <RiderRoute>
//           <MyEarnings></MyEarnings>
//         </RiderRoute>
//       },
//       // rider only routes
//       {
//          path: 'pending-deliveries',
//          element:<RiderRoute><PendingDeliveries></PendingDeliveries></RiderRoute>
//       },
//       {
//         path:'completed-deliveries',
//         element:<RiderRoute><CompletedDeliveries></CompletedDeliveries></RiderRoute>
//       },
//       // admin only routes
//       {
//         path: 'pending-riders',
//         element: <AdminRoute><PendingRiders></PendingRiders></AdminRoute>
//       },
//       {
//         path: 'active-riders',
//         element: <AdminRoute><ActiveRiders></ActiveRiders></AdminRoute>
//       },
//       {
//         path:'makeAdmin',
//         element:<AdminRoute><MakeAdmin></MakeAdmin></AdminRoute>
       
//       },
//       {
//         path: 'assign-rider',
//         element: <AdminRoute><AssignRider></AssignRider></AdminRoute>
//       }
//     ]
//   }
// ]);


export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "/coverage", element: <Coverage />, loader: () => fetch('/warehouses.json').then(res => res.json()) },
      {
        path: 'beARider',
        element: <PrivateRoute><BeARider /></PrivateRoute>,
        loader: () => fetch('/warehouses.json').then(res => res.json())
      },
      {
        path:"aboutus",
        element:<Chafe></Chafe>
      },
      {
        path: '/sendparcel',
        element: <PrivateRoute><SendParcel /></PrivateRoute>,
        loader: () => fetch('/warehouses.json').then(res => res.json())
      },
      { path: 'forbidden', Component: Forbidden }
    ]
  },
  {
    path: '/',
    Component: AuthLayout,
    children: [
      { path: 'login', Component: Login },
      { path: 'register', Component: Register }
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
    children: [
      { index: true, element: <DashboardHome /> },
      { path: 'myParcels', element: <MyParcels /> },
      { path: 'payment/:parcelId', element: <Payment /> },
      { path: 'paymentHistory', element: <PaymentHistory /> },
      { path: 'track', element: <TrackParcel /> },
      { path: 'my-earnings', element: <RiderRoute><MyEarnings /></RiderRoute> },
      { path: 'pending-deliveries', element: <RiderRoute><PendingDeliveries /></RiderRoute> },
      { path: 'completed-deliveries', element: <RiderRoute><CompletedDeliveries /></RiderRoute> },
      { path: 'pending-riders', element: <AdminRoute><PendingRiders /></AdminRoute> },
      { path: 'active-riders', element: <AdminRoute><ActiveRiders /></AdminRoute> },
      { path: 'makeAdmin', element: <AdminRoute><MakeAdmin /></AdminRoute> },
      { path: 'assign-rider', element: <AdminRoute><AssignRider /></AdminRoute> },
      { path: 'profile', element: <PrivateRoute><ProfileUpdateForm /></PrivateRoute> },
      { path: 'track', element: <TrackParcel /> },

    ]
  }
]);
