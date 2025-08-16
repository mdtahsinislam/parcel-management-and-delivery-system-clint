// import React from 'react';

// const RiderDashboard = () => {
//     return (
//         <div>
//             <h2 className="text-5xl">Rider Dashing</h2>
//         </div>
//     );
// };

// export default RiderDashboard;

import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaCheckCircle, FaTasks, FaWallet } from "react-icons/fa";

const RiderDashboard = () => {
    const axiosSecure = useAxiosSecure();

    const { data = {}, isLoading, isError, error } = useQuery({
        queryKey: ["riderStats"],
        queryFn: async () => {
            const res = await axiosSecure.get("/dashboard/rider-stats");
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
            <h1 className="text-3xl font-bold mb-6">Rider Performance Overview</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="card bg-base-100 shadow-md p-6 text-center">
                    <FaTasks className="text-4xl mx-auto text-warning" />
                    <h2 className="text-lg font-semibold mt-4">Pending Deliveries</h2>
                    <p className="text-3xl font-bold">{data.pendingDeliveries || 0}</p>
                </div>
                <div className="card bg-base-100 shadow-md p-6 text-center">
                    <FaCheckCircle className="text-4xl mx-auto text-success" />
                    <h2 className="text-lg font-semibold mt-4">Completed Deliveries</h2>
                    <p className="text-3xl font-bold">{data.completedDeliveries || 0}</p>
                </div>
                <div className="card bg-base-100 shadow-md p-6 text-center">
                    <FaWallet className="text-4xl mx-auto text-primary" />
                    <h2 className="text-lg font-semibold mt-4">Total paid for my percel</h2>
                    <p className="text-3xl font-bold">{data.totalEarnings || 0}৳</p>
                </div>
            </div>
        </div>
    );
};

export default RiderDashboard;
