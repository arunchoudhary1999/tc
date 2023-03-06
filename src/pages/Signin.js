import React, { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();

  // Login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    // const { email, password } = user;

    const res = await fetch(
      "https://63f74749833c7c9c60807b98.mockapi.io/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );
    const data = await res.json();

    if (res.status === 400 || !data) {
      window.alert("Invalid Credenrials");
      console.log("Invalid Credenrials");
    } else {
      window.alert("Login Successfull");
      console.log("Login Successfull");
      navigate("/");
    }
  };

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
            minHeight: "740px",
            backgroundAttachment: "fixed",
          }}
        >
          <div class="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
            <div
              style={{
                minHeight: "745px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  padding: "25px",
                  width: "35%",
                  background: "white",
                }}
              >

                {/* <!-- Pills content --> */}
                <div class="tab-content">
                  <div>
                    <form method="POST">
                      <div class="text-center mb-3">
                        <p>Sign in with:</p>
                        <button
                          type="button"
                          class="btn btn-secondary btn-floating mx-1"
                        >
                          <i class="fab fa-facebook-f"></i>
                        </button>

                        <button
                          type="button"
                          class="btn btn-secondary btn-floating mx-1"
                        >
                          <i class="fab fa-google"></i>
                        </button>

                        <button
                          type="button"
                          class="btn btn-secondary btn-floating mx-1"
                        >
                          <i class="fab fa-twitter"></i>
                        </button>

                        <button
                          type="button"
                          class="btn btn-secondary btn-floating mx-1"
                        >
                          <i class="fab fa-github"></i>
                        </button>
                      </div>

                      <p class="text-center">or:</p>

                      {/* <!-- Email input --> */}
                      <div class="form-outline mb-4">
                        <input
                          type="email"
                          id="loginName"
                          name="email"
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          class="form-control"
                        />
                        <label class="form-label" for="loginName">
                          Email or username
                        </label>
                      </div>

                      {/* <!-- Password input --> */}
                      <div class="form-outline mb-4">
                        <input
                          type="password"
                          id="loginPassword"
                          name="password"
                          onChange={(e) => setPassword(e.target.value)}
                          value={password}
                          class="form-control"
                        />
                        <label class="form-label" for="loginPassword">
                          Password
                        </label>
                      </div>

                      {/* <!-- 2 column grid layout --> */}
                      {/* <div class="row mb-4">
                        <div class="col-md-6 d-flex justify-content-center">
                          <div class="form-check mb-3 mb-md-0">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="loginCheck"
                              checked
                            />
                            <label class="form-check-label" for="loginCheck">
                              {" "}
                              Remember me{" "}
                            </label>
                          </div>
                        </div>

                        <div class="col-md-6 d-flex justify-content-center">
                          <Link to="/signup">Forgot password?</Link>
                        </div>
                      </div> */}

                      {/* <!-- Submit button --> */}
                      <button
                        type="submit"
                        class="btn btn-primary btn-block mb-4"
                        name="signin"
                        onClick={loginUser}
                      >
                        Sign in
                      </button>

                      {/* <!-- Register buttons --> */}
                      <div class="text-center">
                        <p>
                          Not a member? <Link to="/signup">Register</Link>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
                {/* <!-- Pills content --> */}
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

export default Signin;
