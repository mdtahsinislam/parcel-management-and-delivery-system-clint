


// import React, { useEffect, useState } from 'react';
// import { MapContainer, Marker, Popup, TileLayer, useMap, Polyline } from 'react-leaflet';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';

// const position = [23.6850, 90.3563]; // Center of Bangladesh

// // ✅ Custom icon for user location (Green)
// const userIcon = new L.Icon({
//   iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
// });

// // ✅ Custom icon for covered area (Blue)
// const warehouseIcon = new L.Icon({
//   iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
// });

// function FlyToDistrict({ coords }) {
//   const map = useMap();
//   useEffect(() => {
//     if (coords) {
//       map.flyTo(coords, 13, { duration: 1.5 });
//     }
//   }, [coords]);
//   return null;
// }

// const BangladeshMap = ({ warehouses }) => {
//   const [searchText, setSearchText] = useState('');
//   const [activeCoords, setActiveCoords] = useState(null);
//   const [activeDistrict, setActiveDistrict] = useState(null);
//   const [currentLocation, setCurrentLocation] = useState(null);
//   const [routeCoords, setRouteCoords] = useState([]);

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(
//       (pos) => {
//         const { latitude, longitude } = pos.coords;
//         setCurrentLocation([latitude, longitude]);
//       },
//       (err) => console.error("Location error:", err)
//     );
//   }, []);

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     const matched = warehouses.find(warehouse =>
//       warehouse.covered_area.some(area =>
//         area.toLowerCase().includes(searchText.toLowerCase())
//       )
//     );

//     if (matched && currentLocation) {
//       const destCoords = [matched.latitude, matched.longitude];
//       setActiveCoords(destCoords);
//       setActiveDistrict(matched.district);

//       const url = `https://router.project-osrm.org/route/v1/driving/${currentLocation[1]},${currentLocation[0]};${destCoords[1]},${destCoords[0]}?overview=full&geometries=geojson`;

//       try {
//         const res = await fetch(url);
//         const data = await res.json();
//         const coords = data.routes[0].geometry.coordinates.map(([lng, lat]) => [lat, lng]);
//         setRouteCoords(coords);
//       } catch (err) {
//         console.error("Route error:", err);
//       }
//     }
//   };

//   return (
//     <div className="h-[800px] w-full rounded-lg overflow-hidden shadow-lg relative">
//       <form
//         onSubmit={handleSearch}
//         className="absolute top-4 left-1/2 transform -translate-x-1/2 z-[1000] w-full max-w-md px-4 flex bg-gray-400"
//       >
//         <input
//           type="text"
//           placeholder="Red your location Green covered area"
//           className="flex-1 px-4 py-2 border rounded-l-md outline-none"
//           value={searchText}
//           onChange={(e) => setSearchText(e.target.value)}
//         />
//         <button
//           type="submit"
//           className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700"
//         >
//           Go
//         </button>
//       </form>

//       <MapContainer center={position} zoom={7} scrollWheelZoom={false} className="h-full w-full z-0">
//         <TileLayer
//           attribution='&copy; OpenStreetMap contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />

//         {/* ✅ User Location (green icon) */}
//         {currentLocation && (
//           <Marker position={currentLocation} icon={userIcon}>
//             <Popup>Your current location</Popup>
//           </Marker>
//         )}

//         <FlyToDistrict coords={activeCoords} />

//         {/* ✅ Warehouses (blue icon) */}
//         {warehouses.map((center, index) => (
//           <Marker key={index} position={[center.latitude, center.longitude]} icon={warehouseIcon}>
//             <Popup>
//               <strong>{center.district}</strong><br />
//               {center.covered_area.join(', ')}
//             </Popup>
//           </Marker>
//         ))}

//         {/* ✅ Route line */}
//         {routeCoords.length > 0 && (
//           <Polyline pathOptions={{ color: 'blue' }} positions={routeCoords} />
//         )}
//       </MapContainer>
//     </div>
//   );
// };

// export default BangladeshMap;
// the code is worked i want when user touch the road it show road distance how long add the feature 



import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap, Polyline, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import * as turf from '@turf/turf';
import 'leaflet/dist/leaflet.css';

const position = [23.6850, 90.3563];

// ✅ Custom icons
const userIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const warehouseIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

function FlyToDistrict({ coords }) {
  const map = useMap();
  useEffect(() => {
    if (coords) {
      map.flyTo(coords, 13, { duration: 1.5 });
    }
  }, [coords]);
  return null;
}

const BangladeshMap = ({ warehouses }) => {
  const [searchText, setSearchText] = useState('');
  const [activeCoords, setActiveCoords] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [routeCoords, setRouteCoords] = useState([]);
  const [routeDistance, setRouteDistance] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setCurrentLocation([latitude, longitude]);
      },
      (err) => console.error("Location error:", err)
    );
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    const matched = warehouses.find(warehouse =>
      warehouse.covered_area.some(area =>
        area.toLowerCase().includes(searchText.toLowerCase())
      )
    );

    if (matched && currentLocation) {
      const destCoords = [matched.latitude, matched.longitude];
      setActiveCoords(destCoords);

      const url = `https://router.project-osrm.org/route/v1/driving/${currentLocation[1]},${currentLocation[0]};${destCoords[1]},${destCoords[0]}?overview=full&geometries=geojson`;

      try {
        const res = await fetch(url);
        const data = await res.json();
        const coords = data.routes[0].geometry.coordinates.map(([lng, lat]) => [lat, lng]);
        setRouteCoords(coords);

        // ✅ Calculate distance using turf.js
        const line = turf.lineString(data.routes[0].geometry.coordinates);
        const distance = turf.length(line, { units: 'kilometers' });
        setRouteDistance(distance.toFixed(2)); // 2 decimal places

      } catch (err) {
        console.error("Route error:", err);
      }
    }
  };

  return (
    <div className="h-[800px] w-full rounded-lg overflow-hidden shadow-lg relative">
      <form
        onSubmit={handleSearch}
        className="absolute top-4 left-1/2 transform -translate-x-1/2 z-[1000] w-full max-w-md px-4 flex bg-gray-400"
      >
        <input
          type="text"
          placeholder="Red = You | Green = Covered Area"
          className="flex-1 px-4 py-2 border rounded-l-md outline-none"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700"
        >
          Go
        </button>
      </form>

      <MapContainer center={position} zoom={7} scrollWheelZoom={false} className="h-full w-full z-0">
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* ✅ User marker */}
        {currentLocation && (
          <Marker position={currentLocation} icon={userIcon}>
            <Popup>Your current location</Popup>
          </Marker>
        )}

        <FlyToDistrict coords={activeCoords} />

        {/* ✅ Warehouses */}
        {warehouses.map((center, index) => (
          <Marker key={index} position={[center.latitude, center.longitude]} icon={warehouseIcon}>
            <Popup>
              <strong>{center.district}</strong><br />
              {center.covered_area.join(', ')}
            </Popup>
          </Marker>
        ))}

        {/* ✅ Route line with distance tooltip */}
        {routeCoords.length > 0 && (
          <Polyline
            pathOptions={{ color: 'blue' }}
            positions={routeCoords}
            eventHandlers={{
              click: () => {
                alert(`Distance: ${routeDistance} km`);
              }
            }}
          >
            {/* Tooltip on hover */}
            <Tooltip sticky>
              Distance: {routeDistance} km
            </Tooltip>
          </Polyline>
        )}
      </MapContainer>
    </div>
  );
};

export default BangladeshMap;
