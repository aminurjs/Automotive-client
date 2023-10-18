import PropTypes from "prop-types";

const Products = ({ product }) => {
  const { image, name, brand_name, type, price, rating, description } = product;

  return (
    <div className="shadow border border-gray-200 p-5 rounded-md flex flex-col">
      <img className="rounded mb-5 flex-grow" src={image} alt="" />
      <h3 className="font-medium text-lg capitalize mb-1">{brand_name}</h3>
      <h2 className="text-2xl text-blue-1 font-semibold mb-1">{name}</h2>
      <h3 className="font-medium capitalize mb-2">{type}</h3>

      <div className="flex justify-between mb-2">
        <p className="text-lg font-semibold text-green-600">{price}</p>
        <p className="text-lg font-semibold text-yellow-1">{rating}</p>
      </div>

      <h3 className="font-medium capitalize mb-4">
        {description.slice(0, 120)}...
      </h3>

      <div className="flex justify-between">
        <button className=" px-8 bg-yellow-1 rounded p-3 text-white uppercase font-medium duration-300">
          Update
        </button>
        <button className=" px-8 bg-blue-1 rounded p-3 text-white uppercase font-medium duration-300">
          View Details
        </button>
      </div>
    </div>
  );
};

export default Products;

Products.propTypes = {
  product: PropTypes.object,
};
