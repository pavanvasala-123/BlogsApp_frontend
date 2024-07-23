import React, { useState } from "react";
import { useEffect } from "react";
import Cookies from "js-cookie";
import "../UserBlogs/UserBlogs.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function UserBlogs() {
  const [blogs, setBlogs] = useState([]);

  const navigate = useNavigate()

  const authToken = Cookies.get("token");
  if (!authToken) {
    console.log("user is not authorized");
  }

  useEffect(() => {
    const userBlogs = async () => {
      const options = {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      };

      try {
        const response = await fetch(
          "https://blogsapp-backend.onrender.com/blogs/user",
          options
        );
        const data = await response.json();
        console.log(data)
        setBlogs(data);
      } catch (err) {
        console.log(err);
      }
    };

    userBlogs();
  }, []);

  const handleDelete = async (blogId) => {
    try {
      const response = await fetch(`https://blogsapp-backend.onrender.com/blogs/${blogId}`, {
        method: "Delete",
      });
      if (response.ok) {
        toast.success("Blog deleted");
        setBlogs((prevBlogs) =>
          prevBlogs.filter((blogs) => blogs._id !== blogId)
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async(blogId) =>{
    navigate(`/update/${blogId}`)
  }
  

  return (
    <div className="myBlogscon">
      <h1>My Blogs</h1>

      <ul className="blogsCon">
        {blogs.length >= 1  ? (
              blogs.map((eachBlog) => (
                <li className="blog" key={eachBlog._id}>
                  <div className="tiletimeCon">
                    <div>
                      <h2>{eachBlog.title}</h2>
                      <h5>Author :{eachBlog.author}</h5>
                    </div>
                    <p>{eachBlog.createdAt.substring(0, 10)}</p>
                  </div>
                  <p>{eachBlog.description}</p>
    
                  <div className="buttonsCon">
                    <button  onClick={() => handleUpdate(eachBlog._id)}>Edit</button>
                    <button onClick={() => handleDelete(eachBlog._id)}>
                      Delete
                    </button>
                  </div>
                </li>
              ))
        ) : (
            <h1>No blogs found to display</h1>
        )}

        
      </ul>
      <ToastContainer />
    </div>
  );
}

export default UserBlogs;

