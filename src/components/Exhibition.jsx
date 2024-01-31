import React from 'react';
import { vector3 } from '../assets';

const Exhibition = () => {
  return (
    <section className="flex md:flex-row flex-col md:py-16 py-6 lg:mt-[100px] md:mt-[80px]">
      <div
        className={`  flex-1  flex justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative`}
      >
        <img
          src={vector3}
          alt="codeit"
          className="block  lg:w-[559px] md:[559px] w-[371.34px] lg:h-[478px] md:h-[380px] h-[238px] lg:mt-0 -md:mt-4"
        />
      </div>
      <div className={' flex-1 flex justify-center items-start flex-col '}>
        <h2
          className={`text-black font-inter lg:text-4xl text-2xl font-semibold xs:text-[16px] md:mt-[-200px] mt-[10px]  text-[16px]  xs:leading-[30.8px] leading-[66.8px] w-full md:mb-0 mb-0 md:p-0 p-4 lg:pl-4`}
        >
          Connect, Captivate, Conquer
        </h2>
        <div
          className={`font-inter font-normal text-background md:text-[14px] text-[12px] leading-[25.8px]  mt-5 mb-6 `}
        >
          <ul className="text-justify text-xl font-normal ">
            <li className="text-dark  ml-5 text-justify ">
              Elevate your events with our unique community platform!
              <br /> Join forces with your audience.
              <br /> Build connections that transcend events-turn
              <br /> every occasion into an immersive, community-driven success!
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Exhibition;
