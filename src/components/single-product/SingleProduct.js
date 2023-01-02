import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const SingleProduct = () => {

    const [food, setFood] = useState([]);
    const location = useLocation();
    const pathName = location.pathname.split("/");
    const foodId = pathName[2];
    console.log(foodId);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`);
            const json = await response.json();
            setFood(json.meals[0]);
        }
        fetchData();
    }, []);

    return (
        <div className="max-w-3xl mx-auto p-4">
            <div className="flex justify-center">
                <img className="w-64 h-64 rounded-full shadow-lg" src={food.strMealThumb} alt="" />
            </div>
            <h1 className="text-3xl font-bold text-center mt-4">{food.strMeal}</h1>
            <p className="text-gray-700 text-xl font-light mt-2 mb-8 text-center">{food.strInstructions}</p>
            <div className="flex items-center justify-between mb-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    $30
                </span>
                <button className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default SingleProduct;