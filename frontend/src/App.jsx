import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Books from './pages/Books';
import AddBook from './pages/AddBook';
import EditBook from './pages/EditBook';
import PrivateRoute from './components/PrivateRoute'; // Import PrivateRoute

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Always show Navbar */}
      <div className="container mx-auto mt-4">
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          
          {/* Private Routes */}
      
          <Route path="/books" element={<PrivateRoute><Books /></PrivateRoute>} />
          <Route path="/books/add" element={<PrivateRoute><AddBook /></PrivateRoute>} />
          <Route path="/books/edit/:id" element={<PrivateRoute><EditBook /></PrivateRoute>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
