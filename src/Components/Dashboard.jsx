import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  const data = ['Data One', 'Data Two', 'Data Three'];

  // const handleLogout = () => {
  //   sessionStorage.removeItem("user");
  //   console.log('okkkk')

  // };

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    navigate('/login');
  };



  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {data.map((items, index) => (
          <li key={index}>{items}</li>
        ))}
      </ul>
      <button onClick={handleLogout}>Logout</button>


    </div>
  );
}

export default Dashboard;
