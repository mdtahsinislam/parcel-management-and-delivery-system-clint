// import React, { use } from 'react';
// import { AuthContext } from '../contexts/AuthContext/AuthContext';

// const useAuth = () => {
//     const authInfo =use(AuthContext);
//     return authInfo;
// };

// export default useAuth;


import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext/AuthContext';

const useAuth = () => {
    const authInfo = use(AuthContext);
    // Add this to ensure consistent user object structure
    const user = authInfo?.user ? {
        ...authInfo.user,
        displayName: authInfo.user.displayName || authInfo.user.name,
        photoURL: authInfo.user.photoURL || authInfo.user.photo
    } : null;
    
    return {
        ...authInfo,
        user
    };
};

export default useAuth;

