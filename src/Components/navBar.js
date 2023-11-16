import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div >
      <nav className="navbar navbar-expand-xxl navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
           CRUD react
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav">
              <Link className="nav-link" to='/'>
                Dashboard
              </Link>
              <Link className="nav-link" to='/adduser'>
                Add User
              </Link>
              <Link className="nav-link" to='/edituser'>
                Edit User  
              </Link>

              
              </div>
            </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
