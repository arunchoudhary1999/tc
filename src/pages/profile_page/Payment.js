import React from "react";

const Payment = () => {
  return (
    <>
      <h2 className="pt-4 pb-2">Saved payment methods</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Saved payment methods</h5>
          <p className="card-text">
            Choose from your saved payment methods when booking to quickly
            autofill your payment info.
          </p>
          <a href="!#" className="card-link">
            Add a credit card
          </a>
        </div>
      </div>
      <div className="mb-8"></div>
    </>
  );
};

export default Payment;
