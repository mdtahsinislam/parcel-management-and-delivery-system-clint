import React, { useState } from 'react';

//import { useState } from "react";

const TrackParcel = () => {
  const [trackingId, setTrackingId] = useState('');
  const [updates, setUpdates] = useState([]);
  const [error, setError] = useState('');

  const handleTrack = async () => {
    setError('');
    if (!trackingId) {
      setError('Please enter a tracking ID');
      return;
    }

    try {
      const res = await fetch(`https://your-server-url.vercel.app/trackings/${trackingId}`);
      const data = await res.json();

      if (Array.isArray(data)) {
        setUpdates(data);
      } else {
        setError('Tracking data not found');
      }
    } catch (err) {
      setError('Failed to fetch tracking updates');
    }
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Track Your Parcel</h2>

      <input
        type="text"
        className="input input-bordered w-full mb-2"
        placeholder="Enter your Tracking ID"
        value={trackingId}
        onChange={(e) => setTrackingId(e.target.value)}
      />

      <button className="btn btn-primary w-full mb-4" onClick={handleTrack}>
        Track
      </button>

      {error && <p className="text-red-500">{error}</p>}

      {updates.length > 0 && (
        <div className="bg-base-100 p-4 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Tracking Updates:</h3>
          <ul className="list-disc list-inside space-y-2">
            {updates.map((update, idx) => (
              <li key={idx}>
                <strong>Status:</strong> {update.status}<br />
                <strong>Message:</strong> {update.message || 'No message'}<br />
                <strong>Time:</strong> {new Date(update.timestamp).toLocaleString()}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TrackParcel;
