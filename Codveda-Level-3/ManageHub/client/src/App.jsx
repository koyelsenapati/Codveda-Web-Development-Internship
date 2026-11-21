
import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import DeleteModal from "./components/DeleteModal";
import Dashboard from "./pages/Dashboard";
import UsersPage from "./pages/Users";
import NotFound from "./pages/NotFound";
import { useUsers } from "./hooks/useUsers";
import { validateUser } from "./utils/validation";
import "./styles/global.css";
import "./styles/dashboard.css";
import "./styles/components.css";
import "./App.css";

const emptyForm = {
  name: "",
  email: "",
  role: "Developer",
  status: "Active"
};

function App() {
  const {
    users,
    loading,
    addUser,
    updateUser,
    deleteUser,
    error: apiError
  } = useUsers();

  const [activePage, setActivePage] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [page, setPage] = useState(1);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (activePage === "Dashboard" && window.location.hash === "#add-user") {
      document.getElementById("add-user")?.scrollIntoView({
        behavior: "smooth"
      });
    }
  }, [activePage]);

  function showMessage(text) {
    setMessage(text);
    window.setTimeout(() => setMessage(""), 2500);
  }

  function handleNavigate(pageName) {
    if (pageName === "Add User") {
      setActivePage("Dashboard");
      setForm(emptyForm);
      setEditingId(null);

      window.setTimeout(() => {
        document.getElementById("add-user")?.scrollIntoView({
          behavior: "smooth"
        });
      }, 100);

      return;
    }

    setActivePage(pageName);
    setSearch("");
    setFilter("All");
    setPage(1);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const validation = validateUser(form);

    if (!validation.isValid) {
      showMessage(Object.values(validation.errors)[0]);
      return;
    }

    const normalizedEmail = form.email.trim().toLowerCase();

    const duplicateEmail = users.some(user =>
      user.email.toLowerCase() === normalizedEmail &&
      user._id !== editingId
    );

    if (duplicateEmail) {
      showMessage("This email address is already registered.");
      return;
    }

    const userData = {
      ...form,
      name: form.name.trim(),
      email: normalizedEmail
    };

    try {
      if (editingId !== null) {
        await updateUser(editingId, userData);
        showMessage("User updated successfully.");
      } else {
        await addUser(userData);
        showMessage("New user added successfully.");
      }

      setForm(emptyForm);
      setEditingId(null);
      setPage(1);
    } catch (error) {
      showMessage(error.message);
    }
  }

  function handleEdit(user) {
    setForm({
      name: user.name,
      email: user.email,
      role: user.role,
      status: user.status
    });

    setEditingId(user._id);
    setActivePage("Dashboard");

    window.setTimeout(() => {
      document.getElementById("add-user")?.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }, 100);
  }

  async function handleDelete() {
    if (!deleteTarget) return;

    try {
      await deleteUser(deleteTarget._id);
      setDeleteTarget(null);
      showMessage("User deleted successfully.");
    } catch (error) {
      setDeleteTarget(null);
      showMessage(error.message);
    }
  }

  function handleCancel() {
    setForm(emptyForm);
    setEditingId(null);
  }

  function renderPage() {
    switch (activePage) {
      case "Dashboard":
        return (
          <Dashboard
            users={users}
            form={form}
            setForm={setForm}
            onSubmit={handleSubmit}
            editingId={editingId}
            onCancel={handleCancel}
            onEdit={handleEdit}
            onDelete={user => setDeleteTarget(user)}
            search={search}
            setSearch={value => {
              setSearch(value);
              setPage(1);
            }}
            filter={filter}
            setFilter={value => {
              setFilter(value);
              setPage(1);
            }}
            page={page}
            setPage={setPage}
            message={message || apiError}
            loading={loading}
          />
        );

case "Users":
  return <UsersPage users={users} loading={loading} />;
      case "Settings":
      case "Analytics":
        return <NotFound onBack={() => setActivePage("Dashboard")} />;

      default:
        return <NotFound onBack={() => setActivePage("Dashboard")} />;
    }
  }

  return (
    <div className="dashboard">
      <Sidebar
        activePage={activePage}
        onNavigate={handleNavigate}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <main className="main-content">
        <Navbar
          search={search}
          setSearch={value => {
            setSearch(value);
            setPage(1);
            setActivePage("Dashboard");
          }}
          onMenuClick={() => setSidebarOpen(true)}
        />

        {renderPage()}

        <footer className="page-footer">
          Made for better teamwork <span>✦</span> ManageHub Admin
        </footer>
      </main>

      <DeleteModal
        user={deleteTarget}
        onConfirm={handleDelete}
        onCancel={() => setDeleteTarget(null)}
      />
    </div>
  );
}

export default App;
