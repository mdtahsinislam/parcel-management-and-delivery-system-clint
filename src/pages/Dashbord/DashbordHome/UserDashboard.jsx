// import React from 'react';

// const UserDashboard = () => {
//     return (
//         <div>
//             <h2 className="text-5xl">User Dashboard</h2>
//         </div>
//     );
// };

// export default UserDashboard;



import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaBoxOpen, FaMoneyBillWave, FaShippingFast } from "react-icons/fa";

const UserDashboard = () => {
    const axiosSecure = useAxiosSecure();

    const { data = {}, isLoading, isError, error } = useQuery({
        queryKey: ["userStats"],
        queryFn: async () => {
            const res = await axiosSecure.get("/dashboard/user-stats");
            return res.data;
        },
    });

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-[70vh]">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="text-center text-red-600 mt-10">
                Error loading data: {error.message}
            </div>
        );
    }

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Your Parcel Overview</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="card bg-base-100 shadow-md p-6 text-center">
                    <FaBoxOpen className="text-4xl mx-auto text-primary" />
                    <h2 className="text-lg font-semibold mt-4">Total Parcels</h2>
                    <p className="text-3xl font-bold">{data.totalParcels || 0}</p>
                </div>
                <div className="card bg-base-100 shadow-md p-6 text-center">
                    <FaMoneyBillWave className="text-4xl mx-auto text-success" />
                    <h2 className="text-lg font-semibold mt-4">Total Paid</h2>
                    <p className="text-3xl font-bold">{data.totalPaid || 0}৳</p>
                </div>
                <div className="card bg-base-100 shadow-md p-6 text-center">
                    <FaShippingFast className="text-4xl mx-auto text-info" />
                    <h2 className="text-lg font-semibold mt-4">Delivered</h2>
                    <p className="text-3xl font-bold">{data.totalDelivered || 0}</p>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
