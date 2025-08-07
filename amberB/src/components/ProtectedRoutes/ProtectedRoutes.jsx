import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children, isLoggedIn, isAuthChecked }) => {
  if (!isLoggedIn) {
    return <div>Checking if logged in</div>;
  }
  if (!isAuthChecked) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoutes;
