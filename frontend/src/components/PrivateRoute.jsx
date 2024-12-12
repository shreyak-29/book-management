import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('token'); // Get token from localStorage
    return token ? children : <Navigate to="/" replace />; 
};

export default PrivateRoute;

