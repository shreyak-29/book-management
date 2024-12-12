import { useState } from 'react';
import { signup } from '../services/auth';
import { useNavigate, Link } from 'react-router-dom'; // Import Link

const Signup = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {data} = await signup(formData);
      localStorage.setItem('token', data.token);
      navigate('/');
    } catch (err) {
      console.error(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form className="w-1/3 bg-gray-100 p-4 rounded" onSubmit={handleSubmit}>
        <h2 className="text-2xl mb-4">Signup</h2>
        <input
          type="text"
          placeholder="Username"
          className="w-full mb-4 p-2 border rounded"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        />
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
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">SignUp</button>

        {/* Link to Login */}
        <p className="mt-4 text-center">
          Already have an account? 
          <Link to="/login" className="text-blue-500 hover:underline ml-1">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
