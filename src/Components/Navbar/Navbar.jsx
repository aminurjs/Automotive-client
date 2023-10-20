import { Link, NavLink } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import "./Navbar.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Navbar = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwich = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const [carts, setCarts] = useState(0);
  const { cartRender, user, logOut } = useContext(AuthContext);

  useEffect(() => {
    fetch("https://automotive-server-gules.vercel.app/carts")
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
  ];
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-2 px-5 lg:px-0 border-b border-gray-200 dark:border-gray-800">
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
                    className="mr-5 text-neutral-900 dark:text-gray-200 font-medium text-lg"
                    key={menu.id}
                  >
                    <NavLink className="" to={menu.path}>
                      {menu.name}
                    </NavLink>
                  </li>
                ))}
                <li>
                  <Link
                    to="/cart"
                    className="text-2xl indicator text-neutral-900 dark:text-gray-200"
                  >
                    <BsCart3></BsCart3>
                    <span className="badge bg-yellow-1 text-blue-1 badge-sm indicator-item">
                      {carts}
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              {theme === "dark" ? (
                <button
                  className=" text-neutral-900 dark:text-gray-200"
                  onClick={handleThemeSwich}
                >
                  {" "}
                  <svg
                    className="swap-on fill-current w-8 h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>
                </button>
              ) : (
                <button
                  className=" text-neutral-900 dark:text-gray-200"
                  onClick={handleThemeSwich}
                >
                  <svg
                    className="swap-off fill-current w-8 h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                </button>
              )}
            </div>

            <div className="dropdown">
              <label
                tabIndex={0}
                className="btn btn-ghost  text-neutral-900 dark:text-gray-200 lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
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
                className="menu dark:bg-gray-800 menu-sm dropdown-content mt-3 z-[99] p-2 shadow bg-base-100 rounded-box w-52 right-0 border border-gray-200 dark:border-gray-800 py-5"
              >
                {menus.map((menu) => (
                  <li
                    className="text-lg mb-1  text-neutral-900  dark:text-gray-200 dark:hover:text-gray-200"
                    key={menu.id}
                  >
                    <NavLink to={menu.path}>{menu.name}</NavLink>
                  </li>
                ))}
                <li className="text-lg mb-1  text-neutral-900 dark:text-gray-200 dark:hover:text-gray-200">
                  <NavLink to="/cart">My Cart</NavLink>
                </li>
              </ul>
            </div>
            <div>
              {user ? (
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={1}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full bg-white dark:bg-gray-800">
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
                    className="mt-3 z-[99] shadow menu menu-sm dropdown-content bg-base-100 rounded-box p-5 min-w-[220px] dark:bg-slate-800"
                  >
                    <label className="avatar text-center mx-auto">
                      <div className="w-16 rounded-full bg-white dark:bg-gray-800">
                        <img
                          src={
                            user?.photoURL
                              ? user.photoURL
                              : "https://i.ibb.co/wYyhNfG/icons8-male-user-100.png"
                          }
                        />
                      </div>
                    </label>
                    <h2 className="mt-2  text-neutral-900 dark:text-gray-200 font-medium text-lg text-center">
                      {user?.displayName}
                    </h2>
                    <h2 className="mb-4  text-neutral-900 dark:text-gray-200 font-medium text-sm text-center">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
