import { useState } from "react";
import { signup } from "../../utils/api";
import "./Signup.css";

function Signup() {
  const [name, setName] = useState("");
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

    if (name.trim().length < 2) {
      setError("Name must contain at least 2 characters.");
      return;
    }

    setIsSubmitting(true);

    try {
      await signup({
        name: name.trim(),
        email: email.trim(),
        password,
      });

      setPassword("");
      setSuccess("Your Luma account is created.");
    } catch (error) {
      setError(error.message || "Unable to create your account.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="signup">
      <h1>Create your Luma account</h1>
      <p>Plan your stay and discover Montenegro with Luma.</p>

      <form className="signup__form" onSubmit={handleSubmit}>
        <label className="signup__label">
          Name
          <input
            className="signup__input"
            type="text"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            minLength={2}
            maxLength={50}
            required
            disabled={isSubmitting}
          />
        </label>

        <label className="signup__label">
          Email
          <input
            className="signup__input"
            type="email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            disabled={isSubmitting}
          />
        </label>

        <label className="signup__label">
          Password
          <input
            className="signup__input"
            type="password"
            name="password"
            autoComplete="new-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            minLength={8}
            aria-describedby="signup-password-help"
            required
            disabled={isSubmitting}
          />
        </label>

        <p id="signup-password-help">Use at least 8 characters.</p>

        {error && (
          <p className="signup__error" role="alert">
            {error}
          </p>
        )}

        {success && (
          <p className="signup__success" role="status">
            {success}
          </p>
        )}

        <button
          className="signup__submit"
          type="submit"
          disabled={isSubmitting || Boolean(success)}
        >
          {isSubmitting ? "Creating account…" : "Create account"}
        </button>
      </form>
    </main>
  );
}

export default Signup;
