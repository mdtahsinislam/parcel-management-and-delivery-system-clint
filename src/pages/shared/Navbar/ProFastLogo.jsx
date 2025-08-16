import React from 'react';
import logo from '../../../assets/newassets/logo.png'
import { Link } from 'react-router';
//import { Link } from 'react-router';

const ProFastLogo = () => {
    return (
        <Link to="/">
            <div className='flex '>
                <img className='mb-2' src={logo} alt="" />
                <p className='text-xl mt-4 -ml-5 font-extrabold'>Parcel<span className='text-green-600'>Management</span>🎁</p>
            </div>
        </Link>
    );
};

export default ProFastLogo;