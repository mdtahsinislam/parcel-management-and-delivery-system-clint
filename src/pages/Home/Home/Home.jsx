import React from 'react';
import Navbar from '../../shared/Navbar/Navbar';
import Banner from './Banner';
import Services from './Services';
import Benefits from './Benefits';
import BeMerchant from './BeMerchant';
import ClientLogosMarquee from './ClientLogosMarquee';
import TestimonialSection from './TestimonialSection';
import According from './According';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <ClientLogosMarquee></ClientLogosMarquee>
            <Benefits></Benefits>
            
            <BeMerchant></BeMerchant>
            <TestimonialSection></TestimonialSection>
            <According></According>
            {/* <Navbar></Navbar> */}
        </div>
    );
};

export default Home;