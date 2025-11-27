import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BookList from "./components/BookList";
import AddBook from "./pages/AddBook";
import EditBook from "./pages/EditBook";

function App() {
  return (
    <div className="app-root">
      <BrowserRouter>
        <header className="app-header">
          <div className="app-title">Library Management System</div>
          <nav className="app-nav">
            <Link to="/">Books</Link>
            <Link to="/add">Add Book</Link>
          </nav>
        </header>

        <main className="app-main">
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/add" element={<AddBook />} />
            <Route path="/edit/:id" element={<EditBook />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
