import React from 'react';
import RightLayer from '../constants/RightLayer';

import { star } from '../assets';
import LeftLayer from '../constants/LeftLayer';

const Reward = () => {
  return (
    <>
      <section className="flex md:flex-row flex-col md:py-16 py-6 lg:mt-[100px] md:mt-[80px] items-center justify-center">
        <div className="flex justify-center  border-4 border-gray-600 rounded-[50px] w-[350px] ml-12 h-[500px] mx-uto">
          <div className=" flex flex-col">
            <h1 className="font-bold text-2xl font mt-24 text-center">
              Reward Every Event Journey
            </h1>
            <p className=" leading-[30.8px] text-center">
              Elevate your event with our exclusive
              <br /> loyalty reward
              <br /> program! Delight ticket buyers with perks for frequent
              purchases, event attendance,
              <br /> and, and active community engagement
            </p>
            <div className="flex items-center justify-center mt-12">
              <img src={star} className="w-24 h-24 " />
            </div>
          </div>
        </div>
        <div className="flex justify-center  border-4 border-gray-600 rounded-[50px] w-[350px] ml-12 h-[500px] mx-uto">
          <div className=" flex flex-col">
            <h1 className="font-bold text-2xl font mt-24 text-center">
              Reward Every Event Journey
            </h1>
            <p className=" leading-[30.8px] text-center">
              Elevate your event with our exclusive
              <br /> loyalty reward
              <br /> program! Delight ticket buyers with perks for frequent
              purchases, event attendance,
              <br /> and, and active community engagement
            </p>
            <div className="flex items-center justify-center mt-12">
              <img src={star} className="w-24 h-24 " />
            </div>
          </div>
        </div>
      </section>
      <LeftLayer />
      <RightLayer />
    </>
  );
};

export default Reward;
