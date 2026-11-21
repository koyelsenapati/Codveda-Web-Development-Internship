
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

function Login({ onSwitch, onForgotPassword }) {
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(formData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-form">
      <p className="form-label">WELCOME BACK</p>
      <h1>Sign in to CafeAuth</h1>
      <p className="form-description">
        Your coffee break starts here.
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          autoComplete="email"
          required
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          autoComplete="current-password"
          required
        />

        <button
          type="button"
          className="forgot-button"
          onClick={onForgotPassword}
        >
          Forgot password?
        </button>

        {error && <p className="error-message">{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>

      <p className="switch-text">
        Don't have an account?{" "}
        <button type="button" onClick={onSwitch}>
          Sign Up
        </button>
      </p>
    </div>
  );
}

export default Login;
