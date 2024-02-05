import React from 'react';
import { p012, connect } from '../assets';
import { BiSolidDollarCircle } from 'react-icons/bi';

const Custom = () => {
  return (
    <section className="pt-20 lg:pt-[120px] pb-12 lg:pb-[90px] relative z-20 overflow-hidden  bg-dimBlue ">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
              <h2
                className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-white
                  mb-4
                  "
              >
                Create and Customise Events
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center mx-4">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div
              className="
               bg-white
               rounded-xl
               relative
               z-10
               overflow-hidden
               border border-primary border-opacity-20
               shadow-pricing
               py-10
               px-8
               sm:p-12
               lg:py-10 lg:px-6
               xl:p-12
               mb-10
               lg:ml-4
               "
            >
              {/* <span className="text-primary font-semibold text-lg block mb-4">
                Personal
              </span> */}
              <img src={p012} alt="pasonal" className="w-24 h-24" />
              <h2 className="font-bold text-dark mb-5 text-[42px]">
                Versatile Ticketing
              </h2>
              <p
                className="
                 text-body-color
                  pb-8
                  mb-8
                  leading-[30.8px]
                  text-xl                  "
              >
                Create unlimited ticket types and customise ticket allocation to
                match your needs
              </p>

              <div></div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div
              className="
               bg-white
               rounded-xl
               relative
               z-10
               overflow-hidden
               border border-primary border-opacity-20
               shadow-pricing
               py-10
               px-8
               sm:p-12
               lg:py-10 lg:px-6
               xl:p-12
               mb-10
               "
            >
              {/* <span className="text-primary font-semibold text-lg block mb-4">
                Business
              </span> */}
              <BiSolidDollarCircle className="w-24 h-24 text-red-500" />
              <h2 className="font-bold text-dark mb-5 text-[42px]">
                Flexible Fee Management
              </h2>
              <p
                className="
                   text-body-color
                  pb-8
                  mb-8
                  leading-[30.8px]
                  text-xl
                
                  "
              >
                Whether you opt for customer-covered fees to generate additional
                revenue or choose to balance internal costs, our platform
                empowers you to tailor fee structures that align with your
                objectives
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div
              className="
               bg-white
               rounded-xl
               relative
               z-10
               overflow-hidden
               border border-primary border-opacity-20
               shadow-pricing
               py-10
               px-8
               sm:p-12
               lg:py-10 lg:px-6
               xl:p-12
               mb-10
               "
            >
              {/* <span className="text-primary font-semibold text-lg block mb-4">
                Professional
              </span> */}
              <img
                src={connect}
                alt="connect"
                className="w-24 h-24 rounded-full"
              />
              <h2 className="font-bold text-dark mb-5 text-[42px]">
                Automated Communication
              </h2>
              <p
                className="
                   text-body-color
                  pb-8
                  mb-8
                  leading-[30.8px]
                  text-xl
                  "
              >
                This enables organizers to send personalize emails, including
                confirmations, updates, and post-events surveys to attendees,
                boosting engagement
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Custom;
