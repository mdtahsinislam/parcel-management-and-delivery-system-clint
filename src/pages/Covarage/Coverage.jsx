// import React from 'react';

// const Coverage = () => {
//     return (
//         <div>
//             <h1>cover</h1>
//         </div>
//     );
// };

// export default Coverage;





import React from 'react';
import { useLoaderData } from 'react-router';
import BangladeshMap from './BangladeshMap';


const Coverage = () => {
    const warehouses = useLoaderData();
   
    return (
        <div className="max-w-4xl mx-auto px-4 py-10 -mt-5">
            <h1 className="text-2xl font-bold text-center mb-6">We are available in 64 districts Enter covered area name than <span className='text-blue-500'>Go</span> click.</h1>

            {/* Later you can add your search box here */}
            {/* <SearchDistrictBox /> */}

            <BangladeshMap warehouses={warehouses} />
        </div>
    );
};

export default Coverage;