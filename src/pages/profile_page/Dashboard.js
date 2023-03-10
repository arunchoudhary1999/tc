import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="">
        <h2 className="pt-4 pb-2">Trip Stats</h2>
        {/* <!-- Background image --> */}
        <div
          className="p-5 text-center bg-image mg-fluid"
          style={{
            backgroundImage:
              "url('https://content.r9cdn.net/res/images/horizon/ui/personalization/account/dashboard/no-trips-yet-combined.png?v=5826cef5795b35a52fc517c515317dcfdff95b57&cluster=5')",
            height: "300px",
          }}
        >
          <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}>
            <div className="d-flex align-items-center h-100 justify-content-center w-50">
              <div className="text-dark text-start">
                <h5 className="mb-3">You don't have any Trip Stats yet</h5>
                <h6 className="mb-3">Kick your trip into gear. Get started!</h6>
                <a className="btn btn-dark btn-lg" href="#!" role="button">
                  View trips
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Background image --> */}
      </div>
      <div className="mb-4"></div>
      <h2 className="pt-4 pb-2">Recent searches</h2>
      <div className="card text-center mb-5">
        <div className="card-body">
          <h5 className="card-title mb-3">No search history found.</h5>
          <h6 className="card-subtitle mb-4 text-muted">Let's fix that</h6>
          <a href="!#" className="card-link">
          Search flights
          </a>
          <a href="!#" className="card-link">
            Search hotels
          </a>
          <a href="!#" className="card-link">
            Search cars
          </a>
          <a href="!#" className="card-link">
            Search holiday packages
          </a>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
