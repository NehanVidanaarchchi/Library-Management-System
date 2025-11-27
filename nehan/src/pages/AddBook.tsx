import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createBook } from "../services/api";

function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!title.trim() || !author.trim()) {
      setError("Title and Author are required.");
      return;
    }

    try {
      await createBook({ title, author, description });
      navigate("/");
    } catch (err: any) {
      setError(err.message || "Failed to create book");
    }
  };

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

export default AddBook;
