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
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h2 className="text-xs text-primary tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Master Cleanse Reliac Heirloom</h1>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {
                            LimitFood.map(food => <div className="lg:w-1/4 md:w-1/2 p-4 w-full" data-aos="zoom-in">
                            <div className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={food.strMealThumb} />
                            </div>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{food.strCategory}</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">{food.strMeal}</h2>
                                <Link to={`singleFood/${food.idMeal}`}><button className="bg-primary py-2 px-5 font-bold text-white rounded-full transition hover:bg-primary-hover mt-3">order now</button></Link>
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