import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookPlus, Save } from 'lucide-react';
import API from '../services/api';

const AddBook = () => {
  const [formData, setFormData] = useState({ title: '', author: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/books', formData);
      navigate('/books');
    } catch (err) {
      console.error('Error adding book:', err.response?.data?.message || err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <div className="flex items-center justify-center mb-6">
          <BookPlus className="mr-3 text-blue-600" size={32} />
          <h1 className="text-2xl font-bold text-gray-800">Add Book</h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
              Book Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="Enter book title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
              required
            />
          </div>
          <div>
            <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-2">
              Author Name
            </label>
            <input
              type="text"
              id="author"
              placeholder="Enter author name"
              value={formData.author}
              onChange={(e) => setFormData({ ...formData, author: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
              required
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
          >
            <Save className="mr-2" size={20} />
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;