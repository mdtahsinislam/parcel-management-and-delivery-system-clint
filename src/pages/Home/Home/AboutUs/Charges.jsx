// import React from 'react';

// const Charges = () => {
//     return (
//         <div>
//             🛒 Pricing Structure
//         </div>
//     );
// };

// export default Charges;

// give me stylish section


// import React from "react";

// const Charges = () => {
//   return (
//     <section className="py-12 bg-gray-50">
//       <div className="max-w-5xl mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2">
//           <span role="img" aria-label="shopping-cart">🛒</span>
//           Pricing Structure
//         </h2>

//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
//             <thead className="bg-blue-500 text-white">
//               <tr>
//                 <th className="py-3 px-6 text-left">Parcel Type</th>
//                 <th className="py-3 px-6 text-left">Weight</th>
//                 <th className="py-3 px-6 text-left">Within City</th>
//                 <th className="py-3 px-6 text-left">Outside City/District</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr className="border-b hover:bg-gray-50">
//                 <td className="py-3 px-6">Document</td>
//                 <td className="py-3 px-6">Any</td>
//                 <td className="py-3 px-6">৳60</td>
//                 <td className="py-3 px-6">৳80</td>
//               </tr>
//               <tr className="border-b bg-gray-100 hover:bg-gray-200">
//                 <td className="py-3 px-6 font-semibold">Non-Document</td>
//                 <td className="py-3 px-6">Up to 3kg</td>
//                 <td className="py-3 px-6">৳110</td>
//                 <td className="py-3 px-6">৳150</td>
//               </tr>
//               <tr className="border-b bg-gray-50 hover:bg-gray-100">
//                 <td className="py-3 px-6 font-semibold">Non-Document</td>
//                 <td className="py-3 px-6">&gt;3kg</td>
//                 <td className="py-3 px-6">৳40/kg</td>
//                 <td className="py-3 px-6">৳40/kg + ৳40 extra</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Charges;



import React from "react";

const Charges = () => {
  return (
    <section className="p-4 sm:p-8 md:p-12 lg:p-16 bg-base-200">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary mb-8 sm:mb-12 flex items-center justify-center gap-2">
          <span role="img" aria-label="shopping-cart">🛒</span>
          Pricing Structure
        </h2>

        <div className="overflow-x-auto rounded-xl shadow-lg">
          <table className="table table-zebra w-full text-lg">
            {/* head */}
            <thead className="bg-primary text-white text-base sm:text-lg">
              <tr>
                <th className="py-4">Parcel Type</th>
                <th>Weight</th>
                <th>Within City</th>
                <th>Outside City/District</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr className="hover">
                <td>Document</td>
                <td>Any</td>
                <td>৳60</td>
                <td>৳80</td>
              </tr>
              {/* row 2 */}
              <tr className="hover">
                <td>Non-Document</td>
                <td>Up to 3kg</td>
                <td>৳110</td>
                <td>৳150</td>
              </tr>
              {/* row 3 */}
              <tr className="hover">
                <td>Non-Document</td>
                <td>&gt;3kg</td>
                <td>৳40/kg</td>
                <td>৳40/kg + ৳40 extra</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Charges;
