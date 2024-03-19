import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'

const Navbar = () => {
 
  const [isAuntenticated , setIsAuthenticated] = useState(false)


  const navigate = useNavigate();
  const handleLogout = () => {
    Cookies.remove('token');
    setIsAuthenticated(true)
    navigate('/login')
  };


  return (


    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/blogs" className="navbar-logo">
         BLOG APP
        </Link>

        <div className="navbar-links">
          {isAuntenticated ? <>

            <Link to="/login" className="nav-link">
            Login
          </Link>
          <Link to="/signup" className="nav-link">
            Sign Up
          </Link>
          <Link to="/blogs" className="nav-link">
            All Blogs
          </Link>
    
          </>: <>

          <Link to="/myblogs" className="nav-link">
            My Blogs
          </Link>
          <Link to="/createblog" className="nav-link">
           CreateBlog
          </Link>
          <button onClick={handleLogout} className='logoutBtn'>Logout</button>
          </>}
          
                    
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
