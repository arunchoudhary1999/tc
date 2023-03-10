import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";

const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);

  const RenderMenu = () => {
    if (state) {
      return (
        <>
          <div className="d-flex align-items-center">
            <Link className="btn btn-dark px-3" to="/profile" role="button">
              <i className="fas fa-user-circle"></i>
            </Link>
            <Link to="/logout">
              <button type="button" className="btn btn-primary mx-3">
                Logout
              </button>
            </Link>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="d-flex align-items-center">
            <Link to="/signin">
              <button type="button" className="btn btn-link px-3 me-2">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button type="button" className="btn btn-primary me-3">
                Sign up for free
              </button>
            </Link>
          </div>
        </>
      );
    }
  };

  return (
    <>
      {/* <!-- Navbar --> */}
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="!#navbarExample01"
              aria-controls="navbarExample01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarExample01">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item active">
                  <Link className="nav-link" aria-current="page" to="/">
                    <h4>
                      Award{" "}
                      <span className="text-primary text-gradient">Flight</span>
                      <span className="m-2">
                        <i className="fas fa-plane-departure"></i>
                      </span>
                    </h4>
                  </Link>
                </li>
              </ul>
            </div>
            <RenderMenu />
          </div>
        </nav>
      </div>
      {/* <!-- Navbar --> */}
    </>
  );
};

export default Navbar;
