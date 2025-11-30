
# 📚 Library Management System

A full‑stack CRUD application built for the **Software Engineering Internship Assignment**, featuring:

- **.NET 8 Web API** backend  
- **SQLite + Entity Framework Core**  
- **React + TypeScript** frontend  
- Complete **CRUD** functionality for managing books  
- Clean UI with custom CSS  

---

## 📁 Project Structure

```
/LibraryManagementSystem
│
├── LibraryAPI            → Backend (.NET Web API)
├── library-frontend      → Frontend (React + TypeScript)
│
├── README.md             → Documentation
└── Library_Report.pdf    → Complete project report
```

---

# 🚀 Getting Started

## 1️⃣ Backend Setup (LibraryAPI)

### Requirements
- .NET SDK 8+
- SQLite (included with EF Core)
- VS Code / Visual Studio / Rider

### Install dependencies
```bash
cd LibraryAPI
dotnet restore
```

### Apply migrations and create the database
```bash
dotnet ef migrations add InitialCreate
dotnet ef database update
```

### Run the API
```bash
dotnet run
```

API will run at:

👉 **http://localhost:5247**

### Swagger Documentation
Open:

👉 **http://localhost:5247/swagger**

---

## 2️⃣ Frontend Setup (React + TypeScript)

### Requirements
- Node.js 18+
- npm

### Install dependencies
```bash
cd library-frontend
npm install
```

### Start the React app
```bash
npm start
```

Frontend runs at:

👉 **http://localhost:3000**

---

# 🔗 API Endpoints

| Method | Endpoint            | Description           |
|--------|---------------------|-----------------------|
| GET    | /api/Books          | Get all books         |
| GET    | /api/Books/{id}     | Get book by ID        |
| POST   | /api/Books          | Create new book       |
| PUT    | /api/Books/{id}     | Update existing book  |
| DELETE | /api/Books/{id}     | Delete a book         |

---

# 🗄 SQLite Database

Table: **Books**

| Column       | Type      |
|--------------|-----------|
| Id           | INTEGER PRIMARY KEY AUTOINCREMENT |
| Title        | TEXT      |
| Author       | TEXT      |
| Description  | TEXT      |

---

# 🎨 Frontend Features

- React + TypeScript  
- React Router navigation  
- Custom CSS for UI  
- CRUD pages: List, Add, Edit  
- API service (`api.ts`)  
- Reusable components  

---

# 🧪 How to Test

1. Start backend (`dotnet run`)  
2. Start frontend (`npm start`)  
3. Add, edit, delete books  
4. Verify database updates  
5. Test API using Swagger  

---

# 📝 Report

See **Library_Report.pdf** for a full technical write‑up:
- Architecture diagrams  
- Backend + Frontend explanation  
- Database schema  
- API documentation  
- Challenges  
- Conclusion  

---

# 📦 Submission

Upload the full project to GitHub including:

- LibraryAPI  
- library-frontend  
- README.md  
- Library_Report.pdf  

Submit the GitHub link to Evaluators.

---

# 🎉 Done!

This project meets **all the requirements** of the internship assignment.
