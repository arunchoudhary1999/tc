import React from "react";
import "./AccountStyle.css";

const Account = () => {
  return (
    <>
      <div class="container py-5">
        <div class="row d-flex justify-content-center align-items-center">
          <div class="col">
        <h1 class="">Account</h1>

            <div class="card my-4 shadow-3">
              <div class="row g-0">
              <div class="col-xl-6">
                  <div class="card-body p-md-5 text-black">
                    <h4 class="mb-4 text-uppercase">Preferences</h4>

                    <div class="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example8"
                        class="form-control form-control-lg"
                      />
                      <label class="form-label" for="form3Example8">
                        Your name
                      </label>
                    </div>

                    <div class="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example8"
                        class="form-control form-control-lg"
                      />
                      <label class="form-label" for="form3Example8">
                        Your display name
                      </label>
                    </div>

                    <div class="form-outline mb-4">
                      <input
                        type="email"
                        id="form3Example8"
                        class="form-control form-control-lg"
                      />
                      <label class="form-label" for="form3Example8">
                        Email
                      </label>
                    </div>

                    <div class="d-flex justify-content-center pt-3">
                      <button
                        type="button"
                        class="btn btn-success btn-lg ms-2"
                        style={{ backgroundColor: "hsl(210, 100%, 50%)" }}
                      >
                        Place order
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6 d-xl-block bg-image">
                  <img
                    src="https://content.r9cdn.net/res/images/horizon/account/v2/views/account/Account.svg?v=e1a7c4332909afd9a11127162d7763a5bc6a947d&cluster=5"
                    alt="img"
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
