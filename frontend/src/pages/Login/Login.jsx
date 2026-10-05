import { useState } from "react";
import { login } from "../../utils/api";
import "./Login.css";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    if (isSubmitting) return;

    setError("");
    setSuccess("");
    setIsSubmitting(true);

    try {
      const loginResult = await login({
        email: email.trim(),
        password,
      });

      onLogin(loginResult);
      setPassword("");
      setSuccess(`Welcome back, ${loginResult.user.name}.`);
    } catch (error) {
      setError(error.message || "Unable to log in.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="login">
      <h1>Log in to Luma</h1>
      <p>Welcome back. Continue exploring Montenegro.</p>

      <form className="login__form" onSubmit={handleSubmit}>
        <label className="login__label">
          Email
          <input
            className="login__input"
            type="email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            disabled={isSubmitting}
          />
        </label>

        <label className="login__label">
          Password
          <input
            className="login__input"
            type="password"
            name="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            disabled={isSubmitting}
          />
        </label>

        {error && (
          <p className="login__error" role="alert">
            {error}
          </p>
        )}

        {success && (
          <p className="login__success" role="status">
            {success}
          </p>
        )}

        <button className="login__submit" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Logging in…" : "Log in"}
        </button>
      </form>
    </main>
  );
}

export default Login;
