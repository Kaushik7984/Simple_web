import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Login() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, [name]: value
    })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isLogin) {
      console.log('Logging in with', formData);

      // Assume login is always successful for this example:
      localStorage.setItem('userToken', 'yourTokenHere'); // Set token in local storage
      navigate('/dashboard');
    } else {
      console.log('Registering with', formData);
      navigate('/Dashboard');
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }

      // Assume registration is always successful:
      localStorage.setItem('userToken', 'yourTokenHere');

    }


  };

  return (
    <div className="container auth-form">
      <h2>{isLogin ? 'Login' : 'Register'}</h2>

      <form onSubmit={handleSubmit} >

        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          placeholder='Username'
          required
        />
        <input
          type="text"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder='Password'
          required
        />

        {!isLogin && (
          <input
            type="text"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            placeholder='Comfirm Password'
            required
          />
        )}

        <button className='btn' type='submit'>
          {isLogin ? 'Login' : 'Register'}

        </button>

      </form>
      <button className='btn' onClick={() => setIsLogin(!isLogin)}>
        Switch to {isLogin ? 'Register' : 'login'}

      </button>

    </div>
  )

};



export default Login;
