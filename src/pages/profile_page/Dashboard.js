import React from "react";

const Dashboard = () => {
  return (
    <>
      <div class="">
        <h2 class="pt-4 pb-2">Trip Stats</h2>
        {/* <!-- Background image --> */}
        <div
          class="p-5 text-center bg-image mg-fluid"
          style={{
            backgroundImage:
              "url('https://content.r9cdn.net/res/images/horizon/ui/personalization/account/dashboard/no-trips-yet-combined.png?v=5826cef5795b35a52fc517c515317dcfdff95b57&cluster=5')",
            height: "300px",
          }}
        >
          <div class="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}>
            <div class="d-flex align-items-center h-100 justify-content-center w-50">
              <div class="text-dark text-start">
                <h5 class="mb-3">You don't have any Trip Stats yet</h5>
                <h6 class="mb-3">Kick your trip into gear. Get started!</h6>
                <a class="btn btn-dark btn-lg" href="#!" role="button">
                  View trips
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Background image --> */}
      </div>
      <div class="mb-4"></div>
      <h2 class="pt-4 pb-2">Recent searches</h2>
      <div class="card text-center mb-5">
        <div class="card-body">
          <h5 class="card-title mb-3">No search history found.</h5>
          <h6 class="card-subtitle mb-4 text-muted">Let's fix that</h6>
          <a href="!#" class="card-link">
          Search flights
          </a>
          <a href="!#" class="card-link">
            Search hotels
          </a>
          <a href="!#" class="card-link">
            Search cars
          </a>
          <a href="!#" class="card-link">
            Search holiday packages
          </a>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
