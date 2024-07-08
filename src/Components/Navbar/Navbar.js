import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/blogs" className="navbar-logo">
          BLOG APP
        </Link>
        <div className="navbar-links">
          {isAuthenticated ? (
            <>
              <Link to="/myblogs" className="nav-link">
                My Blogs
              </Link>
              <Link to="/createblog" className="nav-link">
                Create Blog
              </Link>
              <button onClick={handleLogout} className="logoutBtn">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link">
                Login
              </Link>
              <Link to="/signup" className="nav-link">
                Sign Up
              </Link>
              <Link to="/blogs" className="nav-link">
                All Blogs
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
