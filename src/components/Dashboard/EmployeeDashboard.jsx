import React, { useEffect, useState } from 'react'
import Headers from '../../others/Headers'
import TaskListNumbers from '../../others/TaskListNumbers'
import TaskList from '../../tasklist/TaskList'

const EmployeeDashboard = () => {
  const [employee, setEmployee] = useState(null);
  const employeeEmail = JSON.parse(localStorage.getItem('loggedInUser'))?.employeeEmail;
 
  useEffect(() => {
    // Fetch the latest employee data from localStorage
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    const emp = employees.find(e => e.email === employeeEmail);
    setEmployee(emp);
  }, [employeeEmail]);

  if (!employeeEmail) return <div className="text-white">Employee email not found</div>;
  if (!employee) return <div className="text-white">Employee not found</div>;

  function deleteTask(employeeEmail, taskTitle) {
  const employees = JSON.parse(localStorage.getItem('employees')) || [];
  const emp = employees.find(e => e.email === employeeEmail);
  if (!emp) {
    alert("Employee not found");
    return;
  }
  emp.tasks = emp.tasks.filter(task => task.task_title !== taskTitle);
  localStorage.setItem('employees', JSON.stringify(employees));
  // Optionally: trigger a UI refresh here
}

  return (
    <div className='p-10 bg-rock-600 h-screen'>
      <Headers data={employee} />
      <TaskListNumbers data={employee} />
      <TaskList data={employee} />
    </div>
  )
}

export default EmployeeDashboard