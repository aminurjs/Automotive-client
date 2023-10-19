import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div>
        <div className="text-center mt-40 mb-80">
          <span className="loading loading-spinner text-primary loading-lg"></span>
        </div>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location?.pathname} to={"/login"}></Navigate>;
};

PrivateRoutes.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoutes;
