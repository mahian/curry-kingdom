import React from 'react';

const About = () => {
    return (
        <div>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0" data-aos="fade-right">
                        <img className="object-cover object-center md:h-[600px] rounded" alt="hero" src="assets/restaurant.webp"/>
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center" data-aos="fade-left">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">Curry Kingdom</h1>
                        <p className="mb-8 leading-relaxed">
                        For us, every day Bangladeshi food is magical. Our aim is to bring you real Bangladeshi dishes with their rainbow of colors, spices, and flavors to make this magic accessible to all. We love combining traditional dishes from cities and villages all over India, with quality ingredients and our own modern twist. We hope you will love it too. Our Chef Rahman has many years of experience in Bangladeshi cuisine including 12 years at some of the trendiest Bangladeshi restaurants in the UK and has worked as the executive chef for the last 4 years at Anarbagh Bangladeshi Restaurant in Beverly Hills. <br /><br /> He is well known for his delightful dishes with excellent consistency and flavor and now he has decided to open his own restaurant here in the heart of West Hollywood to serve the amazing community and would like to extend his gracious invitation to everyone. Our menu has the finest ingredients. Skill, imagination & passion all combine to craft authentic, timeless, and true classics that weave wonders on the taste buds & stir the soul.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;