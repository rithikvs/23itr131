import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { loginUser, getCurrentUser } from '../lib/auth.js';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const user = getCurrentUser();

  if (user) {
    return <Navigate to="/" replace />;
  }

  const submit = (event) => {
    event.preventDefault();
    const success = loginUser(email.trim(), password.trim());
    if (success) {
      navigate('/');
    } else {
      setError('Login failed. Please enter a valid email and password.');
    }
  };

  return (
    <main className="page-shell auth-page">
      <section className="card auth-card">
        <h1>Login</h1>
        <p className="muted">Use any valid email and password to continue.</p>
        <form className="form-grid" onSubmit={submit}>
          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button className="primary-btn" type="submit">
            Login
          </button>
        </form>
        {error && <div className="error-box">{error}</div>}
      </section>
    </main>
  );
}
