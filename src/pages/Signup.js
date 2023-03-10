import React, { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    username: "",
    first_name: "",
    last_name: "",
    city: "",
    password: "",
    confirm_password: "",
  });

  let name, value;
  const handleInputs = (e) => {
    // console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const {
      email,
      username,
      first_name,
      last_name,
      city,
      password,
      confirm_password,
    } = user;

    const res = await fetch("http://upkeep.crmcity.org:8099/register", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        username,
        first_name,
        last_name,
        city,
        password,
        confirm_password,
      }),
    });
    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      // localStorage.setItem('user', JSON.stringify(data.data));
      localStorage.setItem('token', JSON.stringify(data.Token));
      window.alert("Registration Successfull");
      console.log("Registration Successfull");
      navigate("/signin");
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
          <div
            className="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
          >
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
                        <p>Sign up with:</p>
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
                          onChange={handleInputs}
                          value={user.email}
                          type="email"
                          name="email"
                          className="form-control"
                        />
                        <label className="form-label">Email</label>
                      </div>

                      {/* <!-- Username input --> */}
                      <div className="form-outline mb-4">
                        <input
                          onChange={handleInputs}
                          value={user.username}
                          type="text"
                          name="username"
                          className="form-control"
                        />
                        <label className="form-label">Username</label>
                      </div>

                      {/* <!-- First Name input --> */}
                      <div className="form-outline mb-4">
                        <input
                          onChange={handleInputs}
                          value={user.first_name}
                          type="text"
                          name="first_name"
                          className="form-control"
                        />
                        <label className="form-label">First Name</label>
                      </div>

                      {/* <!-- Last Name input --> */}
                      <div className="form-outline mb-4">
                        <input
                          onChange={handleInputs}
                          value={user.last_name}
                          type="text"
                          name="last_name"
                          className="form-control"
                        />
                        <label className="form-label">Last Name</label>
                      </div>

                      {/* <!-- City input --> */}
                      <div className="form-outline mb-4">
                        <input
                          onChange={handleInputs}
                          value={user.city}
                          type="text"
                          name="city"
                          className="form-control"
                        />
                        <label className="form-label">City</label>
                      </div>

                      {/* <!-- Password input --> */}
                      <div className="form-outline mb-4">
                        <input
                          onChange={handleInputs}
                          value={user.password}
                          type="password"
                          name="password"
                          className="form-control"
                        />
                        <label className="form-label">Password</label>
                      </div>

                      {/* <!-- Repeat Password input --> */}
                      <div className="form-outline mb-4">
                        <input
                          onChange={handleInputs}
                          value={user.confirm_password}
                          type="password"
                          name="confirm_password"
                          className="form-control"
                        />
                        <label className="form-label">Confirm password</label>
                      </div>

                      {/* <!-- Submit button --> */}
                      <button
                        type="submit"
                        name="signup"
                        value="register"
                        onClick={PostData}
                        className="btn btn-primary btn-block mb-3"
                      >
                        Sign Up
                      </button>

                      <div className="text-center">
                        <p>
                          Not a member? <Link to="/signin">Login</Link>
                        </p>
                      </div>
                      {/* <h6>Email : {user.email}, Username : {user.username}, First Name : {user.first_name}, Last Name : {user.last_name}, City : {user.city}, Password : {user.password}, Confirm Password : {user.confirm_password}</h6> */}
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
}

export default Signup;

// import React, { useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// const Signup = () => {
//   const [email, setEmail] = useState("");
//   const [username, setUsername] = useState("");
//   const [first_name, setFirst_name] = useState("");
//   const [last_name, setLast_name] = useState("");
//   const [city, setCity] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirm_password, setConfirm_password] = useState("");

//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(
//       `Sure You Are SuccessFully Submit This Form \n Name :`
//     );
//     axios
//       .post("http://upkeep.crmcity.org:8099/register", {
//         e_email: email,
//         e_username: username,
//         e_first_name: first_name,
//         e_last_name: last_name,
//         e_city: city,
//         e_password: password,
//         e_confirm_password: confirm_password,
//       })
//       .then(() => {
//         navigate("/signin");
//       });
//   };

//   return (
//     <>
//       <div classNameName="row">
//         <div classNameName="col-md-4">
//           <div classNameName="mb-2 mt-2">
//             <Link to="/">
//               <button classNameName="btn btn-primary">Read Data</button>
//             </Link>
//           </div>
//           <div classNameName="bg-primary p-4 text-center">
//             <h1>Signup Data</h1>
//           </div>
//           <form onSubmit={handleSubmit}>
//             <div classNameName="form-group">
//               <label>Enter Email : </label>
//               <input
//                 classNameName="form-control"
//                 type="email"
//                 placeholder="Email"
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>

//             <div classNameName="form-group">
//               <label>Enter username : </label>
//               <input
//                 classNameName="form-control"
//                 type="text"
//                 placeholder="username"
//                 onChange={(e) => setUsername(e.target.value)}
//                 required
//               />
//             </div>

//             <div classNameName="form-group">
//               <label>Enter first Name : </label>
//               <input
//                 classNameName="form-control"
//                 type="text"
//                 placeholder="first name"
//                 onChange={(e) => setFirst_name(e.target.value)}
//                 required
//               />
//             </div>

//             <div classNameName="form-group">
//               <label>Enter last Name : </label>
//               <input
//                 classNameName="form-control"
//                 type="text"
//                 placeholder="last Name"
//                 onChange={(e) => setLast_name(e.target.value)}
//                 required
//               />
//             </div>

//             <div classNameName="form-group">
//               <label>Enter city : </label>
//               <input
//                 classNameName="form-control"
//                 type="text"
//                 placeholder="City"
//                 onChange={(e) => setCity(e.target.value)}
//                 required
//               />
//             </div>

//             <div classNameName="form-group">
//               <label>Enter Password : </label>
//               <input
//                 classNameName="form-control"
//                 type="password"
//                 placeholder="password"
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>

//             <div classNameName="form-group">
//               <label>Enter Conform Password : </label>
//               <input
//                 classNameName="form-control"
//                 type="password"
//                 placeholder="confirm Password"
//                 onChange={(e) => setConfirm_password(e.target.value)}
//                 required
//               />
//             </div>
//             <br />
//             <div classNameName="d-grid">
//               <input classNameName="btn btn-primary" type="submit" value="submit" />
//             </div>
//           </form>
//           {/* <h1>{name}</h1>
//           <h1>{age}</h1>
//           <h1>{email}</h1> */}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Signup;
