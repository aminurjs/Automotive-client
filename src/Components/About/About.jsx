import { BiCrown, BiLike } from "react-icons/bi";
import { BsShieldCheck } from "react-icons/bs";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto py-20 px-5">
      <h2 className="text-3xl text-blue-1 font-semibold mb-5 text-center">
        About Automotive
      </h2>
      <p className=" text-gray-600 font-medium text-center max-w-3xl mx-auto mb-10">
        Discover the future of driving at our showroom! Explore top models, get
        expert advice, and enjoy special deals. Your dream car awaits. Drive in
        today!
      </p>
      <div className="lg:flex gap-10">
        <div className="lg:w-1/2">
          <h2 className="text-xl text-blue-1 font-semibold mb-5 border-l-4 border-yellow-1 pl-3">
            We offer high quality vehicles at unbelievable prices & creates
            pleasant buying experience.
          </h2>{" "}
          <p className=" text-gray-600 font-medium leading-relaxed mb-5">
            The premier destination for discerning car enthusiasts and buyers.
            We pride ourselves on showcasing a handpicked assortment of the
            finest vehicles, each one reflecting our dedication to quality,
            performance, and luxury. Beyond the cars, our team is driven by an
            unwavering commitment to serve our customers, ensuring a seamless
            and rewarding buying experience from start to finish. Whether{" "}
            {"you're"} a seasoned collector or a first-time buyer, Automotive
            promises an unmatched blend of choice, expertise, and trust. Dive
            into our world, where your dream car is more than a{" "}
            {"purchase—it's"} a partnership. Discover the future of driving at
            our showroom! Explore top models, get expert advice, and enjoy
            special deals. Your dream car awaits. Drive in today!
          </p>
          <div>
            <div className="flex gap-4 items-center mb-4">
              <div className="text-yellow-1 text-4xl">
                <BiCrown></BiCrown>
              </div>
              <div>
                <h4 className=" text-blue-1 text-lg font-semibold mb-1">
                  Affordable Auto Prices
                </h4>
                <p className="text-gray-600 text-sm">
                  Elevating Quality Vehicles, Wallet-Friendly Rates.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center mb-4">
              <div className="text-yellow-1 text-4xl">
                <BsShieldCheck></BsShieldCheck>
              </div>
              <div>
                <h4 className=" text-blue-1 text-lg font-semibold mb-1">
                  20 Years in Business
                </h4>
                <p className="text-gray-600 text-sm">
                  Elevating Quality Vehicles, Wallet-Friendly Rates.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center mb-4">
              <div className="text-yellow-1 text-4xl">
                <BiLike></BiLike>
              </div>
              <div>
                <h4 className=" text-blue-1 text-lg font-semibold mb-1">
                  Trusted & Genuine Parts
                </h4>
                <p className="text-gray-600 text-sm">
                  Elevating Quality Vehicles, Wallet-Friendly Rates.
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          className="lg:w-1/2 rounded-md"
          src="https://i.ibb.co/0hChsCC/g01.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
