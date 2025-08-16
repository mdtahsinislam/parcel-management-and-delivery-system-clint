
// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import './index.css';
// import bg from "../src/assets/newassets/bg_main.gif"; // ✅ Background GIF

// import { RouterProvider } from "react-router";
// import { router } from './router/router.jsx';
// import AuthProvider from './contexts/AuthContext/AuthProvider.jsx';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     {/* ✅ Full screen + full page background  max-h-full*/}
//     <div
//       className="w-full max-h-full  bg-cover  bg-fixed mt-6"
//       style={{
//         backgroundImage: `url(${bg})`,
//       }}
//     >
//       <div className="max-w-7xl mx-auto min-h-screen backdrop-blur-sm bg-white/60">
//       <AuthProvider>
//                   <RouterProvider router={router} />
//       </AuthProvider>
     
//       </div>
//     </div>
//   </StrictMode>
// );



import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import bg from "../src/assets/newassets/bg_main.gif"; // ✅ Background GIF

import { RouterProvider } from "react-router";
import { router } from './router/router.jsx';
import AuthProvider from './contexts/AuthContext/AuthProvider.jsx';

// ✅ ADD THIS:  className="w-full max-h-full  bg-cover  bg-fixed mt-6" style={{backgroundImage: `url(${bg})`,}}
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient(); // ✅ Create QueryClient

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div
     
      
    >
      <div className="max-w-7xl mx-auto min-h-screen backdrop-blur-sm bg-white/60">
        {/* ✅ Wrap everything inside QueryClientProvider */}
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
        </QueryClientProvider>
      </div>
    </div>
  </StrictMode>
);
