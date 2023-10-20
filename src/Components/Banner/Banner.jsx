const Banner = () => {
  return (
    <div className="bg-[url(https://i.ibb.co/y64K4HT/slider1.jpg)] bg-cover bg-center">
      <div className="bg-gradient-to-r from-blue-1 bg-opacity-90 py-28">
        <div className="max-w-7xl mx-auto my-10 px-5 lg:px-0">
          <h2 className="text-lg md:text-2xl text-white dark:text-gray-200 font-medium text-center mb-4">
            Automotive & Car Dealer
          </h2>
          <h1 className="text-4xl md:text-6xl text-white dark:text-gray-200 font-bold text-center mb-5">
            Find Your Perfect Automotive
          </h1>
          <p className="text-sm md:text-lg text-gray-100 dark:text-gray-300 font-medium text-center max-w-3xl mx-auto">
            Discover the future of driving at our showroom! Explore top models,
            get expert advice, and enjoy special deals. Your dream car awaits.
            Drive in today!
          </p>
          <div>
            <form className="text-center mt-5 flex items-center w-4/5 lg:w-3/5 mx-auto">
              <input
                className="py-3 px-5 bg-gray-200 dark:bg-gray-600 dark:border-gray-500 dark:placeholder:text-gray-400 text-neutral-800 dark:text-gray-200 placeholder:text-gray-600 w-3/5 md:w-4/5 rounded-l outline-none"
                type="search"
                name="search"
                placeholder="Search....."
                id=""
              />
              <button
                className="py-3 px-8 md:px-10 text-blue-1 bg-yellow-1 mr-5 rounded-r md:w-1/5"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
