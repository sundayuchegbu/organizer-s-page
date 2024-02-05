import React from 'react';

const Testimonial = () => {
  return (
    <div className="container  mx-auto md:px-6 bg-dimBlue">
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
              There is just enough space here for several lines of text. Use it
              well.
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
              There is just enough space here for several lines of text. Use it
              well.
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
              There is just enough space here for several lines of text. Use it
              well.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
