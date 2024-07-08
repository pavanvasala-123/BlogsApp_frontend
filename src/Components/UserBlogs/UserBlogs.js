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
          "http://localhost:3003/blogs/user",
          options
        );
        const data = await response.json();
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
        {blogs.length === 0 ? (
          <h2>No blogs create a blog</h2>
        ) : (
          blogs?.map((eachBlog) => (
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
        )}
      </ul>
      <ToastContainer />
    </div>
  );
}

export default UserBlogs;

// import React, { useState, useEffect } from "react";
// import Cookies from "js-cookie";
// import "../UserBlogs/UserBlogs.css";
// import { ToastContainer, toast } from "react-toastify";

// function UserBlogs() {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const authToken = Cookies.get("token");
//   console.log(authToken)

//   useEffect(() => {
//     if (!authToken) {
//       toast.warning("User is not authorized");
//       setLoading(false);
//       return;
//     }

//     const fetchBlogs = async () => {
//       try {
//         const response = await fetch("http://localhost:3003/blogs/user", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${authToken}`,
//           },
//         });
//         if (!response.ok) {
//           throw new Error("Failed to fetch blogs");
//         }
//         const data = await response.json();
//         if (!Array.isArray(data)) {
//           throw new Error("Unexpected data format");
//         }
//         setBlogs(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlogs();
//   }, [authToken]);

//   const handleDelete = async (blogId) => {
//     try {
//       const response = await fetch(`http://localhost:3003/blogs/${blogId}`, {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${authToken}`,
//         },
//       });
//       if (!response.ok) {
//         throw new Error("Failed to delete blog");
//       }
//       toast.success("Blog deleted successfully");
//       setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== blogId));
//     } catch (err) {
//       toast.error(`Error: ${err.message}`);
//     }
//   };

//   return (
//     <div className="myBlogscon">
//       <h1>My Blogs</h1>
//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p className="error">Error: {error}</p>
//       ) : blogs.length === 0 ? (
//         <h2>No blogs available. Create a blog.</h2>
//       ) : (
//         <ul className="blogsCon">
//           {blogs.map((eachBlog) => (
//             <li className="blog" key={eachBlog._id}>
//               <div className="tiletimeCon">
//                 <div>
//                   <h2>{eachBlog.title}</h2>
//                   <h3>{eachBlog.author}</h3>
//                 </div>
//                 <p>{new Date(eachBlog.createdAt).toLocaleDateString()}</p>
//               </div>
//               <p>{eachBlog.description}</p>
//               <div className="buttonsCon">
//                 <button>Edit</button>
//                 <button onClick={() => handleDelete(eachBlog._id)}>Delete</button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//       <ToastContainer />
//     </div>
//   );
// }

// export default UserBlogs;

