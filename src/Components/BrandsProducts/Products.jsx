import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Rating from "react-rating";

const Products = ({ product }) => {
  const { _id, image, name, brand_name, type, price, rating, description } =
    product;
  return (
    <div className="shadow border border-gray-200 dark:border-gray-600 dark:bg-gray-800 p-5 rounded-md flex flex-col">
      <img className="rounded mb-5 flex-grow" src={image} alt="" />
      <h3 className="font-medium text-lg dark:text-gray-300 capitalize mb-1">
        {brand_name}
      </h3>
      <h2 className="text-2xl text-blue-1 dark:text-gray-200 font-semibold mb-1">
        {name}
      </h2>
      <h3 className="font-medium capitalize dark:text-gray-300 mb-2">{type}</h3>

      <div className="flex justify-between mb-2">
        <p className="text-lg font-semibold text-green-600">{price}</p>
        <div className="block font-sans text-xl font-normal leading-normal text-yellow-500 antialiased">
          <Rating
            initialRating={rating}
            emptySymbol={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
            }
            fullSymbol={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
            }
            readonly
          />
        </div>
      </div>

      <h3 className="font-medium capitalize mb-4 dark:text-gray-300">
        {description?.length > 120 ? description.slice(0, 120) : description}...
      </h3>

      <div className="flex justify-between">
        <Link to={`/update/${_id}`}>
          <button className=" px-8 bg-yellow-1 rounded p-3 text-white uppercase font-medium duration-300">
            Update
          </button>
        </Link>{" "}
        <Link to={`/details/${_id}`}>
          <button className=" px-8 bg-blue-1 rounded p-3 text-white uppercase font-medium duration-300">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Products;

Products.propTypes = {
  product: PropTypes.object,
};
