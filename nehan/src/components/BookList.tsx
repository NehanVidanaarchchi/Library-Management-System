import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Book } from "../types/Book";
import { getBooks, deleteBook } from "../services/api";

function BookList() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadBooks = async () => {
    try {
      setLoading(true);
      const data = await getBooks();
      setBooks(data);
    } catch (err: any) {
      setError(err.message || "Failed to load books");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBooks();
  }, []);

  const handleDelete = async (id: number) => {
    if (!window.confirm("Delete this book?")) return;
    try {
      await deleteBook(id);
      setBooks((prev) => prev.filter((b) => b.id !== id));
    } catch (err: any) {
      alert(err.message || "Failed to delete");
    }
  };

  if (loading) return <p>Loading books...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
  <div className="page">
    <h2 className="page-title">Books</h2>
    <p className="page-subtitle">Manage all books in your library.</p>

    {books.length === 0 ? (
      <p>
        No books yet.{" "}
        <Link to="/add" className="btn btn-primary">
          Add one
        </Link>
      </p>
    ) : (
      <table className="book-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Author</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((b) => (
            <tr key={b.id}>
              <td>{b.id}</td>
              <td>{b.title}</td>
              <td>{b.author}</td>
              <td>{b.description}</td>
              <td>
                <div className="book-actions">
                  <Link to={`/edit/${b.id}`} className="btn btn-secondary">
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(b.id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
);

}

export default BookList;
