import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import swal from "sweetalert";

const Register = () => {
  const { createUser, googleLogin, updateUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [passError, setPassError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const image = form.get("image");
    setPassError("");

    if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/.test(password)) {
      setPassError(
        " Password should have at least  6 characters including one uppercase letter, and one special character!"
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateUser(name, image).then(() => {
          // Profile updated!
          swal("Good job!", "Successfully Registered!", "success");
          navigate("/");
        });
      })
      .catch((err) => {
        console.error(err);
        setPassError(err.message);
      });
  };

  const handleGoogleLogin = () => {
    setPassError("");
    googleLogin()
      .then((result) => {
        console.log(result.user);
        swal("Good job!", "Successfully Logged in!", "success");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="bg-[url(https://i.ibb.co/smFhVQh/ning-31-min.jpg)] bg-cover">
      <div className="max-w-7xl mx-auto p-10">
        <div className="bg-white rounded shadow p-10 flex items-center">
          <div className="w-1/2 hidden md:block pr-10">
            <h2 className="text-3xl text-blue-1 font-semibold mb-5 border-l-8 border-yellow-1 pl-3">
              Welcome to Automotive
            </h2>
            <p className=" text-gray-600 font-medium text-justify max-w-3xl mx-auto">
              Welcome to Automotive - where automotive passion meets excellence.
              Browse a curated selection of top-tier vehicles, backed by our
              commitment to quality and unparalleled customer service. Drive
              away with confidence and style.
            </p>
          </div>
          <div className=" w-full md:w-1/2 md:pl-10 md:border-l border-gray-300">
            <h1 className="text-2xl text-blue-1 font-semibold text-center mb-2">
              Register for free!
            </h1>
            <p className="text-center text-sm text-gray-600 mb-3">
              Already have an account?{"  "}
              <Link className="text-yellow-1" to={"/login"}>
                Go Login!
              </Link>
            </p>
            {passError && (
              <p className="text-sm text-red-500 text-center">{passError}</p>
            )}
            <form onSubmit={handleRegister} className="mt-8">
              <input
                className="px-5 py-2 outline-none border border-gray-200 rounded-md w-full mb-4"
                type="text"
                name="name"
                placeholder="Full Name"
                required
              />
              <input
                className="px-5 py-2 outline-none border border-gray-200 rounded-md w-full mb-4"
                type="text"
                name="image"
                placeholder="Image URL (Optional)"
              />
              <input
                className="px-5 py-2 outline-none border border-gray-200 rounded-md w-full mb-4"
                type="email"
                name="email"
                placeholder="Email Address"
                required
              />
              <div className="relative">
                <input
                  className="px-5 py-2 outline-none border border-gray-200 rounded-md w-full mb-2"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  required
                />
                <span
                  className="text-lg absolute top-3 right-4 text-stone-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
              </div>
              <div className="w-4/5 lg:w-3/5 mx-auto">
                <button className="w-full mt-6 mb-10 bg-gradient-to-r bg-blue-1 rounded-lg p-3 text-white uppercase font-medium duration-300">
                  Sign in with email
                </button>
              </div>
            </form>
            <p className="text-center -mb-3.5">
              <span className="bg-white z-10 inline-block px-2">Or login</span>
            </p>
            <div className="w-full h-[1px] bg-stone-300"></div>
            <div className="text-center mt-8 w-4/5 lg:w-3/5 mx-auto">
              <button
                onClick={handleGoogleLogin}
                className="block w-full p-2 border-2 border-blue-1 font-medium rounded-lg mb-5"
              >
                <FcGoogle className="inline text-2xl mr-2"></FcGoogle>
                Continue with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
