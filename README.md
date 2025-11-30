
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

## Backend Setup (LibraryAPI)

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

## Frontend Setup (React + TypeScript)

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


