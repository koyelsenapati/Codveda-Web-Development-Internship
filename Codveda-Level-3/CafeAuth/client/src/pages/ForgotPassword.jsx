
import { useState } from "react";
import { forgotPassword } from "../services/api";

function ForgotPassword({ onBack }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const response = await forgotPassword(email);
      setSuccess(response.message);
      setEmail("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-form">
      <p className="form-label">ACCOUNT RECOVERY</p>
      <h1>Forgot Password?</h1>
      <p className="form-description">
        Enter your email address and we'll send you a password reset link.
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="recovery-email">Email Address</label>
        <input
          id="recovery-email"
          type="email"
          placeholder="Enter your registered email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          required
        />

        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Reset Link"}
        </button>
      </form>

      <p className="switch-text">
        Remember your password?{" "}
        <button type="button" onClick={onBack}>
          Back to Sign In
        </button>
      </p>
    </div>
  );
}

export default ForgotPassword;
