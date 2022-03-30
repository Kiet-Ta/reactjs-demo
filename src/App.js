import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddPost from './components/AddPost';
import Post from './components/Post';
import PostList from './components/PostList';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/posts" className="navbar-brand">
          ReactJS Demo
        </a>
        <div className="navbar-nav mr-auto">
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
      </nav>
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/posts" element={<PostList />} />
          <Route path="/add" element={<AddPost />} />
          <Route path="/posts/:id" element={<Post />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
