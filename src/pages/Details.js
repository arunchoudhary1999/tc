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
        className="text-center bg-image"
        style={{
          backgroundImage:
            "url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp}')",
          minHeight: "676px",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
          <div className="container">
            <div className="text-white">
              <Link to="/" className="text-white">
                <h1 className="mb-4 mt-4">
                  Award <span className="text-primary text-gradient">Flight</span>
                  <span className="m-3">
                    <i className="fas fa-plane-departure"></i>
                  </span>
                </h1>
              </Link>
              <form>
                {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                <table className="table table-hover">
                  <thead className="table-light">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody className="text-light">
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
