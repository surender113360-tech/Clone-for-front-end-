import { useEffect, useState } from 'react';
import api from '../services/api';
import PageTitle from '../components/PageTitle';

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState('');

  async function loadEmployees() {
    try {
      const response = await api.get('/hr/employees');
      setEmployees(response.data);
      setError('');
    } catch {
      setError('Unable to load employees. Confirm the HR API is available.');
    }
  }

  useEffect(() => { loadEmployees(); }, []);

  return (
    <>
      <PageTitle title="Employees" sub="View and manage company employees" />
      {error && <p className="error">{error}</p>}
      <div className="table-wrap">
        <table>
          <thead><tr><th>Employee code</th><th>Name</th><th>Email</th><th>Department</th></tr></thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.employee_code}</td>
                <td>{employee.full_name}</td>
                <td>{employee.email}</td>
                <td>{employee.department_name || '-'}</td>
              </tr>
            ))}
            {employees.length === 0 && <tr><td colSpan="4">No employee records found.</td></tr>}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Employees;
