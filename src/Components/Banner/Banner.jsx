const Banner = () => {
  return (
    <div className="bg-[url(https://i.ibb.co/y64K4HT/slider1.jpg)] bg-cover bg-center">
      <div className="bg-gradient-to-r from-blue-1 bg-opacity-90 py-28">
        <div className="max-w-7xl mx-auto my-10 px-5 lg:px-0">
          <h2 className="text-lg md:text-2xl text-white font-medium text-center mb-4">
            Automotive & Car Dealer
          </h2>
          <h1 className="text-4xl md:text-6xl text-white font-bold text-center mb-5">
            Find Your Perfect Car
          </h1>
          <h2 className="text-sm md:text-lg text-gray-100 font-medium text-center max-w-3xl mx-auto">
            Discover the future of driving at our showroom! Explore top models,
            get expert advice, and enjoy special deals. Your dream car awaits.
            Drive in today!
          </h2>
          <div>
            <form className="text-center mt-5 flex items-center">
              <input
                className="py-3 px-10 bg-gray-200 placeholder:text-gray-600 w-4/5 md:w-3/5 rounded-l outline-none"
                type="search"
                name="search"
                placeholder="Search....."
                id=""
              />
              <button
                className="py-3 px-10 text-blue-1 bg-yellow-1 mr-5 rounded-r"
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
