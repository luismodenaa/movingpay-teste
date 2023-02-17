import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/Auth";
import Loading from "../Loading";

const ProtectRoutes = () => {
  const { user, loadingUser } = useContext(AuthContext);
  const location = useLocation();

  if (loadingUser) {
    return <Loading border="4" size="20" />;
  }

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
};

export default ProtectRoutes;
