import { Book } from "../types/Book";

const API_BASE_URL = "http://localhost:5247/api"; 

async function handleResponse<T>(res: Response): Promise<T> {
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || res.statusText);
  }
  return res.json() as Promise<T>;
}

export async function getBooks(): Promise<Book[]> {
  const res = await fetch(`${API_BASE_URL}/books`);
  return handleResponse<Book[]>(res);
}

export async function getBook(id: number): Promise<Book> {
  const res = await fetch(`${API_BASE_URL}/books/${id}`);
  return handleResponse<Book>(res);
}

export async function createBook(data: Omit<Book, "id">): Promise<Book> {
  const res = await fetch(`${API_BASE_URL}/books`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return handleResponse<Book>(res);
}

export async function updateBook(id: number, data: Omit<Book, "id">): Promise<void> {
  const res = await fetch(`${API_BASE_URL}/books/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, ...data }),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || res.statusText);
  }
}

export async function deleteBook(id: number): Promise<void> {
  const res = await fetch(`${API_BASE_URL}/books/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || res.statusText);
  }
}
