import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../UserBlogs/UserBlogs.css'; // Adjust the path if needed

const UpdateBlogForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');

  const { id }= useParams(); // Destructure 'id' directly
  console.log(id);
  const  navigate = useNavigate();

  useEffect(() => {
    const fetchBlogData = async () => {
      const authToken = Cookies.get('token');
      if (!authToken) {
        toast.warning("User is not authorized", { autoClose: 3000 });
        return;
      }

      try {
        const response = await fetch(`http://localhost:3003/blogs/blog/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setTitle(data.title);
          setAuthor(data.author);
          setDescription(data.description);
        } else {
          toast.error("Failed to fetch blog details", { autoClose: 3000 });
        }
      } catch (err) {
        toast.error(`Error: ${err.message}`, { autoClose: 3000 });
      }
    };

    fetchBlogData();
  }, [id]); // Dependency array with 'id'

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authToken = Cookies.get('token');
    if (!authToken) {
      toast.warning("User is not authorized", { autoClose: 3000 });
      return;
    }

    if (title && author && description) {
      try {
        const response = await fetch(`http://localhost:3003/blogs/blog/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`,
          },
          body: JSON.stringify({ title, author, description }),
        });

        if (response.ok) {
          toast.success("Blog updated successfully", { autoClose: 3000 });
        //   navigate("/myblogs")
        } else {
          const errorData = await response.json();
          toast.error(`Error: ${errorData.message || 'Failed to update blog'}`, { autoClose: 3000 });
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

      <button type="submit">Update Blog</button>
      <ToastContainer />
    </form>
  );
};

export default UpdateBlogForm;
