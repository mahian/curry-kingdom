import React from 'react';
import { IoFastFoodOutline } from "react-icons/io5";
import { GiPartyPopper } from "react-icons/gi";
import { DiYii } from "react-icons/di";

const Services = () => {
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    {/* <div class="flex flex-col text-center w-full mb-20">
                        <h2 class="text-xs text-primary tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
                        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">Master Cleanse Reliac Heirloom</h1>
                    </div> */}
                    <div class="flex flex-wrap -m-4">
                        <div class="p-4 md:w-1/3 ">
                            <div class="flex rounded-lg h-full p-8 flex-col shadow-lg service_card">
                                <div class="mb-3">
                                    <div class="text-primary icon">
                                        <IoFastFoodOutline class="w-10 h-10"/>
                                    </div>
                                    <h2 class="text-gray-900 font-bold text-3xl mt-3 title-font">Delicious Food</h2>
                                </div>
                                <div class="flex-grow">
                                    <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/3 ">
                            <div class="flex rounded-lg h-full p-8 flex-col shadow-lg service_card">
                                <div class="mb-3">
                                    <div class="text-primary icon">
                                        <GiPartyPopper class="w-10 h-10 "/>
                                    </div>
                                    <h2 class="text-gray-900 font-bold text-3xl mt-3 title-font">Fun Time</h2>
                                </div>
                                <div class="flex-grow">
                                    <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/3 ">
                            <div class="flex rounded-lg h-full p-8 flex-col shadow-lg service_card">
                                <div class="mb-3">
                                    <div class="text-primary icon">
                                        <DiYii class="w-10 h-10 "/>
                                    </div>
                                    <h2 class="text-gray-900 font-bold text-3xl mt-3 title-font">Healthy Options</h2>
                                </div>
                                <div class="flex-grow">
                                    <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
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