import React from 'react';
import { IoFastFoodOutline } from "react-icons/io5";
import { GiPartyPopper } from "react-icons/gi";
import { DiYii } from "react-icons/di";

const Services = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    {/* <div className="flex flex-col text-center w-full mb-20">
                        <h2 className="text-xs text-primary tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Master Cleanse Reliac Heirloom</h1>
                    </div> */}
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/3 " data-aos="flip-down">
                            <div className="flex rounded-lg h-full p-8 flex-col shadow-lg service_card">
                                <div className="mb-3">
                                    <div className="text-primary icon">
                                        <IoFastFoodOutline className="w-10 h-10"/>
                                    </div>
                                    <h2 className="text-gray-900 font-bold text-3xl mt-3 title-font">Delicious Food</h2>
                                </div>
                                <div className="flex-grow">
                                    <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 " data-aos="flip-down">
                            <div className="flex rounded-lg h-full p-8 flex-col shadow-lg service_card">
                                <div className="mb-3">
                                    <div className="text-primary icon">
                                        <GiPartyPopper className="w-10 h-10 "/>
                                    </div>
                                    <h2 className="text-gray-900 font-bold text-3xl mt-3 title-font">Fun Time</h2>
                                </div>
                                <div className="flex-grow">
                                    <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 " data-aos="flip-down">
                            <div className="flex rounded-lg h-full p-8 flex-col shadow-lg service_card">
                                <div className="mb-3">
                                    <div className="text-primary icon">
                                        <DiYii className="w-10 h-10 "/>
                                    </div>
                                    <h2 className="text-gray-900 font-bold text-3xl mt-3 title-font">Healthy Options</h2>
                                </div>
                                <div className="flex-grow">
                                    <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;