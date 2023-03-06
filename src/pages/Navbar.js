import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* <!-- Navbar --> */}
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-white">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="!#navbarExample01"
              aria-controls="navbarExample01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarExample01">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item active">
                  <Link class="nav-link" aria-current="page" to="/">
                    <h4>
                      Award{" "}
                      <span class="text-primary text-gradient">Flight</span>
                      <span class="m-2">
                        <i class="fas fa-plane-departure"></i>
                      </span>
                    </h4>
                  </Link>
                </li>
              </ul>
            </div>
            <div class="d-flex align-items-center">
              <Link to="/signin">
                <button type="button" class="btn btn-link px-3 me-2">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button type="button" class="btn btn-primary me-3">
                  Sign up for free
                </button>
              </Link>
              <Link
                class="btn btn-dark px-3"
                to="/profile"
                role="button"
              >
                <i class="fas fa-user-circle"></i>
              </Link>
            </div>
          </div>
        </nav>
      </div>
      {/* <!-- Navbar --> */}
    </>
  );
};

export default Navbar;
