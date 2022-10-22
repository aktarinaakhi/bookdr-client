import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../lib/useAuth';

const Header = () => {
  const { logOut, user } = useAuth();

  return (
    <nav className="navbar navbar-light justify-content-between container">
      <Link className="h1 text-dark text-decoration-none" to="/">
        Book<strong className="text-primary">dr</strong>
      </Link>

      {user?.email && (
        <div className="d-flex align-items-center justify-content-end">
          <span>{user?.displayName}</span>
          <button onClick={logOut} className="btn btn-sm ms-2 btn-outline-dark">
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;
