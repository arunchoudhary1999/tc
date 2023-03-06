import React from "react";

const Preferences = () => {
  return (
    <>
      <section>
        <div class="container py-5">
          <div class="row d-flex justify-content-center">
            <div class="col-md-12 col-lg-10 col-xl-8">
              <div class="card">
                <div class="card-body p-md-5">
                  <div>
                    <h2>Airports</h2>
                    <p class="text-muted pb-2">
                      Search for flights more easily by saving your home airport
                      and other airports you travel through often.
                    </p>
                  </div>

                  <h6 class="mt-4 mb-3 text-uppercase">
                    Home airport
                  </h6>

                  <div class="form-outline">
                    <input
                      type="text"
                      id="formControlLg"
                      class="form-control form-control-lg"
                    />
                    <label class="form-label" for="formControlLg">
                      Add a primary home airport
                    </label>
                  </div>

                  <h6 class="mt-4 mb-3 text-uppercase">
                  Secondary airports
                  </h6>

                  <div class="form-outline">
                    <input
                      type="text"
                      id="formControlLg"
                      class="form-control form-control-lg"
                    />
                    <label class="form-label" for="formControlLg">
                      Search for alternative airports
                    </label>
                  </div>
                  <div class="mt-3">
                    <button class="btn btn-primary btn-block btn-lg">
                      Proceed to payment{" "}
                      <i class="fas fa-long-arrow-alt-right"></i>
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
