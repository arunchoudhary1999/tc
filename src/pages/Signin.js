import React, { useState, useContext } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from '../App';

const Signin = () => {

  const {state, dispatch} = useContext(UserContext);

  const navigate = useNavigate();

  // Login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    // const { email, password } = user;

    const res = await fetch("http://upkeep.crmcity.org:8099/login", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      }),
    });
    const data = await res.json();

    if (res.status === 400 || !data) {
      window.alert("Invalid Credenrials");
      console.log("Invalid Credenrials");
    } else {
      localStorage.setItem('token', JSON.stringify(data.Token));
      // localStorage.setItem('token', data['token'])
      dispatch({type: "USER",payload: true})
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
          className="text-center bg-image"
          style={{
            backgroundImage:
              "url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp}')",
            minHeight: "740px",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
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
                <div className="tab-content">
                  <div>
                    <form method="POST">
                      <div className="text-center mb-3">
                        <p>Sign in with:</p>
                        <button
                          type="button"
                          className="btn btn-secondary btn-floating mx-1"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </button>

                        <button
                          type="button"
                          className="btn btn-secondary btn-floating mx-1"
                        >
                          <i className="fab fa-google"></i>
                        </button>

                        <button
                          type="button"
                          className="btn btn-secondary btn-floating mx-1"
                        >
                          <i className="fab fa-twitter"></i>
                        </button>

                        <button
                          type="button"
                          className="btn btn-secondary btn-floating mx-1"
                        >
                          <i className="fab fa-github"></i>
                        </button>
                      </div>

                      <p className="text-center">or:</p>

                      {/* <!-- Email input --> */}
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          name="email"
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          className="form-control"
                        />
                        <label className="form-label">
                          Email or username
                        </label>
                      </div>

                      {/* <!-- Password input --> */}
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          name="password"
                          onChange={(e) => setPassword(e.target.value)}
                          value={password}
                          className="form-control"
                        />
                        <label className="form-label">
                          Password
                        </label>
                      </div>

                      {/* <!-- Submit button --> */}
                      <button
                        type="submit"
                        className="btn btn-primary btn-block mb-4"
                        name="signin"
                        value="Log In"
                        onClick={loginUser}
                      >
                        Sign in
                      </button>

                      {/* <!-- Register buttons --> */}
                      <div className="text-center">
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
