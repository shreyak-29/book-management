import { Link } from 'react-router-dom'; // Import Link for navigation

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-8">Welcome to BookVault</h1>
      <p className="text-center mt-4 text-lg">
        Manage your book collection with ease. 
        <Link to="/login" className="text-blue-500 hover:underline mx-1">Login</Link> 
        or 
        <Link to="/signup" className="text-blue-500 hover:underline mx-1">Signup</Link> 
        to get started.
      </p>
    </div>
  );
};

export default Home;