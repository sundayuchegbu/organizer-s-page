import { BiSolidDollarCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { connect, p012, star } from './assets';
// import Navbar from './constants/Navbar';

function App() {
  return (
    <div className="App  blur-3.5">
      {/* <Navbar /> */}
      {/* Banner section */}
      <section
        className="bg-[#0A0D36]"
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
                className="inline-flex items-center justify-center bg-red-700 w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-full sm:w-auto hover:bg-red-700 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-red-700 dark:hover:bg-red-400 dark:focus:ring-red-700"
              >
                View All Events
              </Link>

              <Link
                to="/"
                target="_blank"
                className="inline-flex items-center justify-center  w-full px-5 py-3 text-sm font-medium text-center bg-white border border-red-700 text-red-700 rounded-full sm:w-auto focus:ring-4 dark:hover:bg-red-700 hover:text-white "
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

      {/* custom */}
      <section className="pt-20 lg:pt-[120px] pb-12 lg:pb-[90px] relative z-20 overflow-hidden  bg-[#0A0D36]">
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
               border border-[#25aae1] border-opacity-20
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
                  Create unlimited ticket types and customise ticket allocation
                  to match your needs
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
               border border-[#25aae1] border-opacity-20
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
                  Whether you opt for customer-covered fees to generate
                  additional revenue or choose to balance internal costs, our
                  platform empowers you to tailor fee structures that align with
                  your objectives
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
               border border-[#25aae1] border-opacity-20
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
                <h2 className="font-bold text-dark mb-5 md:text-[42px] text-[32px]">
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
      {/* Testimonial */}
      <div className="container  mx-auto md:px-6 bg-[#0A0D36]">
        <div className="mb-32 text-center">
          <h2 className="mb-12 text-3xl font-bold text-white">
            Flexible, Secured Payments
          </h2>

          <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
            <div className="mb-12 md:mb-0">
              <div className="mb-6 flex justify-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg"
                  className="w-32 rounded-full shadow-lg dark:shadow-black/20"
                />
              </div>
              <h5 className="mb-2 text-lg font-bold text-white">
                Indentification
              </h5>
              <h6 className="mb-4 font-medium text-white dark:text-primary-400">
                There is just enough space here for several lines of text. Use
                it well.
              </h6>
            </div>
            <div className="mb-12 md:mb-0">
              <div className="mb-6 flex justify-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg"
                  className="w-32 rounded-full shadow-lg dark:shadow-black/20"
                />
              </div>
              <h5 className="mb-2 text-lg font-bold text-white">Validation</h5>
              <h6 className="mb-4 font-medium text-white dark:text-primary-400">
                There is just enough space here for several lines of text. Use
                it well.
              </h6>
            </div>
            <div className="mb-0">
              <div className="mb-6 flex justify-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg"
                  className="w-32 rounded-full shadow-lg dark:shadow-black/20"
                />
              </div>
              <h5 className="mb-2 text-lg font-bold text-white">Selling</h5>
              <h6 className="mb-4 font-medium text-white dark:text-primary-400">
                There is just enough space here for several lines of text. Use
                it well.
              </h6>
            </div>
          </div>
        </div>
      </div>

      {/* Reward */}
      <section className="flex md:flex-row flex-col md:py-16  py-6  md:-mt-[130px] items-center justify-center bg-[#0A0D36]">
        <div className="flex justify-center  border-4 border-gray-600 rounded-[50px] w-[350px] ml-12 h-[500px] mx-uto bg-white ">
          <div className=" flex flex-col ">
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
        <div className="flex justify-center  border-4 border-gray-600 rounded-[50px] w-[350px] ml-12 h-[500px] mx-uto bg-white">
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

      {/* Exhibition */}

      <div className="container  mx-auto md:px-6 md:py-24 bg-[#0A0D36]">
        <section className="mb-32 text-center">
          <h2 className="mb-12 text-3xl font-bold text-white">
            Moticket Agent App
          </h2>

          <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
            <div className="mb-12 md:mb-0">
              <div className="mb-6 flex justify-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg"
                  className="w-32 rounded-full shadow-lg dark:shadow-black/20"
                />
              </div>
              <h5 className="mb-2 text-lg font-bold text-white">
                Indentification
              </h5>
              <h6 className="mb-4 font-medium text-white dark:text-primary-400">
                There is just enough space here for several lines of text. Use
                it well.
              </h6>
            </div>
            <div className="mb-12 md:mb-0">
              <div className="mb-6 flex justify-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg"
                  className="w-32 rounded-full shadow-lg dark:shadow-black/20"
                />
              </div>
              <h5 className="mb-2 text-lg font-bold text-white">Validation</h5>
              <h6 className="mb-4 font-medium text-white dark:text-primary-400">
                There is just enough space here for several lines of text. Use
                it well.
              </h6>
            </div>
            <div className="mb-0">
              <div className="mb-6 flex justify-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg"
                  className="w-32 rounded-full shadow-lg dark:shadow-black/20"
                />
              </div>
              <h5 className="mb-2 text-lg font-bold text-white">Selling</h5>
              <h6 className="mb-4 font-medium text-white dark:text-primary-400">
                There is just enough space here for several lines of text. Use
                it well.
              </h6>
            </div>
          </div>
        </section>
      </div>

      {/* Pricing */}
      <div className="container -mt-14 mx-auto md:px-6 bg-[#0A0D36] py-24">
        <div className="">
          <h2 className="mb-12 -mt-16 text-center text-3xl font-bold text-white">
            Pricing
          </h2>

          <div className="grid gap-6 lg:grid-cols-3 lg:gap-x-12">
            <div className="mb-6 lg:mb-0">
              <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-white">
                <div className="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
                  <p className="mb-4 text-sm uppercase">
                    <strong>Free Events</strong>
                  </p>
                  <h3 className="mb-6 text-3xl">
                    <strong>Free *</strong>
                  </h3>

                  <button
                    type="button"
                    className="inline-block w-full rounded bg-[#25aae1] px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Get Started
                  </button>
                </div>
                <div className="p-6">
                  <ol className="list-inside">
                    <li className="mb-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        className="mr-3 h-5 w-5 text-[#25aae1] dark:text-primary-400"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Unlimited updates
                    </li>
                    <li className="mb-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        className="mr-3 h-5 w-5 text-[#25aae1] dark:text-primary-400"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Git repository
                    </li>
                    <li className="mb-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        className="mr-3 h-5 w-5 text-[#25aae1] dark:text-primary-400"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      npm installation
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="mb-6 lg:mb-0">
              <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-white">
                <div className="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
                  <p className="mb-4 text-sm uppercase text-black">
                    <strong>Paid Events</strong>
                  </p>
                  <h3 className="mb-6 text-3xl">
                    <strong classNameName="text-black">£ 299</strong>
                  </h3>
                  <button
                    type="button"
                    className="inline-block w-full rounded bg-[#25aae1] px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Get Started
                  </button>
                </div>
                <div className="p-6">
                  <ol className="list-inside">
                    <li className="mb-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        className="mr-3 h-5 w-5 text-[#25aae1] dark:text-primary-400"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Unlimited updates
                    </li>
                    <li className="mb-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        className="mr-3 h-5 w-5 text-[25aae1] dark:text-primary-400"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Git repository
                    </li>
                    <li className="mb-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        className="mr-3 h-5 w-5 text-[#25aae1] dark:text-primary-400"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      npm installation
                    </li>
                    <li className="mb-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        className="mr-3 h-5 w-5 text-[#25aae1] dark:text-primary-400"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Code examples
                    </li>
                    <li className="mb-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        className="mr-3 h-5 w-5 text-[#25aae1] dark:text-primary-400"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Premium snippets
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="mb-6 lg:mb-0">
              <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-white">
                <div className="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
                  <p className="mb-4 text-sm uppercase">
                    <strong>Enterprise</strong>
                  </p>
                  <h3 className="mb-6 text-3xl">
                    <strong>£ 499</strong>
                  </h3>
                  <button
                    type="button"
                    className="inline-block w-full rounded bg-[#25aae1] px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Get Started
                  </button>
                </div>
                <div className="p-6">
                  <ol className="list-inside">
                    <li className="mb-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        className="mr-3 h-5 w-5 text-[#25aae1] dark:text-primary-400"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Unlimited updates
                    </li>
                    <li className="mb-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        className="mr-3 h-5 w-5 text-[#25aae1] dark:text-primary-400"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Git repository
                    </li>
                    <li className="mb-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        className="mr-3 h-5 w-5 text-[#25aae1] dark:text-primary-400"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      npm installation
                    </li>
                    <li className="mb-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        className="mr-3 h-5 w-5 text-[#25aae1] dark:text-primary-400"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Code examples
                    </li>
                    <li className="mb-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        className="mr-3 h-5 w-5 text-[#25aae1] dark:text-primary-400"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Premium snippets
                    </li>
                    <li className="mb-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        className="mr-3 h-5 w-5 text-[#25aae1] dark:text-primary-400"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Premium support
                    </li>
                    <li className="mb-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        className="mr-3 h-5 w-5 text-[#25aae1] dark:text-primary-400"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Drag&amp;Drop builder
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
