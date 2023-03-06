import React from "react";
import "./style.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <header>
      <Navbar />
        {/* <!-- Background image --> */}
        <div
          id="intro-example"
          class="text-center bg-image"
          style={{
            backgroundImage:
              "url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp}')",
            minHeight: "676px",
            backgroundAttachment: "fixed",
          }}
        >
          <div class="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
            <div class="d-flex justify-content-center align-items-center h-100">
              <div class="text-white">
                <h1 class="mb-4">
                  Award <span class="text-primary text-gradient">Flight</span>
                        <span class="m-3"><i class="fas fa-plane-departure"></i></span>
                </h1>
                <form>
                  {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                  <div class="row mb-4">
                    <div class="col">
                      <div class="form">
                        <input
                          type="text"
                          id="form6Example1"
                          class="form-control"
                          placeholder="Form"
                        />
                      </div>
                    </div>
                    <div class="col">
                      <div class="form">
                        <input
                          type="text"
                          id="form6Example2"
                          class="form-control"
                          placeholder="To"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row mb-4">
                    <div class="col">
                      <div class="form">
                        <input
                          type="date"
                          id="form6Example1"
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="col">
                      <div class="form">
                        <input
                          type="date"
                          id="form6Example2"
                          class="form-control"
                        />
                      </div>
                    </div>
                  </div>

                  {/* <!-- Submit button --> */}
                  <Link to="/details">
                  <button type="submit" class="btn btn-primary btn-block mb-4">
                    Check Place
                  </button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Background image --> */}
      </header>
      <Footer />
    </>
  );
};

export default Home;
