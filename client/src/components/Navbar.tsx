import '../index.css';
import { isLoggedIn, user } from '../util.js';

function Navbar() {

  const onSignOut = () => {

    localStorage.removeItem('user');
    localStorage.removeItem('token');
    
    alert(`${user.username} has been successfully signed out`);
    window.location.href = "/"
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
              <a className="navbar-brand" href="/home">RecipeBoss</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                          <a className="nav-link" aria-current="page" href="/home">Home</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="/search">Search</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="/my-recipes">My Recipes</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="/store-locator">Store Locator</a>
                      </li>
                  </ul>
                  <div className="ms-auto">
                      {isLoggedIn() ? (
                        <button className="nav-link btn" onClick={onSignOut}>Sign Out</button>
                      ) : (
                        <a className="nav-link btn" href="/sign-in">Sign In</a>
                      )}
                  </div>
              </div>
          </div>
      </nav>
    </div>
  );
}

export default Navbar;
