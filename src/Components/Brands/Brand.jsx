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
      className="card bg-base-100 shadow border border-gray-200 flex flex-col cursor-pointer"
    >
      <figure className="px-5 pt-5 flex-grow">
        <img src={brand?.image} alt="Brand" className="rounded-lg" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{brand?.brand_name.toUpperCase()}</h2>
      </div>
    </div>
  );
};

export default Brand;

Brand.propTypes = {
  brand: PropTypes.object,
};
