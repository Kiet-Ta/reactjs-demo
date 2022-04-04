import axios from 'axios';
import React, { useState } from 'react';
import axiosInstance from '../http-common';
import PostDataService from '../services/PostService';

const AddPost = () => {
  const initialPostState = {
    id: null,
    title: '',
    content: '',
  };

  const [post, setPost] = useState(initialPostState);
  const [submitted, setSubmitted] = useState(false);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPost({ ...post, [name]: value });
  };

  const savePost = () => {
    let data = {
      title: post.title,
      content: post.content,
    };
    PostDataService.create(data)
      .then((response) => {
        setPost({
          id: response.data.id,
          title: response.data.title,
          content: response.data.content,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const newPost = () => {
    setPost(initialPostState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newPost}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={post.title}
              onChange={handleInputChange}
              name="title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Content</label>
            <input
              type="text"
              className="form-control"
              id="content"
              required
              value={post.content}
              onChange={handleInputChange}
              name="content"
            />
          </div>
          <button onClick={savePost} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddPost;
