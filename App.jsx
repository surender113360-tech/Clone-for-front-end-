import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Shell from './components/Shell';
import Login from './pages/Login';
import HRDashboard from './pages/HRDashboard';
import EmployeeDashboard from './pages/EmployeeDashboard';
import Employees from './pages/Employees';
import Departments from './pages/Departments';
import Attendance from './pages/Attendance';
import Leaves from './pages/Leaves';
import Payroll from './pages/Payroll';
import Announcements from './pages/Announcements';
import Profile from './pages/Profile';

function App() {
  const { role } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/hr/dashboard" element={
        <ProtectedRoute allowedRole="hr"><Shell role="hr"><HRDashboard /></Shell></ProtectedRoute>
      } />
      <Route path="/employee/dashboard" element={
        <ProtectedRoute allowedRole="employee"><Shell role="employee"><EmployeeDashboard /></Shell></ProtectedRoute>
      } />
      <Route path="/employees" element={
        <ProtectedRoute allowedRole="hr"><Shell role="hr"><Employees /></Shell></ProtectedRoute>
      } />
      <Route path="/departments" element={
        <ProtectedRoute allowedRole="hr"><Shell role="hr"><Departments /></Shell></ProtectedRoute>
      } />
      <Route path="/attendance" element={
        <ProtectedRoute><Shell role={role}><Attendance /></Shell></ProtectedRoute>
      } />
      <Route path="/leaves" element={
        <ProtectedRoute><Shell role={role}><Leaves /></Shell></ProtectedRoute>
      } />
      <Route path="/payroll" element={
        <ProtectedRoute><Shell role={role}><Payroll /></Shell></ProtectedRoute>
      } />
      <Route path="/announcements" element={
        <ProtectedRoute><Shell role={role}><Announcements /></Shell></ProtectedRoute>
      } />
      <Route path="/profile" element={
        <ProtectedRoute><Shell role={role}><Profile /></Shell></ProtectedRoute>
      } />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
