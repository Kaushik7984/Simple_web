import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container home">
      <h1>Welcome to the Homepage</h1> <br />
      <h2>Login first if you want to see Dashboard content</h2>
      <Link to="/Login">Login</Link>
    </div>
  );
}

export default Home;
