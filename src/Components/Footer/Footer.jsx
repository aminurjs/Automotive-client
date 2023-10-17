import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[url(https://i.ibb.co/y64K4HT/slider1.jpg)] bg-cover bg-center">
      <div className="bg-black bg-opacity-80 pt-20">
        <div className="max-w-7xl mx-auto">
          <div className="px-5 lg:px-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 border-b pb-6 border-gray-800">
            <div className="col-span-2 md:col-span-3 lg:col-span-2">
              <Link to={"/"}>
                <img
                  className="w-44"
                  src="https://i.ibb.co/h8kWK7b/Automotive.png"
                  alt=""
                />
              </Link>
              <p className=" text-[#FFFFFFB2] mt-4">
                Discover the future of driving at our showroom! Explore top
                models, get expert advice, and enjoy special deals. Your dream
                car awaits. Drive in today!
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-8">
                Useful Links
              </h3>
              <p className="text-[#FFFFFFB2] mb-2 text-sm">Content</p>
              <p className="text-[#FFFFFFB2] mb-2 text-sm">Services</p>
              <p className="text-[#FFFFFFB2] mb-2 text-sm">Explore</p>
              <p className="text-[#FFFFFFB2] mb-2 text-sm">Terms & Services</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-8">
                Our Showroom
              </h3>
              <p className="text-[#FFFFFFB2] mb-2 text-sm">
                49 West 32nd Street, New York, <br /> 4.9 mi / 7.9 km from
                Downtown
                <br /> United States
              </p>
              <p className="text-[#FFFFFFB2] mb-2 text-sm">
                Monday — Friday: 8AM — 5PM <br /> Saturday: 10AM — 3PM
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-8">
                Our Contact
              </h3>
              <p className="text-[#FFFFFFB2] text-sm">
                Any question please contact us
              </p>

              <a href="" className="text-[#FFFFFFB2] mb-6 text-sm block">
                noreply@aminur.com
              </a>
            </div>
          </div>
          <div className="py-6 text-center px-5 lg:px-0">
            <p className="text-[#FFFFFFB2]">
              Copyright © 2023 Automotive. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
