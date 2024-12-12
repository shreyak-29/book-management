import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import API from '../services/api';

const EditBook = () => {
  const [formData, setFormData] = useState({ title: '', author: '' });
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchBook = async () => {
    try {
      const { data } = await API.get(`/books/${id}`);
      setFormData({ title: data.title, author: data.author });
    } catch (err) {
      console.error('Error fetching book:', err.response?.data?.message || err.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.put(`/books/${id}`, formData);
      navigate('/books');
    } catch (err) {
      console.error('Error updating book:', err.response?.data?.message || err.message);
    }
  };

  useEffect(() => {
    fetchBook();
  }, [id]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Edit Book</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full mb-4 p-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={formData.author}
          onChange={(e) => setFormData({ ...formData, author: e.target.value })}
          className="w-full mb-4 p-2 border rounded"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Update Book
        </button>
      </form>
    </div>
  );
};

export default EditBook;
