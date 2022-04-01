import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddPost from './components/AddPost';
import Post from './components/Post';
import PostList from './components/PostList';
import Register from './components/Register';
import Login from './components/Login';
import AuthService from './services/AuthService';
import { useEffect, useState } from 'react';

function App() {
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = (e) => {
    AuthService.logout()
      .then(() => {
        console.log('Log out successfully');
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/posts" className="navbar-brand">
          ReactJS Demo
        </a>
        <div className="navbar-nav mr-auto">
          {currentUser ? (
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={'/login'} className="nav-link" onClick={logOut}>
                  Log Out
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'/posts'} className="nav-link">
                  List Post
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'/add'} className="nav-link">
                  Add Post
                </Link>
              </li>
            </div>
          ) : (
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={'/register'} className="nav-link">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'/login'} className="nav-link">
                  Log In
                </Link>
              </li>
            </div>
          )}
        </div>
      </nav>
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/posts" element={<PostList />} />
          <Route path="/add" element={<AddPost />} />
          <Route path="/posts/:id" element={<Post />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
