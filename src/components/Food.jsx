import React, { useState } from "react";
import { data } from "../data/data.js";

export const Food = () => {
  const [foods, setFoods] = useState(data);
  const a = ["$", "$$", "$$$$", "$$$$$"];
  const filterType = (catagory) => {
    console.log(catagory);
    if (!catagory) {
      setFoods(data);
      return;
    }
    setFoods(
      data.filter((item) => {
        return item.category === catagory;
      })
    );
  };

  const filterPrice = (price) => {
   console.log(price)
    if (!a.includes(price)) {
      price = "$$$";
    }
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className="max-w-[1640] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between items-end">
        {/* Filter type */}
        <div>
          <p className="font-bold text-gray-700">Filter type</p>
          <div className="flex justify-between flex-wrap">
            <button
              onClick={() => filterType(false)}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              All
            </button>
            <button
              onClick={() => filterType("burger")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Burgers
            </button>
            <button
              onClick={() => filterType("pizza")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Pizza
            </button>
            <button
              onClick={() => filterType("salad")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Salads
            </button>
            <button
              onClick={() => filterType("chicken")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Chicken
            </button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className="font-bold text-gray-700"></p>
          <div className="flex justify-between max-w-[390px] w-full"></div>
          <button
            onClick={() => filterPrice("$")}
            className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
          >
            $
          </button>
          <button
            onClick={() => filterPrice("$$")}
            className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
          >
            $$
          </button>
          <button
            onClick={filterPrice}
            className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
          >
            $$$
          </button>
          <button
            onClick={() => filterPrice("$$$$")}
            className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
          >
            $$$$
          </button>
          <button
            onClick={() => filterPrice("$$$$$")}
            className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
          >
            $$$$$
          </button>
        </div>
      </div>
      {/* Display foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((food, index) => {
          return (
            <div
              key={index}
              className="rounded-lg border shadow-lg hover:scale-105 duration-300 cursor-pointer"
            >
              <img
                className="w-full h-[200px] object-cover rounded-t-lg"
                src={food.image}
                alt={food.name}
              />
              <div className="flex justify-between px-2 py-4">
                <p className="font-bold">{food.name}</p>
                <p className>
                  <span className="bg-orange-500 text-white p-1 rounded-full">
                    {food.price}
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};