import { useLoaderData } from "react-router-dom";
import CardElement from "./CardElement";
import { useState } from "react";

const Cart = () => {
  const loadedCarts = useLoaderData();
  const [carts, setCarts] = useState(loadedCarts);
  return (
    <div className="bg-slate-100">
      <div className="max-w-7xl mx-auto py-12 px-5">
        {carts.length > 0 ? (
          <div className="bg-white rounded py-10 px-5 md:px-10">
            <h2 className="text-3xl text-blue-1 font-semibold pb-4 mb-5 border-b border-gray-200">
              My Cart
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {carts?.map((cart) => (
                <CardElement
                  key={cart._id}
                  cart={cart}
                  carts={carts}
                  setCarts={setCarts}
                ></CardElement>
              ))}
            </div>
            <button className="mb-6 bg-blue-1 rounded-sm active:scale-95 px-10 py-2.5 text-white uppercase font-medium duration-300">
              Proceed Checkout
            </button>
          </div>
        ) : (
          <div className="bg-white rounded py-10 px-16">
            <h2 className="text-3xl text-blue-1 font-semibold text-center pb-4 mb-5">
              Please add products to the cart.
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
