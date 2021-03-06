import React, { useState, useRef, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/AuthService';
import { UserContext } from '../App';

const Login = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    AuthService.login(email, password)
      .then((response) => {
        setCurrentUser(response.user);
        navigate('/');
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="col-md-12">
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          className="form-control"
          id="email"
          required
          value={email}
          onChange={onChangeEmail}
          name="email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          required
          value={password}
          onChange={onChangePassword}
          name="password"
        />
      </div>
      <button onClick={handleLogin} className="btn btn-success">
        Log In
      </button>
    </div>
  );
};
export default Login;
