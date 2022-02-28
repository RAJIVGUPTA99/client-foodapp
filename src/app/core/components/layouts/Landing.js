import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="landing">
      <div className="container-fluid">
        <div className="row my-5">
          <div className="col-2" />
          <div className="col">
            <h1 className="mb-4 text">Food Delivery</h1>
            <p className="lead text">
              Create a developer profile/portfolio, share posts and get help
              from other developers
            </p>
            <hr />
            <div className="self-align-center">
              <Link to="/auth/register" className="btn btn-lg btn-info me-2">
                Sign Up
              </Link>
              <Link to="/auth/login" className="btn btn-lg btn-light">
                Login
              </Link>
            </div>
          </div>
          <div className="col-2" />
        </div>
      </div>
    </div>
  );
}

export default Landing;
