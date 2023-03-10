import React, { useState, useEffect } from "react";
import "./style.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = () => {
  // const navigate = useNavigate();
  // const [userData, setUserData] = useState();

  // const handleChange = (e) => {
  //   console.log(e.target.value);
  //   setUserData(e.target.value);
  // };

  // const callAboutPage = async () => {
  //   try {
  //     const res = await fetch(
  //       "http://upkeep.crmcity.org:8099/home",
  //       {
  //         method: "GET",
  //         // mode: "cors",
  //         headers: {
  //           "Accept": "application/json",
  //           'Authorization': "bearer",
  //           "Content-Type": "application/json"
  //         },
  //         // credentials: "include"
  //       }
  //     );
  //     const data = await res.json();
  //     console.log(data);
  //     setUserData(data);
  //     if(!res.status === 200){
  //       const error = new Error(res.error);
  //       throw error;
  //     }
  //   } catch (err) {
  //     console.log(err);
  //     navigate('/signin')
  //   }
  // };

  // useEffect(() => {
  //   callAboutPage();
  // }, []);

  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const url = "https://randomuser.me/api/?results=15";
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json["results"]))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (data.length !== 0) {
      setIsLoading(false);
    }
    console.log(data);
  }, [data]);

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const submitUser = async (e) => {
    e.preventDefault();

    const res = await fetch('http://upkeep.crmcity.org:8099/home', {
      method: "POST",
      headers: {
        // Authorization: "token",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from,
        to,
        fromDate,
        toDate
      })
    })
    const data = res.json();

    if (res.status === 400 || !data) {
      window.alert("Invalid Data");
      console.log("Invalid Data");
    } else {
      // localStorage.setItem('user', JSON.stringify(data.data));
      localStorage.setItem('token', JSON.stringify(data.Token));
      window.alert("Data Successfull");
      console.log("Data Successfull");
      navigate("/details");
    }
  }

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
            minHeight: "676px",
            backgroundAttachment: "fixed",
          }}
        >
          <div
            className="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
          >
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <h1 className="mb-4">
                  Award{" "}
                  <span className="text-primary text-gradient">Flight</span>
                  <span className="m-3">
                    <i className="fas fa-plane-departure"></i>
                  </span>
                </h1>
                <form>
                  {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                  <div className="row mb-4">
                    <div className="col">
                      <div className="form" method="POST">
                        <select value={from} onChange={(e) => setFrom(e.target.value)} name="from" className="form-control">
                          <option disabled selected>
                            From...
                          </option>
                          {isLoading ? (
                            <h1>Loading...</h1>
                          ) : (
                            data.map((option, index) => (
                              <option key={index} value={option.name.first}>
                              {option.name.first}
                              </option>
                            ))
                          )}
                        </select>
                      </div>
                    </div>

                    <div className="col">
                      <div className="form">
                        <select value={to} name="to" onChange={(e) => setTo(e.target.value)} className="form-control">
                          <option disabled selected>
                            To...
                          </option>
                          {isLoading ? (
                            <h1>Loading...</h1>
                          ) : (
                            data.map((option, index) => (
                              <option key={index} value={option.name.last}>
                              {option.name.last}
                              </option>
                            ))
                          )}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col">
                      <div className="form">
                        <input
                          type="date"
                          id="form6Example1"
                          className="form-control"
                          value={toDate} name="toDate"
                          onChange={(e) => setToDate(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="form">
                        <input
                          type="date"
                          id="form6Example2"
                          className="form-control"
                          value={fromDate} name="fromDate"
                          onChange={(e) => setFromDate(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* <!-- Submit button --> */}
                  <Link to="/details">
                    <button
                      type="submit"
                      value='submit'
                      name="submit"
                      onClick={submitUser}
                      className="btn btn-primary btn-block mb-4"
                    >
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
