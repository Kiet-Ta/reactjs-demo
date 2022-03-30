import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RegisterDataService from '../services/RegisterService';

const Register = () => {
  const initialRegisterState = {
    id: null,
    name: '',
    email: '',
    password: '',
  };

  const [register, setRegister] = useState(initialRegisterState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRegister({ ...register, [name]: value });
  };

  const saveData = () => {
    let data = {
      name: register.name,
      email: register.email,
      password: register.password,
    };

    RegisterDataService.register(data)
      .then((response) => {
        setRegister({
          id: response.data.id,
          name: response.data.name,
          email: response.data.email,
          password: response.data.password,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <Link to={'/posts/add'} className="nav-link">
            <button className="btn btn-success">Add Post</button>
          </Link>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={register.name}
              onChange={handleInputChange}
              name="name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control"
              id="email"
              required
              value={register.email}
              onChange={handleInputChange}
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
              value={register.password}
              onChange={handleInputChange}
              name="password"
            />
          </div>
          <button onClick={saveData} className="btn btn-success">
            Register
          </button>
        </div>
      )}
    </div>
  );
};

export default Register;
