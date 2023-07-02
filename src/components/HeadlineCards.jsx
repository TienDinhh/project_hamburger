import React from "react";

export const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* Card */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white ">
          <p className="font-bold text-2xl px-2 pt-4">Sun's Out, BOGO's Out</p>
          <p className="px-2">Through 8/26</p>
          <button className="border-white bg-white text-black mx-2 aboslute bottom-4">
            Order now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
        />
      </div>
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white ">
          <p className="font-bold text-2xl px-2 pt-4">New Restaurants</p>
          <p className="px-2">Added Daily</p>
          <button className="border-white bg-white text-black mx-2 aboslute bottom-4">
            Order now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
        />
      </div>

      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white ">
          <p className="font-bold text-2xl px-2 pt-4">Sun's Out, BOGO's Out</p>
          <p className="px-2">Through 8/26</p>
          <button className="border-white bg-white text-black mx-2 aboslute bottom-4">
            Order now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
        />
      </div>
    </div>
  );
};
