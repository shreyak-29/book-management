import { useState } from 'react';
import { login } from '../services/auth';
import { useNavigate, Link } from 'react-router-dom'; // Import Link

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login(formData);
      localStorage.setItem('token', data.token); // Store token in localStorage
      navigate('/'); // Redirect to homepage after successful login
    } catch (err) {
      console.error(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form className="w-1/3 bg-gray-100 p-4 rounded" onSubmit={handleSubmit}>
        <h2 className="text-2xl mb-4">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-2 border rounded"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border rounded"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Login</button>

        {/* Link to Signup */}
        <p className="mt-4 text-center">
          Don't have an account? 
          <Link to="/signup" className="text-blue-500 hover:underline ml-1">Signup</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
