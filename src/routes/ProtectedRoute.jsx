
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ isAllowed }) => {
  return isAllowed ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;