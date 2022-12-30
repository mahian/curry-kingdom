import React from 'react';
import About from './About';
import Contact from './Contact';
import Hero from './Hero';
import HomeFood from './HomeFood';
import Popular from './Popular';
import Services from './Services';
import Team from './Team';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Hero/>
            <Services/>
            <About/>
            <Popular/>
            <HomeFood/>
            <Team/>
            <Testimonial/>
            <Contact/>
        </div>
    );
};

export default Home;