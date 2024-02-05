import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <section
      className="bg-black/90 blur-3.5"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/djhz5a2ba/image/upload/v1706870766/f2ugvbcviq7bxwirmiek.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
            Event Success <br />
            Loyalty Secured.
          </h1>

          <p className="max-w-2xl mb-6 font-normal text-white lg:mb-8 md:text-lg lg:text-xl dark:text-white">
            Effortless event ticketing and <br /> community bulding come
            together in in a seamless event <br />
            management platform to create and the memorable events
          </p>

          <b className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <Link
              to="/"
              target="_blank"
              className="inline-flex items-center justify-center bg-secondary w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-full sm:w-auto hover:bg-secondary focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-secondary dark:hover:bg-red-400 dark:focus:ring-secondary"
            >
              View All Events
            </Link>

            <Link
              to="/"
              target="_blank"
              className="inline-flex items-center justify-center  w-full px-5 py-3 text-sm font-medium text-center bg-white border border-secondary text-secondary rounded-full sm:w-auto focus:ring-4 dark:hover:bg-secondary hover:text-white "
            >
              Request Demo{' '}
            </Link>
          </b>
        </div>

        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="https://demo.themesberg.com/landwind/images/hero.png"
            alt="hero image"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
