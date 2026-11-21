
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogout = async () => {
    if (loading) return;

    setLoading(true);
    setError("");

    try {
      await logout();
      navigate("/", { replace: true });
    } catch (err) {
      setError(err.message || "Unable to logout. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="dashboard">
      <aside className="dashboard-sidebar">
        <h2 className="dashboard-logo">
          CafeAuth<span>.</span>
        </h2>

        <nav>
          <Link to="/dashboard" className="active">
            Dashboard
          </Link>
          <a href="#profile">My Profile</a>
          <a href="#settings">Settings</a>
        </nav>

        <button
          type="button"
          onClick={handleLogout}
          disabled={loading}
        >
          {loading ? "Logging out..." : "Logout"}
        </button>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <p className="form-label">YOUR PERSONAL SPACE</p>
            <h1>Dashboard</h1>
          </div>

          <div className="dashboard-user">
            <span>☕</span>
            <p>{user?.name || "User"}</p>
          </div>
        </header>

        <section className="dashboard-welcome">
          <p>WELCOME BACK</p>
          <h2>Hello, {user?.name || "Coffee Lover"}!</h2>
          <p>Your CafeAuth account is ready. Enjoy your space.</p>
        </section>

        {error && <p className="error-message">{error}</p>}

        <section className="dashboard-cards">
          <article className="dashboard-card">
            <span>👤</span>
            <h3>Account</h3>
            <p>Personal account</p>
          </article>

          <article className="dashboard-card">
            <span>🔒</span>
            <h3>Security</h3>
            <p>Your account is protected</p>
          </article>

          <article className="dashboard-card">
            <span>☕</span>
            <h3>Membership</h3>
            <p>CafeAuth Member</p>
          </article>
        </section>

        <section className="dashboard-profile" id="profile">
          <h2>Profile Information</h2>

          <div>
            <span>Full Name</span>
            <strong>{user?.name || "Not available"}</strong>
          </div>

          <div>
            <span>Email Address</span>
            <strong>{user?.email || "Not available"}</strong>
          </div>

          <div>
            <span>Account Status</span>
            <strong>Active</strong>
          </div>
        </section>

        <section id="settings">
          <h2>Settings</h2>
          <p>Account settings will be available here.</p>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
