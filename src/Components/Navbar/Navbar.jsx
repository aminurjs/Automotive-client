import { Link, NavLink } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import "./Navbar.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Navbar = () => {
  const [carts, setCarts] = useState(0);
  const { cartRender, user, logOut } = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:5000/carts")
      .then((res) => res.json())
      .then((data) => setCarts(data.length));
  }, [cartRender]);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Log-out successful");
      })
      .catch((error) => {
        console.log(error);
        // An error happened.
      });
  };

  const menus = [
    { id: "1", name: "Home", path: "/" },
    { id: "2", name: "Add Product", path: "/addproduct" },
    { id: "3", name: "Blog", path: "/blog" },
    { id: "4", name: "Contact", path: "/contact" },
  ];
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-2 px-5 lg:px-0 border-b border-gray-200">
        <div className="navbar">
          <Toaster
            toastOptions={{
              success: {
                style: {
                  background: "white",
                  color: "green",
                },
              },
              error: {
                style: {
                  background: "white",
                  color: "red",
                },
              },
            }}
          />
          <div className="flex-1 gap-12">
            <Link to={"/"}>
              <img
                className="w-32 md:w-44"
                src="https://i.ibb.co/h8kWK7b/Automotive.png"
                alt=""
              />
            </Link>
          </div>
          <div className="flex-none gap-6">
            <div className=" hidden lg:flex">
              <ul className="menu-horizontal px-1">
                {menus.map((menu) => (
                  <li
                    className="mr-5 text-neutral-900 font-medium text-lg"
                    key={menu.id}
                  >
                    <NavLink className="" to={menu.path}>
                      {menu.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              <Link to={"/cart"} className="text-2xl indicator">
                <BsCart3></BsCart3>
                <span className="badge bg-yellow-1 text-blue-1 badge-sm indicator-item">
                  {carts}
                </span>
              </Link>
            </div>

            {user ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={1} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full bg-white">
                    <img
                      src={
                        user?.photoURL
                          ? user.photoURL
                          : "https://i.ibb.co/wYyhNfG/icons8-male-user-100.png"
                      }
                    />
                  </div>
                </label>
                <div
                  tabIndex={1}
                  className="mt-3 z-[1] shadow menu menu-sm dropdown-content bg-base-100 rounded-box p-5 min-w-[220px]"
                >
                  <label className="avatar text-center mx-auto">
                    <div className="w-16 rounded-full bg-white ">
                      <img
                        src={
                          user?.photoURL
                            ? user.photoURL
                            : "https://i.ibb.co/wYyhNfG/icons8-male-user-100.png"
                        }
                      />
                    </div>
                  </label>
                  <h2 className="mt-2 text-black font-medium text-lg text-center">
                    {user?.displayName}
                  </h2>
                  <h2 className="mb-4 text-black font-medium text-sm text-center">
                    {user?.email}
                  </h2>
                  <button onClick={handleLogOut} className="btn btn-sm">
                    Log Out
                  </button>
                </div>
              </div>
            ) : (
              <Link
                to={"/login"}
                className=" font-medium text-white py-1.5 px-3 md:py-2 md:px-4 rounded bg-blue-1"
              >
                Login
              </Link>
            )}
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost  lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 right-0 border border-gray-200 py-5"
              >
                {menus.map((menu) => (
                  <li className="text-lg mb-1" key={menu.id}>
                    <NavLink to={menu.path}>{menu.name}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
