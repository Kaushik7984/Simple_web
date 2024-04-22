import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AboutUs from './Components/AboutUs';
import Dashboard from './Components/Dashboard';
import './App.css';

function App() {
  const isAuthenticated = () => {
    return localStorage.getItem('userToken') ? true : false;
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/login" element={isAuthenticated() ? <Navigate to="/dashboard" /> : <Login/>} /> */}
        {/* <Route path="/dashboard" element={isAuthenticated() ? <Dashboard /> : <Navigate to="/login" />} /> */}
        {/* <Route path="/profile" element={isAuthenticated() ? <Profile /> : <Navigate to="/login" />} /> */}
        <Route path='/aboutus' element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
