
import { useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Dashboard from "./pages/Dashboard";
import { useAuth } from "./context/AuthContext";
import "./App.css";
import heroImage from "./assets/cafeBackground.jpg";
function AuthPage() {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);

  const handleSwitch = () => {
    setIsSignup((previous) => !previous);
  };

  return (
    <main className={`auth-page ${isSignup ? "signup-mode" : ""}`}>
      <div className="auth-shell">
        <section className="auth-image-panel">
          <img src={heroImage} alt="Cafe atmosphere" />

          <div className="image-overlay">
            <p className="image-eyebrow">WELCOME TO CAFEAUTH</p>

            <h2>
              {isSignup
                ? "Your journey begins here."
                : "A little coffee, a lot of comfort."}
            </h2>

            <p>
              {isSignup
                ? "Create your account and enjoy your personal space."
                : "Take a moment for yourself. Your space is waiting."}
            </p>
          </div>
        </section>

        <section className="auth-form-panel">
          <div
            className="auth-content"
            key={isSignup ? "signup-form" : "login-form"}
          >
            {isSignup ? (
              <Signup onSwitch={handleSwitch} />
            ) : (
              <Login
                onSwitch={handleSwitch}
                onForgotPassword={() => navigate("/forgot-password")}
              />
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

function ForgotPasswordPage() {
  const navigate = useNavigate();

  return <ForgotPassword onBack={() => navigate("/")} />;
}

function App() {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="loading-screen">Loading CafeAuth...</div>;
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          user ? <Navigate to="/dashboard" replace /> : <AuthPage />
        }
      />

      <Route
        path="/signup"
        element={
          user ? <Navigate to="/dashboard" replace /> : <Navigate to="/" replace />
        }
      />

      <Route
        path="/forgot-password"
        element={<ForgotPasswordPage />}
      />

      <Route
        path="/reset-password/:token"
        element={<ResetPassword />}
      />

      <Route
        path="/dashboard"
        element={
          user ? <Dashboard /> : <Navigate to="/" replace />
        }
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
