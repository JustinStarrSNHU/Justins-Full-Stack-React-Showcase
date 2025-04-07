import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Header = () => {
  return (
    <div>
      <nav className="nav-bar">
        <ul>
          <li><Link to="/" className="button-link">Home</Link></li>
          <li className="dropdown">
            <a href="#" className="button-link">App Components</a>
            <div className="dropdown-content">
              <Link to="/playlist" className="button-link">Playlist</Link>
              <Link to="/search-and-play" className="button-link">Search and Play</Link>
              <Link to="/my-repositories" className="button-link">My Repositories</Link>
              <Link to="/todo-list" className="button-link">Todo List</Link>
              <Link to="/guest-book" className="button-link">Guest Book</Link>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;