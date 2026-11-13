import PageTitle from '../components/PageTitle';

function EmployeeDashboard() {
  return (
    <>
      <PageTitle title="My Dashboard" sub="Your work information in one place" />
      <div className="welcome-card">
        <h2>Welcome!</h2>
        <p>Use the menu to view your profile, attendance, leave requests and payroll details.</p>
      </div>
    </>
  );
}

export default EmployeeDashboard;
