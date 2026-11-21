# ManageHub — Full-Stack CRUD Application

ManageHub is a React + Vite user-management dashboard backed by an Express REST API and MongoDB.

## Tech stack

- Frontend: React 19, Vite, Lucide React
- Backend: Node.js, Express
- Database: MongoDB with Mongoose
- API communication: native Fetch API

## Requirements

- Node.js 20.19+ (or 22.12+)
- MongoDB Community Server running locally, or a MongoDB Atlas connection string

## 1. Configure the database

Open a terminal in `ManageHub/server` and install backend dependencies:

```bash
npm install
```

Copy `.env.example` to `.env` and configure `MONGODB_URI`:

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/managehub
CLIENT_ORIGIN=http://localhost:5173
```

For MongoDB Atlas, replace the local URI with your Atlas connection string. Do not commit `.env`.

## 2. Start the backend

From `ManageHub/server`:

```bash
npm run dev
```

The API starts at `http://localhost:5000`. Check `http://localhost:5000/api/health`.

## 3. Start the frontend

Open a second terminal in the project root (`ManageHub`):

```bash
npm install
npm run dev
```

Open the Vite URL shown in the terminal (normally `http://localhost:5173`).

Optional: create a root `.env` file to change the API base URL:

```env
VITE_API_URL=http://localhost:5000/api
```

## REST API

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/users` | Get all users |
| GET | `/api/users/:id` | Get one user |
| POST | `/api/users` | Create a user |
| PUT | `/api/users/:id` | Update a user |
| DELETE | `/api/users/:id` | Delete a user |
| GET | `/api/health` | API health check |

User fields: `name`, `email`, `role`, `status`. Email addresses are normalized to lowercase and must be unique.

## Notes

- User records are now stored in MongoDB, not browser LocalStorage.
- The existing ManageHub interface and its dashboard components are retained.
- The backend returns MongoDB IDs as `id` so the current React components can use them.
- The frontend displays API errors through the existing notification message area.
