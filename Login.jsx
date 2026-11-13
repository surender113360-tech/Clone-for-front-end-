import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import { useAuth } from '../context/AuthContext';

function Login() {
  const [email, setEmail] = useState('hr@demo.com');
  const [password, setPassword] = useState('Hr@12345');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  async function submit(event) {
    event.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await api.post('/auth/login', { email, password });
      const data = response.data;
      login(data.access_token, data.role);
      navigate(data.role === 'hr' ? '/hr/dashboard' : '/employee/dashboard');
    } catch (err) {
      setError(err.response?.data?.detail || 'Login failed. Check backend and credentials.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="login-page">
      <form className="login-card" onSubmit={submit}>
        <h1>PeopleDesk</h1>
        <p className="muted">Employee Management System</p>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        {error && <p className="error">{error}</p>}
        <button className="primary-button" disabled={loading}>
          {loading ? 'Signing in...' : 'Login'}
        </button>
        <small>Demo credentials must match the backend seed data.</small>
      </form>
    </main>
  );
}

export default Login;
