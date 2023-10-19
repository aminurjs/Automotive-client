import { Link, useLoaderData } from "react-router-dom";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillRightCircle,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { IoMdPricetags } from "react-icons/io";
import { BsFillInfoCircleFill, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const ProductDetails = () => {
  const product = useLoaderData();
  console.log(product);

  const { image, name, type, price, brand_name, rating, description } = product;
  return (
    <div className=" py-20">
      <div className="max-w-7xl mx-auto flex gap-4 lg:gap-6 p-5 flex-col md:flex-row">
        <div className="md:w-3/5 lg:w-2/3 mb-5">
          <img className="rounded-lg mb-6" src={image} alt="" />
          <p className="leading-normal text-[#7A7A7A] pb-8 border-b border-gray-300 mb-8">
            {description}
          </p>
          <div className="flex justify-between">
            <div>
              <h4 className="mb-2 font-medium">Shares:</h4>
              <div className="text-blue-600 text-2xl flex gap-4">
                <Link>
                  <AiOutlineInstagram></AiOutlineInstagram>
                </Link>
                <Link>
                  <AiFillFacebook></AiFillFacebook>
                </Link>
                <Link>
                  <AiOutlineTwitter></AiOutlineTwitter>
                </Link>
                <Link>
                  <AiFillLinkedin></AiFillLinkedin>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-2/5 lg:w-1/3 p-2 lg:p-5">
          <h3 className="mb-4 font-semibold text-blue-1 text-xl pb-2 border-b border-gray-300">
            <span>
              <BsFillInfoCircleFill className="inline text-2xl"></BsFillInfoCircleFill>
            </span>{" "}
            Product Info
          </h3>
          <h3 className="font-semibold text-lg mb-2">
            <span>
              <AiFillRightCircle className="inline text-xl text-blue-1"></AiFillRightCircle>
            </span>{" "}
            Name : {name}
          </h3>
          <h3 className="font-medium mb-2 ">
            <span>
              <AiFillRightCircle className="inline text-xl text-blue-1"></AiFillRightCircle>
            </span>{" "}
            Brand :{" "}
            <span className="uppercase font-semibold text-sm">
              {brand_name}
            </span>
          </h3>
          <h3 className="font-medium mb-2 ">
            <span>
              <AiFillRightCircle className="inline text-xl text-blue-1"></AiFillRightCircle>
            </span>{" "}
            Type : {type}
          </h3>
          <h3 className="font-medium mb-2 ">
            <span>
              <AiFillRightCircle className="inline text-xl text-blue-1"></AiFillRightCircle>
            </span>{" "}
            Rating : {rating}
          </h3>

          <div className="flex gap-2 items-center my-4">
            <span className="text-[#3378F8] text-2xl ">
              <IoMdPricetags></IoMdPricetags>
            </span>
            <p className="text-xl text-blue-1">Price : {price}</p>
          </div>
          <button className="mb-6 bg-blue-1 rounded-sm active:scale-95 px-10 py-2.5 text-white uppercase font-medium duration-300">
            Add To Cart
          </button>
          <h3 className="mb-4 font-semibold text-xl pb-2 border-b border-gray-300 mt-10">
            Find us on
          </h3>
          <div className="border border-gray-200 rounded-md">
            <ul>
              <li className="p-3 border-b border-gray-200">
                <a className="flex gap-2 items-center" href="" target="blank">
                  <div className="p-1.5 bg-dark-7 rounded-full text-xl">
                    <FaFacebookF></FaFacebookF>
                  </div>
                  <span className="text-dark-3 font-medium">Facebook</span>
                </a>
              </li>
              <li className="p-3 border-b border-gray-200">
                <a className="flex gap-2 items-center" href="" target="blank">
                  <div className="p-1.5 bg-dark-7 rounded-full text-xl text-[#58A7DE]">
                    <BsTwitter></BsTwitter>
                  </div>

                  <span className="text-dark-3 font-medium">Twitter</span>
                </a>
              </li>
              <li className="p-3">
                <a className="flex gap-2 items-center" href="" target="blank">
                  <div className="p-1.5 bg-dark-7 rounded-full text-xl  text-[#D9465E]">
                    <BsInstagram></BsInstagram>
                  </div>
                  <span className="text-dark-3 font-medium">Instagram</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
