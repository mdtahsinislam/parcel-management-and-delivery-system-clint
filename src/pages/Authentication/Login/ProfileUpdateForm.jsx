// // import React, { useEffect } from 'react';
// // import { useForm } from 'react-hook-form';
// // import useAuth from '../../hooks/useAuth';
// // import useAxiosSecure from '../../hooks/useAxiosSecure';
// // import Swal from 'sweetalert2';

// import { useForm } from "react-hook-form";
// import useAuth from "../../../hooks/useAuth";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import { useEffect } from "react";
// import Swal from "sweetalert2";

// const ProfileUpdateForm = () => {
//     const { user } = useAuth(); // Logged in user info
//     const axiosSecure = useAxiosSecure();
//     const { register, handleSubmit, reset } = useForm();

//     useEffect(() => {
//         // ইউজারের আগের ডেটা দিয়ে ফর্ম প্রি-ফিল
//         axiosSecure.get(`/users/${user?.email}`).then(res => {
//             reset(res.data);
//         });
//     }, [user, axiosSecure, reset]);

//     const onSubmit = async data => {
//         try {
//             const res = await axiosSecure.put(`/users/${user?.email}`, data);
//             if (res.data) {
//                 Swal.fire('Success!', 'Profile updated successfully!', 'success');
//             }
//         } catch (err) {
//             console.error(err);
//         }
//     };

//     return (
//         <div className="max-w-md mx-auto p-6 bg-base-100 shadow-lg rounded-md">
//             <h2 className="text-2xl font-semibold mb-4 text-center">Update Profile</h2>
//             <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//                 <div>
//                     <label>Email</label>
//                     <input
//                         {...register('email')}
//                         className="input input-bordered w-full"
//                         type="text"
//                         placeholder="Your Name"
//                     />
//                 </div>
//                 <div>
//                     <label>Name</label>
//                     <input
//                         {...register('name')}
//                         className="input input-bordered w-full"
//                         type="text"
//                         placeholder="Your Name"
//                     />
//                 </div>
//                 <div>
//                     <label>Photo URL</label>
//                     <input
//                         {...register('photo')}
//                         className="input input-bordered w-full"
//                         type="file"
//                         placeholder="Photo "
//                     />
//                 </div>
                
               
//                 <button type="submit" className="btn btn-neutral w-full">Update</button>
//             </form>
//         </div>
//     );
// };

// export default ProfileUpdateForm; 
// i want this three auto full filled by login user he or she can change 


///22
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useEffect } from "react";
import Swal from "sweetalert2";

const ProfileUpdateForm = () => {
    const { user } = useAuth(); // Logged-in user info
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        if (user) {
            // ইউজারের আগের ডেটা ফর্মে সেট করা হচ্ছে
            axiosSecure.get(`/users/${user.email}`)
                .then(res => {
                    reset({
                        email: res.data?.email || user.email,
                        name: res.data?.name || user.displayName,
                        photo: res.data?.photo || user.photoURL
                    });
                });
        }
    }, [user, axiosSecure, reset]);

    const onSubmit = async data => {
        try {
            const res = await axiosSecure.put(`/users/${user.email}`, data);
            if (res.data.modifiedCount > 0 || res.data.acknowledged) {
                Swal.fire('Success!', 'Profile updated successfully!', 'success');
            }
        } catch (err) {
            console.error(err);
            Swal.fire('Error!', 'Failed to update profile.', 'error');
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-base-100 shadow-lg rounded-md">
            <h2 className="text-2xl font-semibold mb-4 text-center">Update Profile</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label>Email</label>
                    <input
                        {...register('email')}
                        className="input input-bordered w-full"
                        type="email"
                        placeholder="Your Email"
                        readOnly // Email সাধারণত পরিবর্তনযোগ্য না থাকে
                    />
                </div>
                <div>
                    <label>Name</label>
                    <input
                        {...register('name')}
                        className="input input-bordered w-full"
                        type="text"
                        placeholder="Your Name"
                    />
                </div>
                <div>
                    <label>Photo URL</label>
                    <input
                        {...register('photo')}
                        className="input input-bordered w-full"
                        type="file"
                        placeholder="Photo URL"
                    />
                </div>
                
                <button type="submit" className="btn btn-neutral w-full">Update</button>
            </form>
        </div>
    );
};

export default ProfileUpdateForm;
