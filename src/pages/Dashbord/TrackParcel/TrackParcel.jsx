// TrackParcel.jsx
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';


const TrackParcel = () => {
    const { user } = useAuth();
    const [parcels, setParcels] = useState([]);
    const [trackingUpdates, setTrackingUpdates] = useState([]);
    const [selectedTrackingId, setSelectedTrackingId] = useState('');
    const axiosSecure = useAxiosSecure();

    // ✅ ইউজারের সব পার্সেল লোড
    useEffect(() => {
        if (user?.email) {
            axiosSecure.get(`/parcels?email=${user.email}`)
                .then(res => {
                    setParcels(res.data);
                })
                .catch(err => {
                    console.error(err);
                    Swal.fire('Error', 'পার্সেল লোড করতে সমস্যা হয়েছে', 'error');
                });
        }
    }, [user, axiosSecure]);

    // ✅ ট্র্যাকিং আপডেট লোড
    const handleTrack = (trackingId) => {
        setSelectedTrackingId(trackingId);
        fetch(`https://your-server-url.com/trackings/${trackingId}`)
            .then(res => res.json())
            .then(data => {
                setTrackingUpdates(data);
            })
            .catch(err => {
                console.error(err);
                Swal.fire('Error', 'ট্র্যাকিং ডেটা আনতে সমস্যা হয়েছে', 'error');
            });
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Track Your Parcels</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {parcels.map(parcel => (
                    <div key={parcel._id} className="border p-4 rounded shadow bg-base-100">
                        <div className='flex gap-2.5'><h1>Title:</h1><span className='text-green-500'>{parcel.title}</span></div>
                        <div className='flex gap-2.5'><h1>Tracking ID:</h1><span className='text-green-500'>{parcel.tracking_id}</span> </div>
                        <div className='flex gap-2.5'><h1>Status:</h1><span className='text-green-500'>{parcel.delivery_status}</span>  <span className='text-pink-600'>you resive soon</span></div>
                        
                    </div>
                ))}
            </div>

            {/* {selectedTrackingId && (
                <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-2">Tracking Updates for: {selectedTrackingId}</h3>
                    <ul className="timeline timeline-vertical">
                        {trackingUpdates.length > 0 ? trackingUpdates.map((update, index) => (
                            <li key={index}>
                                <div className="timeline-start">{new Date(update.timestamp).toLocaleString()}</div>
                                <div className="timeline-middle bg-primary"></div>
                                <div className="timeline-end">
                                    <p><strong>Status:</strong> {update.status}</p>
                                    <p>{update.message}</p>
                                </div>
                            </li>
                        )) : <p>No tracking updates found.</p>}
                    </ul>
                </div>
            )} */}
        </div>
    );
};

export default TrackParcel;
