import { useEffect, useState } from 'react';
import api from '../services/api';
import PageTitle from '../components/PageTitle';

function HRDashboard() {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    api.get('/hr/dashboard')
      .then((response) => setStats(response.data))
      .catch(() => setError('Could not load dashboard. Check that the backend is running.'));
  }, []);

  return (
    <>
      <PageTitle title="HR Overview" sub="Company activity at a glance" />
      {error && <p className="error">{error}</p>}
      {!stats ? <p>Loading dashboard...</p> : (
        <div className="stats-grid">
          <article className="stat-card"><span>Total employees</span><strong>{stats.total_employees ?? 0}</strong></article>
          <article className="stat-card"><span>Departments</span><strong>{stats.total_departments ?? 0}</strong></article>
          <article className="stat-card"><span>Pending leaves</span><strong>{stats.pending_leaves ?? 0}</strong></article>
          <article className="stat-card"><span>Present today</span><strong>{stats.present_today ?? 0}</strong></article>
        </div>
      )}
    </>
  );
}

export default HRDashboard;
