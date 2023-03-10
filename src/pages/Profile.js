import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Account from "./profile_page/Account";
import Dashboard from "./profile_page/Dashboard";
import Payment from "./profile_page/Payment";
import Preferences from "./profile_page/Preferences";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState();

  const callAboutPage = async () => {
    try {
      const res = await fetch(
        "http://upkeep.crmcity.org:8099/Account",
        {
          method: "GET",
          // mode: "cors",
          headers: {
            Accept: "application/json",
            authorization: JSON.parse(localStorage.getItem('token')),
            "Content-Type": "application/json"
          },
          credentials: "include"
        }
      );
      const data = await res.json();
      console.log(data);
      setUserData(data);
      if(!res.status === 200){
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      // navigate('/signin')
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);

  return (
    <>
      <Navbar />
      <div className="card mb-3 mt-3 container">
        <div className="row g-0">
          <div className="col-md-9 d-flex align-items-end">
            <div className="card-body" method="GET">
              <h1
                className="card-title mb-4 text-dark"
                style={{ fontSize: "50px" }}
              >
                Welcome
              </h1>
              <div className="d-flex justify-content-between w-75">
                <figure>
                  <blockquote className="blockquote text-dark">
                    <p>Account email</p>
                  </blockquote>
                  <figcaption className="blockquote-footer">
                    123rjk04@gmail.com
                  </figcaption>
                </figure>
                <figure>
                  <blockquote className="blockquote text-dark">
                    <p>Home airport</p>
                  </blockquote>
                  <figcaption className="blockquote-footer">
                    Indore, India - Indore
                    <span className="m-2 text-dark">
                      <i className="fas fa-pencil-alt"></i>
                    </span>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <img
              src="https://th.bing.com/th/id/OIP.Gfp0lwE6h7139625a-r3aAHaHa?pid=ImgDet&rs=1"
              alt="Trendy Pants and Shoes"
              className=""
              style={{ width: "280px", borderRadius: "50%" }}
            />
          </div>
        </div>
      </div>
      {/* <!-- Tabs navs --> */}
      <ul
        className="nav nav-tabs nav-justified mb-3 container"
        id="ex1"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <Link
            className="nav-link active"
            id="ex3-tab-1"
            data-mdb-toggle="tab"
            to="#ex3-tabs-1"
            role="tab"
            aria-controls="ex3-tabs-1"
            aria-selected="true"
          >
            Dashboard
          </Link>
        </li>
        <li className="nav-item" role="presentation">
          <Link
            className="nav-link"
            id="ex3-tab-2"
            data-mdb-toggle="tab"
            to="#ex3-tabs-2"
            role="tab"
            aria-controls="ex3-tabs-2"
            aria-selected="false"
          >
            Account
          </Link>
        </li>
        <li className="nav-item" role="presentation">
          <Link
            className="nav-link"
            id="ex3-tab-3"
            data-mdb-toggle="tab"
            to="#ex3-tabs-3"
            role="tab"
            aria-controls="ex3-tabs-3"
            aria-selected="false"
          >
            Preferences
          </Link>
        </li>
        <li className="nav-item" role="presentation">
          <Link
            className="nav-link"
            id="ex3-tab-4"
            data-mdb-toggle="tab"
            to="#ex3-tabs-4"
            role="tab"
            aria-controls="ex3-tabs-4"
            aria-selected="false"
          >
            Payment methods
          </Link>
        </li>
      </ul>
      {/* <!-- Tabs navs --> */}

      {/* <!-- Tabs content --> */}
      <div className="tab-content container" id="ex2-content">
        <div
          className="tab-pane fade show active"
          id="ex3-tabs-1"
          role="tabpanel"
          aria-labelledby="ex3-tab-1"
        >
          <Dashboard />
        </div>
        <div
          className="tab-pane fade"
          id="ex3-tabs-2"
          role="tabpanel"
          aria-labelledby="ex3-tab-2"
        >
          <Account />
        </div>
        <div
          className="tab-pane fade"
          id="ex3-tabs-3"
          role="tabpanel"
          aria-labelledby="ex3-tab-3"
        >
          <Preferences />
        </div>
        <div
          className="tab-pane fade"
          id="ex3-tabs-4"
          role="tabpanel"
          aria-labelledby="ex3-tab-4"
        >
          <Payment />
        </div>
      </div>
      {/* <!-- Tabs content --> */}
      <Footer />
    </>
  );
};

export default Profile;
