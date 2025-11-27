import { FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBook, updateBook } from "../services/api";

function EditBook() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        if (!id) return;
        const book = await getBook(Number(id));
        setTitle(book.title);
        setAuthor(book.author);
        setDescription(book.description);
      } catch (err: any) {
        setError(err.message || "Failed to load book");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [id]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!id) return;

    if (!title.trim() || !author.trim()) {
      setError("Title and Author are required.");
      return;
    }

    try {
      await updateBook(Number(id), { title, author, description });
      navigate("/");
    } catch (err: any) {
      setError(err.message || "Failed to update book");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
  <div className="form-card">
    <h2 className="page-title">Add Book</h2>
    {error && <div className="alert-error">{error}</div>}

    <form onSubmit={handleSubmit} className="form-grid">
      <div className="form-group">
        <label className="form-label">Title</label>
        <input
          className="form-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label className="form-label">Author</label>
        <input
          className="form-input"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label className="form-label">Description</label>
        <textarea
          className="form-textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="form-actions">
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </div>
    </form>
  </div>
);

}

export default EditBook;
