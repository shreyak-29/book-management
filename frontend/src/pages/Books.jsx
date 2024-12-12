import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle, Edit, Trash2, BookOpen } from 'lucide-react';
import API from '../services/api';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      const { data } = await API.get('/books');
      setBooks(data);
      setError(null);
    } catch (err) {
      console.error('Error fetching books:', err.response?.data?.message || err.message);
      setError('Failed to fetch books. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const deleteBook = async (id) => {
    try {
      await API.delete(`/books/${id}`);
      setBooks(books.filter((book) => book._id !== id));
    } catch (err) {
      console.error('Error deleting book:', err.response?.data?.message || err.message);
      setError('Failed to delete book. Please try again.');
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full py-10">
        <div className="animate-spin">
          <BookOpen size={48} className="text-blue-500" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        {error}
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6 bg-gray-50 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0 flex items-center">
          <BookOpen className="mr-3 text-blue-600" /> Book Collection
        </h1>
        <Link 
          to="/books/add" 
          className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-300 shadow-md"
        >
          <PlusCircle className="mr-2" /> Add New Book
        </Link>
      </div>

      {books.length === 0 ? (
        <div className="text-center py-10 bg-white rounded-lg shadow-md">
          <p className="text-gray-500 text-xl">No books found. Add your first book!</p>
        </div>
      ) : (
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="w-full">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {books.map((book) => (
                <tr key={book._id} className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{book.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{book.author}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <div className="flex justify-center space-x-2">
                      <Link
                        to={`/books/edit/${book._id}`}
                        className="text-green-600 hover:text-green-800 transition-colors"
                      >
                        <Edit size={20} />
                      </Link>
                      <button
                        onClick={() => deleteBook(book._id)}
                        className="text-red-600 hover:text-red-800 transition-colors"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Books;