import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/slice";
import { Navigate, useLocation } from "react-router-dom";

function PublicRoute({ children }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();

  if (!isLoggedIn) {
    return children;
  }
  return <Navigate to={location.state?.from || "/"} />;
}

export default PublicRoute;
