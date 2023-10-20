import PropTypes from "prop-types";
import { useContext } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";

const CardElement = ({ cart, carts, setCarts }) => {
  const { cartRender, setCartRender } = useContext(AuthContext);
  const { _id, id, image, name, price, type, brand_name } = cart;

  const handleCartRemove = () => {
    fetch(`https://automotive-server-gules.vercel.app/carts/remove/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          swal({
            title: "Cart Removed",
            icon: "success",
          });
          const filterCarts = carts.filter((aCart) => aCart._id !== _id);
          setCarts(filterCarts);
          setCartRender(!cartRender);
        }
      });
  };

  return (
    <div className="flex items-center gap-6 mb-5 pb-10 border-b border-gray-200">
      <img className="w-1/3 lg:w-1/2 rounded" src={image} alt="" />
      <div className="w-2/3 lg:w-1/2">
        <h3 className="font-semibold text-blue-1 dark:text-gray-200 text-xl mb-2">
          {name}
        </h3>
        <h3 className="font-semibold text-2xl mb-2">{price}</h3>
        <h3 className="font-medium text-green-600 text-lg mb-1">In Stock</h3>
        <h3 className="font-medium">
          <span className="mr-3">Type: {type}</span>
        </h3>
        <h3 className="font-medium mb-2">
          Brand: <span className="uppercase">{brand_name}</span>
        </h3>
        <div>
          <Link to={`/details/${id}`}>
            <button className=" mr-3 bg-yellow-1 rounded-sm active:scale-95 px-3 py-1 text-white text-sm font-medium duration-300">
              Details
            </button>
          </Link>
          <button
            onClick={handleCartRemove}
            className=" bg-blue-1 rounded-sm active:scale-95 px-3 py-1 text-white text-sm font-medium duration-300"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardElement;

CardElement.propTypes = {
  cart: PropTypes.object,
  carts: PropTypes.array,
  setCarts: PropTypes.func,
};
