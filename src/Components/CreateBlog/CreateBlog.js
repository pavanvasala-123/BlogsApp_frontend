import React, { useState } from 'react';
import '../CreateBlog/CreateBlog.css'
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BlogForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault()

    const authToken = Cookies.get('token');
    if(!authToken){
      toast.warning("User is not authorized" , {autoClose:3000})
    }
   
    if (title && author && description) {
      const response = await fetch('https://blogsapp-backend.onrender.com/blogs/createblog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify({ title , author , description }),
      });

      if(response.ok){
        console.log("blog created")
        toast.success("blog created successfully",{ autoClose: 3000 });
      }
      console.log(response.error)
      // toast("error to create err");

      setTitle('');
      setAuthor('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='form' enctype="multipart/form-data">
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
      <ToastContainer/>
    </form>
  );
};

export default BlogForm;
