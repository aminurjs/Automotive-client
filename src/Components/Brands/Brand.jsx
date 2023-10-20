import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Brand = ({ brand }) => {
  const navigate = useNavigate();

  const handleBrand = () => {
    navigate(`/brand/${brand?.brand_name.toLowerCase()}`);
  };

  return (
    <div
      onClick={handleBrand}
      className="card bg-base-100 dark:bg-gray-900 shadow border border-gray-200 dark:border-gray-600 flex flex-col cursor-pointer"
    >
      <figure className="px-5 pt-5 flex-grow">
        <img src={brand?.image} alt="Brand" className="rounded-lg" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title dark:text-gray-200">
          {brand?.brand_name.toUpperCase()}
        </h2>
      </div>
    </div>
  );
};

export default Brand;

Brand.propTypes = {
  brand: PropTypes.object,
};
