import { Link, useNavigate } from 'react-router-dom';
import { Home, Book, PlusCircle, LogOut } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 p-4 text-white shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center justify-between w-full md:w-auto">
          <h1 className="text-2xl font-bold flex items-center">
            <Book className="mr-2 text-white" />
            BookVault
          </h1>
          <div className="md:hidden">
            <button 
              onClick={handleLogout} 
              className="bg-red-500 hover:bg-red-600 px-3 py-2 rounded-full transition-colors duration-300"
            >
              <LogOut size={20} />
            </button>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link 
            to="/" 
            className="flex items-center hover:text-blue-200 transition-colors duration-300"
          >
            <Home className="mr-2" size={20} /> Home
          </Link>
          <Link 
            to="/books" 
            className="flex items-center hover:text-blue-200 transition-colors duration-300"
          >
            <Book className="mr-2" size={20} /> Books
          </Link>
          <Link 
            to="/books/add" 
            className="flex items-center hover:text-blue-200 transition-colors duration-300"
          >
            <PlusCircle className="mr-2" size={20} /> Add Books
          </Link>
          
          <button 
            onClick={handleLogout} 
            className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg flex items-center transition-colors duration-300"
          >
            <LogOut className="mr-2" size={20} /> Logout
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden w-full mt-4">
          <div className="flex flex-col space-y-3">
            <Link 
              to="/" 
              className="flex items-center justify-center hover:bg-blue-700 p-2 rounded-lg transition-colors duration-300"
            >
              <Home className="mr-2" size={20} /> Home
            </Link>
            <Link 
              to="/books" 
              className="flex items-center justify-center hover:bg-blue-700 p-2 rounded-lg transition-colors duration-300"
            >
              <Book className="mr-2" size={20} /> Books
            </Link>
            <Link 
              to="/books/add" 
              className="flex items-center justify-center hover:bg-blue-700 p-2 rounded-lg transition-colors duration-300"
            >
              <PlusCircle className="mr-2" size={20} /> Add Books
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;