import { BiSolidDollarCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import {
  live,
  f10,
  f11,
  f9,
  p012,
  star,
  star1,
  verify1,
  verify2,
  verify3,
} from './assets';
import { FaMailBulk } from 'react-icons/fa';

// import Navbar from './constants/Navbar';

function App() {
  return (
    <div className=" blur-3.5">
      {/* <Navbar /> */}
      {/* Banner section */}
      <section
        className="bg-[#0A0D36] lg:h-[721px]"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/djhz5a2ba/image/upload/v1706870766/f2ugvbcviq7bxwirmiek.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-44 ">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
              Event Success <br />
              Loyalty Secured.
            </h1>

            <p className="max-w-2xl mb-6 font-normal text-white lg:mb-8 md:text-lg lg:text-xl dark:text-white">
              Effortless event ticketing and community bulding come
              <br />
              together in a seamless event management platform
              <br /> to create memorable events
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
                to="mailto:help@motickets.co.uk"
                target="_blank"
                className="inline-flex items-center justify-center  w-full px-5 py-3 text-sm font-medium text-center text-white bg-[#0A0D36] border  rounded-full sm:w-auto focus:ring-4  hover:text-white "
              >
                Request Demo{' '}
              </Link>
            </b>
          </div>

          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src={live}
              alt="hero "
              className="w-full h-full rounded-[50px] border-[#000000] border-8"
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
                  Offer unlimited ticket varieties and tailor allocations to
                  match your event's demands. Seamlessly reserve seating and
                  design plans for a smooth attendee journey.
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
                  Choose whether to charge customer-covered fees for extra
                  revenue or cover the cost yourself. Our platform lets you
                  customise fee structures to match your goals.
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
                {/* <img
                  src={connect}
                  alt="connect"
                  className="w-24 h-24 rounded-full"
                /> */}
                <FaMailBulk className="w-24 h-24" />
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
                  This enables organisers to send personalize emails, including
                  confirmations, updates, and post-events surveys to attendees,
                  boosting engagement.
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

          <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12 container">
            <div className="mb-12 md:mb-0">
              <div className="mb-6 flex justify-center">
                <img
                  src={f11}
                  className="w-32 h-32 rounded-full shadow-lg dark:shadow-black/20"
                  alt="f11"
                />
              </div>
              <h5 className="mb-2 text-lg font-bold text-[#25aae1]">
                Flexible Payment Choices
              </h5>
              <h6 className="mb-4 font-medium text-white dark:text-primary-400 ">
                Customers can choose from various card types and use Google Pay,
                Apple Pay, and Paypal for payments.
              </h6>
            </div>
            <div className="mb-12 md:mb-0">
              <div className="mb-6 flex justify-center">
                <img
                  src={f9}
                  className="w-32 h-32 rounded-full shadow-lg dark:shadow-black/20"
                  alt="f9"
                />
              </div>
              <h5 className="mb-2 text-lg font-bold text-[#25aae1]">
                Secured Payments
              </h5>
              <h6 className="mb-4 font-medium text-white dark:text-primary-400 ">
                We've partnered with Stripe for secure payment processing,
                ensuring confidential and security at every step.
              </h6>
            </div>
            <div className="mb-0">
              <div className="mb-6 flex justify-center">
                <img
                  src={f10}
                  className="w-32 h-32 rounded-full shadow-lg dark:shadow-black/20"
                  alt="f10"
                />
              </div>
              <h5 className="mb-2 text-lg font-bold text-[#25aae1]">
                Effortless Checkout Options
              </h5>
              <h6 className="mb-4 font-medium text-white dark:text-primary-400 ">
                One-Click for returning customers, guest checkout for
                first-timers.
              </h6>
            </div>
          </div>
        </div>
      </div>

      {/* Reward */}
      <section className="flex md:flex-row flex-col md:py-16  py-6  md:-mt-[130px] items-center justify-center bg-[#0A0D36]">
        <div className="flex justify-center  border-4 border-gray-600 rounded-[50px] w-[350px] ml-12 h-[500px] mx-uto bg-white ">
          <div className=" flex flex-col ">
            <h1 className="font-bold text-3xl font mt-12 mb-8 text-center">
              Reward Every Event Journey
            </h1>
            <p className=" leading-[30.8px] text-justify px-8">
              Elevate your event with our exclusive
              <br /> loyalty reward
              <br /> program! Delight ticket buyers with perks for frequent
              purchases, event attendance,
              <br /> and, and active community engagement.
            </p>
            <div className="flex items-center justify-center mt-12">
              <img src={star1} className=" w-[50px] h-[50px] " alt="star1" />
            </div>
          </div>
        </div>
        <div className="flex justify-center  border-4 border-gray-600 rounded-[50px] w-[350px] ml-12 h-[500px] mx-uto bg-white">
          <div className=" flex flex-col">
            <h1 className="font-bold text-3xl font mt-12 mb-8 text-center">
              Data-Driven Events
            </h1>
            <p className=" leading-[30.8px]  w-[250px] text-justify">
              Dive into attendance, retention, and engagement effortlessly. Our
              platform provides comprehensive analytics to enhance every aspect
              of your events and foster community growth.
            </p>
            <div className="flex items-center justify-center mt-12">
              <img src={star} className="w-24 h-24 " alt="star" />
            </div>
          </div>
        </div>
      </section>

      {/* Exhibition */}

      <div className="container  mx-auto md:px-6 md:py-24 bg-[#0A0D36] mb-4 ">
        <section className="mb-32 text-center">
          <h2 className="mb-12 text-3xl font-bold text-white">
            MoTicket Agent App
          </h2>

          <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
            <div className="mb-12 md:mb-0">
              <div className="mb-6 flex justify-center">
                <img
                  src={verify1}
                  className="w-32 h-32 rounded-full shadow-lg dark:shadow-black/20"
                  alt="verify"
                />
              </div>
              <h5 className="mb-2 text-lg font-bold text-[#25aae1]">
                Ticket Holder Verification
              </h5>
              <h6 className="mb-4 font-medium text-white dark:text-primary-400 ">
                Never struggle with scanning tickets again! Easily verify ticket
                holders using their phone number or email address.
              </h6>
            </div>
            <div className="mb-12 md:mb-0">
              <div className="mb-6 flex justify-center">
                <img
                  src={verify2}
                  className="w-32 h-32 rounded-full shadow-lg dark:shadow-black/20"
                  alt="verify2"
                />
              </div>
              <h5 className="mb-2 text-lg font-bold text-[#25aae1]">
                Ticket Validation
              </h5>
              <h6 className="mb-4 font-medium text-white dark:text-primary-400">
                Effortlessly check-in guests at events using our Agent App.
              </h6>
            </div>
            <div className="mb-0">
              <div className="mb-6 flex justify-center">
                <img
                  src={verify3}
                  className="w-32 h-32 rounded-full shadow-lg dark:shadow-black/20"
                  alt="verify3"
                />
              </div>
              <h5 className="mb-2 text-lg font-bold text-[#25aae1]">
                Door Sale Made Simple
              </h5>
              <h6 className="mb-4 font-medium text-white dark:text-primary-400">
                Use our Agent App to sell tickets on-site with ease
              </h6>
            </div>
          </div>
        </section>
        <div class="container mx-auto flex flex-col justify-around p-4 text-center  lg:flex-row">
          <div class="flex flex-col justify-center lg:text-left">
            <h1 class="py-2 text-3xl font-medium leadi title-font text-white">
              Download the Moloyal Agent App here
            </h1>
          </div>
          <div class="flex flex-col items-center justify-center flex-shrink-0 mt-6 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:ml-4 lg:mt-0 lg:justify-end">
            <Link
              to="https://play.google.com/store/apps/details?id=com.avantecs.moloyal&hl=en&gl=US"
              target="_blank"
            >
              <button class="inline-flex items-center px-6 py-3 rounded-lg dark:bg-[#25aae1] dark:text-gray-900 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="fill-current w-7 h-7 dark:text-gray-900"
                >
                  <path d="M 5.4160156 2.328125 L 12.935547 10.158203 C 13.132547 10.363203 13.45925 10.363203 13.65625 10.158203 L 15.179688 8.5742188 C 15.405688 8.3392188 15.354312 7.956875 15.070312 7.796875 C 11.137313 5.571875 6.2620156 2.811125 5.4160156 2.328125 z M 3.140625 2.8476562 C 3.055625 3.0456562 3 3.2629063 3 3.5039062 L 3 20.591797 C 3 20.788797 3.044375 20.970625 3.109375 21.140625 L 11.576172 12.324219 C 11.762172 12.131219 11.762172 11.826813 11.576172 11.632812 L 3.140625 2.8476562 z M 17.443359 9.2578125 C 17.335484 9.2729375 17.233297 9.32375 17.154297 9.40625 L 15.015625 11.632812 C 14.829625 11.825812 14.829625 12.130219 15.015625 12.324219 L 17.134766 14.529297 C 17.292766 14.694297 17.546141 14.729188 17.744141 14.617188 C 19.227141 13.777188 20.226563 13.212891 20.226562 13.212891 C 20.725562 12.909891 21.007 12.443547 21 11.935547 C 20.992 11.439547 20.702609 10.981938 20.224609 10.710938 C 20.163609 10.676937 19.187672 10.124359 17.763672 9.3183594 C 17.664172 9.2623594 17.551234 9.2426875 17.443359 9.2578125 z M 13.296875 13.644531 C 13.165875 13.644531 13.034047 13.696328 12.935547 13.798828 L 5.4746094 21.566406 C 6.7566094 20.837406 11.328781 18.249578 15.050781 16.142578 C 15.334781 15.981578 15.386156 15.599281 15.160156 15.363281 L 13.65625 13.798828 C 13.55775 13.696328 13.427875 13.644531 13.296875 13.644531 z"></path>
                </svg>
                <span class="flex flex-col items-start ml-4 leadi">
                  <span class="mb-1 text-xs">GET IT ON</span>
                  <span class="font-semibold title-font">Google Play</span>
                </span>
              </button>
            </Link>
          </div>
        </div>
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
                    <strong>Basic (Free Events)</strong>
                  </p>
                  <h3 className="mb-6 text-3xl">
                    <strong>Free *</strong>
                  </h3>

                  <button
                    type="button"
                    className="inline-block w-full rounded bg-[#c10006] px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Get Started
                  </button>
                </div>
                <h6 className="p-6 font-semibold">What's included:</h6>
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
                      No charge for up to 100 free tickets.
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
                      £0.39 fee per free ticket after 100 tickets.
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
                      Customer Support
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="mb-6 lg:mb-0">
              <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-white">
                <div className="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
                  <p className="mb-4 text-sm uppercase text-black">
                    <strong>Standard (Paid Events)</strong>
                  </p>
                  <h3 className="mb-6 text-3xl">
                    <strong classNameName="text-black">5% +£0.49</strong>
                    <small>/Ticket</small>
                  </h3>
                  <button
                    type="button"
                    className="inline-block w-full rounded bg-[#c10006] px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Get Started
                  </button>
                </div>
                <h6 className="p-6 font-semibold">What's included:</h6>
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
                      Audience Analytics
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
                      Unlimited Ticket Types
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
                      Access to Agent App
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
                    {/* <strong>Large & Complex Events</strong> */}
                    <strong>Custom Prices</strong>
                  </h3>
                  <Link to="mailto:help@motickets.co.uk">
                    <button
                      type="button"
                      className="inline-block w-full rounded bg-[#c10006] px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      Contact Us
                    </button>
                  </Link>
                </div>
                <h6 className="p-6 font-semibold">What's included:</h6>
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
                      Get Asistance in Planning your Event.
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
                      Prices Tailored to your needs.
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
                      Standard Features
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
                      Premium Support
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
                      Dedicated Account Manager
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
