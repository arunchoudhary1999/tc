import React from "react";

const Preferences = () => {
  return (
    <>
      <section>
        <div className="container py-5">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12 col-lg-10 col-xl-8">
              <div className="card">
                <div className="card-body p-md-5">
                  <div>
                    <h2>Airports</h2>
                    <p className="text-muted pb-2">
                      Search for flights more easily by saving your home airport
                      and other airports you travel through often.
                    </p>
                  </div>

                  <h6 className="mt-4 mb-3 text-uppercase">
                    Home airport
                  </h6>

                  <div className="form-outline">
                    <input
                      type="text"
                      id="formControlLg"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" for="formControlLg">
                      Add a primary home airport
                    </label>
                  </div>

                  <h6 className="mt-4 mb-3 text-uppercase">
                  Secondary airports
                  </h6>

                  <div className="form-outline">
                    <input
                      type="text"
                      id="formControlLg"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" for="formControlLg">
                      Search for alternative airports
                    </label>
                  </div>
                  <div className="mt-3">
                    <button className="btn btn-primary btn-block btn-lg">
                      Proceed to payment{" "}
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Preferences;
