import React from 'react';
import { Link, NavLink } from 'react-router-dom';
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
        <Link to="/" className="navbar-logo" >
          BLOG APP
        </Link>
        <div className="navbar-links">
          {isAuthenticated ? (
            <>
              <NavLink to="/myblogs" activeClassName="active" className="nav-link">
                My Blogs
              </NavLink>
              <NavLink to="/createblog" className="nav-link" activeClassName="active">
                Create Blog
              </NavLink>
              <button onClick={handleLogout} className="logoutBtn">
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" activeClassName="active" className="nav-link">
                Login
              </NavLink>
              
              <NavLink to="/signup" className="nav-link" activeClassName="active">
                Sign Up
              </NavLink>
              <NavLink to="/" className="nav-link" activeClassName="active">
                All Blogs
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
