import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Details = () => {
  return (
    <>
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
          <div class="container">
            <div class="text-white">
              <Link to="/" class="text-white">
                <h1 class="mb-4 mt-4">
                  Award <span class="text-primary text-gradient">Flight</span>
                  <span class="m-3">
                    <i class="fas fa-plane-departure"></i>
                  </span>
                </h1>
              </Link>
              <form>
                {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                <table class="table table-hover">
                  <thead class="table-light">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody class="text-light">
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Background image --> */}
      <Footer />
    </>
  );
};

export default Details;
