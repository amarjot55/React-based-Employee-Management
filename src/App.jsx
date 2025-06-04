import React, { useContext, useState, useEffect } from 'react'
import Login from './components/Auths/login.jsx'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard.jsx'
import AdminDashboard from './components/Dashboard/AdminDashboard.jsx'
import { AuthContext } from './context/AuthProvider.jsx'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'

const AppContent = () => {
  const [user, setUser] = useState(null)
  const [employeeEmail, setEmployeeEmail] = useState(null)
  const [userData] = useContext(AuthContext)
  const navigate = useNavigate()
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    // Initialize admin credentials if not present
    if (!localStorage.getItem('admin')) {
      localStorage.setItem('admin', JSON.stringify([
        {
          id: 1,
          first_name: 'Admin',
          email: 'admin@me.com',
          password: '123'
        }
      ]));
    }
    // Restore session
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      if (userData.role === 'employee') setEmployeeEmail(userData.employeeEmail);
    }
  }, []);

  const handleTaskCreated = () => setRefresh(r => !r);

  const handleLogin = (email, password) => {
    const admins = JSON.parse(localStorage.getItem('admin')) || [];
    const adminUser = admins.find(a => a.email === email && a.password === password);

    if (adminUser) {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
      navigate('/admin');
      return;
    } else if (userData && userData.employees) {
      const employee = userData.employees.find(e => e.email === email && e.password === password);
      if (employee) {
        setUser('employee');
        setEmployeeEmail(employee.email);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', employeeEmail: employee.email }));
        navigate('/employee');
        return;
      }
    }
    alert('Invalid credentials');
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setUser(null);
    setEmployeeEmail(null);
    navigate('/');
  };

  return (
    <Routes>
      <Route path="/" element={<Login handleLogin={handleLogin} />} />
      <Route path="/admin" element={<AdminDashboard handleLogout={handleLogout} refresh={refresh} onTaskCreated={handleTaskCreated} />} />
      <Route path="/employee" element={<EmployeeDashboard employeeEmail={employeeEmail} handleLogout={handleLogout} refresh={refresh} />} />
    </Routes>
  )
}

const App = () => (
  <Router>
    <AppContent />
  </Router>
)

export default App