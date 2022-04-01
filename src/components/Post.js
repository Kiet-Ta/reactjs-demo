import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import PostDataService from '../services/PostService';
const Post = (props) => {
  const { id } = useParams();
  let navigate = useNavigate();
  const initialPostState = {
    id: null,
    title: '',
    content: '',
  };
  const [currentPost, setCurrentPost] = useState(initialPostState);
  const [message, setMessage] = useState('');
  const getPost = (id) => {
    PostDataService.get(id)
      .then((response) => {
        setCurrentPost(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    if (id) getPost(id);
  }, [id]);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentPost({ ...currentPost, [name]: value });
  };
  const updatePost = () => {
    PostDataService.update(currentPost.id, currentPost)
      .then((response) => {
        console.log(response.data);
        setMessage('The post was updated successfully!');
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const deletePost = () => {
    PostDataService.remove(currentPost.id)
      .then((response) => {
        console.log(response.data);
        navigate('/posts');
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      {currentPost ? (
        <div className="edit-form">
          <h4>Post</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={currentPost.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Content</label>
              <input
                type="text"
                className="form-control"
                id="content"
                name="content"
                value={currentPost.content}
                onChange={handleInputChange}
              />
            </div>
          </form>
          <button className="btn btn-danger" onClick={deletePost}>
            Delete
          </button>
          <button
            type="submit"
            className="btn btn-success"
            onClick={updatePost}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Post...</p>
        </div>
      )}
    </div>
  );
};

export default Post;
