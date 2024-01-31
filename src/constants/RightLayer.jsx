import { vector1, vector3 } from '../assets';

const RightLayer = () => (
  <section className="flex md:flex-row flex-col md:py-16 py-6 lg:mt-[100px] md:mt-[80px]">
    <div
      className={`flex-1  flex justify-center items-center md:mr-10 mr-0  mt-10 relative`}
    >
      <img
        src={vector3}
        alt="codeit"
        className="block  lg:w-[559px] md:[559px] w-[371.34px] lg:h-[478px] md:h-[380px] h-[238px] lg:mt-0 -md:mt-4"
      />
    </div>
    <div className="flex-1 flex justify-center items-start flex-col ">
      <h2
        className={`text-black font-inter font-semibold xs:text-[16px] md:mt-[-200px] mt-[10px] lg:text-4xl text-[16px]  xs:leading-[30.8px] leading-[66.8px] w-full md:mb-0 mb-0 md:p-0 p-4`}
      >
        Hassle-Free Pricing
      </h2>
      <div
        className={`font-inter font-normal text-background md:text-[18px] text-[12px] leading-[25.8px]  mt-5 mb-6  lg:w-[300px] `}
      >
        <ul className="text-justify">
          <li className="text-dark list ml-5 text-justify">
            Discover peace of mind with our clear competitive pricing-no hidden
            fees. Tailored for all events, It's simple, flexible, and stress
            free
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default RightLayer;
