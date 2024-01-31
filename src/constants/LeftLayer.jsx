import React from 'react';
import { Link } from 'react-router-dom';
import { vector2 } from '../assets';

const LeftLayer = () => {
  return (
    <section className={`flex md:flex-row flex-col-reverse sm:py-16 py-6`}>
      <div
        className={`lg:mx-32 px-8 flex-1 flex justify-center items-start flex-col`}
      >
        <h2
          className={`font-inter font-semibold xs:text-[20px] lg:text-3xl md:mt-[60px] mt-[70px] text-[16px] text-black sm:leading-[60.8px] leading-[30.8px] w-full mb-4`}
        >
          Ticketing Features <br />
        </h2>
        <div
          className={`font-inter text-justify font-normal text-black2 lg:text-2xl text-[14px] leading-[25.8px] lg:max-w-[470px] min-w-[300px] mt-5 mb-6`}
        >
          <ul className="space-y-3">
            <li className="list-disc">Intuitive Event Creation</li>
            <li className="list-disc">Customizable Tickets</li>
            <li className="list-disc">Multiple Event Support</li>
            <li className="list-disc">Attendee Management</li>
            <li className="list-disc">Agent App for Check-In</li>
            <li className="list-disc">Efficient Payment Processing</li>
          </ul>
        </div>
      </div>
      <div>
        <div className="hidden md:block ">
          <div
            className={`flex-1 flex  justify-center items-center  md:ml-10 ml-0 md:mt-0  mr-32  lg:px-24 relative`}
          >
            <img
              src={vector2}
              alt="lastveb"
              className=" block  w-[500.47px] h-[400.1px] "
            />
          </div>
        </div>
        <div className="px-8 block md:hidden mx-8">
          <div className="block md:hidden">
            <img src={vector2} alt="smalllastveb" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeftLayer;
