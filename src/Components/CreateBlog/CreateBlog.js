import React, { useState } from 'react';
import '../CreateBlog/CreateBlog.css';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BlogForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authToken = Cookies.get('token');
    if (!authToken) {
      toast.warning("User is not authorized", { autoClose: 3000 });
      return;
    }

    if (title && author && description) {
      try {
        const response = await fetch('https://blogsapp-backend.onrender.com/blogs/createblog', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`,
          },
          body: JSON.stringify({ title, author, description }),
        });

        if (response.ok) {
          toast.success("Blog created successfully", { autoClose: 3000 });
          setTitle('');
          setAuthor('');
          setDescription('');
        } else {
          const errorData = await response.json();
          toast.error(`Error: ${errorData.message || 'Failed to create blog'}`, { autoClose: 3000 });
        }
      } catch (err) {
        toast.error(`Error: ${err.message}`, { autoClose: 3000 });
      }
    } else {
      toast.error("All fields are required", { autoClose: 3000 });
    }
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <label htmlFor="author">Author:</label>
      <input
        type="text"
        id="author"
        name="author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />

      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <button type="submit">Create Blog</button>
      <ToastContainer />
    </form>
  );
};

export default BlogForm;

