import { NavLink, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard, Users, Building2, CalendarCheck,
  ClipboardList, Wallet, Megaphone, LogOut, User
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

function Shell({ role, children }) {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const hrLinks = [
    ['Overview', '/hr/dashboard', LayoutDashboard],
    ['Employees', '/employees', Users],
    ['Departments', '/departments', Building2],
    ['Attendance', '/attendance', CalendarCheck],
    ['Leaves', '/leaves', ClipboardList],
    ['Payroll', '/payroll', Wallet],
    ['Announcements', '/announcements', Megaphone]
  ];

  const employeeLinks = [
    ['Dashboard', '/employee/dashboard', LayoutDashboard],
    ['My Profile', '/profile', User],
    ['Attendance', '/attendance', CalendarCheck],
    ['My Leaves', '/leaves', ClipboardList],
    ['My Salary', '/payroll', Wallet],
    ['Announcements', '/announcements', Megaphone]
  ];

  const links = role === 'hr' ? hrLinks : employeeLinks;

  function handleLogout() {
    logout();
    navigate('/');
  }

  return (
    <div className="app-layout">
      <aside className="sidebar">
        <h2 className="brand">PeopleDesk</h2>
        <p className="sidebar-label">{role === 'hr' ? 'HR PORTAL' : 'EMPLOYEE PORTAL'}</p>
        <nav className="nav-menu">
          {links.map(([name, path, Icon]) => (
            <NavLink to={path} className="nav-link" key={path}>
              <Icon size={18} />
              <span>{name}</span>
            </NavLink>
          ))}
        </nav>
        <button className="logout-button" onClick={handleLogout}>
          <LogOut size={18} /> Logout
        </button>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <span>{role === 'hr' ? 'Human Resources' : 'Employee Workspace'}</span>
          <span className="role-pill">{role}</span>
        </header>
        <section className="page-content">{children}</section>
      </main>
    </div>
  );
}

export default Shell;
