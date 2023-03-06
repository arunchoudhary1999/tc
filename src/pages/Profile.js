import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Account from "./profile_page/Account";
import Dashboard from "./profile_page/Dashboard";
import Payment from "./profile_page/Payment";
import Preferences from "./profile_page/Preferences";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const Profile = () => {
  // const navigate = useNavigate();
  const [userData, setUserData] = useState();

  const callAboutPage = async () => {
    try {
      const res = await fetch(
        "https://63f74749833c7c9c60807b98.mockapi.io/register",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          // credentials: "include",
        }
      );
      const data = await res.json();
      console.log(data);
      setUserData(data);
      // if(!res.status === 200){
      //   const error = new Error(res.error);
      //   throw error;
      // }
    } catch (error) {
      // console.log(error);
      // navigate('/profile')
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);

  return (
    <>
      <Navbar />
      <div class="card mb-3 mt-3 container">
        <div class="row g-0">
          <div class="col-md-9 d-flex align-items-end">
            <div class="card-body" method="GET">
              <h1
                class="card-title mb-4 text-dark"
                style={{ fontSize: "50px" }}
              >
                Welcome
              </h1>
              <div class="d-flex justify-content-between w-75">
                <figure>
                  <blockquote class="blockquote text-dark">
                    <p>Account email</p>
                  </blockquote>
                  <figcaption class="blockquote-footer">
                    123rjk04@gmail.com
                  </figcaption>
                </figure>
                <figure>
                  <blockquote class="blockquote text-dark">
                    <p>Home airport</p>
                  </blockquote>
                  <figcaption class="blockquote-footer">
                    Indore, India - Indore
                    <span class="m-2 text-dark">
                      <i class="fas fa-pencil-alt"></i>
                    </span>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <img
              src="https://th.bing.com/th/id/OIP.Gfp0lwE6h7139625a-r3aAHaHa?pid=ImgDet&rs=1"
              alt="Trendy Pants and Shoes"
              class=""
              style={{ width: "280px", borderRadius: "50%" }}
            />
          </div>
        </div>
      </div>
      {/* <!-- Tabs navs --> */}
      <ul
        class="nav nav-tabs nav-justified mb-3 container"
        id="ex1"
        role="tablist"
      >
        <li class="nav-item" role="presentation">
          <Link
            class="nav-link active"
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
        <li class="nav-item" role="presentation">
          <Link
            class="nav-link"
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
        <li class="nav-item" role="presentation">
          <Link
            class="nav-link"
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
        <li class="nav-item" role="presentation">
          <Link
            class="nav-link"
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
      <div class="tab-content container" id="ex2-content">
        <div
          class="tab-pane fade show active"
          id="ex3-tabs-1"
          role="tabpanel"
          aria-labelledby="ex3-tab-1"
        >
          <Dashboard />
        </div>
        <div
          class="tab-pane fade"
          id="ex3-tabs-2"
          role="tabpanel"
          aria-labelledby="ex3-tab-2"
        >
          <Account />
        </div>
        <div
          class="tab-pane fade"
          id="ex3-tabs-3"
          role="tabpanel"
          aria-labelledby="ex3-tab-3"
        >
          <Preferences />
        </div>
        <div
          class="tab-pane fade"
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
