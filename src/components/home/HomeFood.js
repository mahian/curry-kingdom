import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HomeFood = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast");
            const json = await response.json();
            setData(json.meals);
        }
        fetchData();
    }, []);

    const LimitFood = data.slice(0, 8);

    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
                        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">Master Cleanse Reliac Heirloom</h1>
                    </div>
                    <div class="flex flex-wrap -m-4">
                        {
                            LimitFood.map(food => <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <div class="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={food.strMealThumb} />
                            </div>
                            <div class="mt-4">
                                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{food.strCategory}</h3>
                                <h2 class="text-gray-900 title-font text-lg font-medium">{food.strMeal}</h2>
                                <Link to={`singleFood/${food.idMeal}`}><button class="bg-orange-400 py-2 px-5 font-bold text-white rounded-full transition hover:bg-orange-300 mt-3">order now</button></Link>
                            </div>
                        </div>)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomeFood;