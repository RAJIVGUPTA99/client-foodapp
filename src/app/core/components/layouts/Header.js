import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../../auth/action/authAction";

const guestLinks = (
  <>
    <li className="nav-item">
      <Link className="nav-link" to="/auth/register">
        Register
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/auth/login">
        Login
      </Link>
    </li>
  </>
);

const Header = ({ auth: { isAuthenticated, user }, logout }) => {
  const [open, setOpen] = useState(false);

  const authLinks = (
    <>
      <li className="nav-item">
        <a className="nav-link" href="/">
          <i className="fas fa-user" />
          Welcome {user ? user.name : ""}
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/order-history">
          Order history
        </a>
      </li>
      <li className="nav-item">
        <a onClick={logout} href="/auth/login" className="nav-link">
          Logout
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/view-cart">
          <i className="fas fa-shopping-cart">2</i> ₹ 500
        </a>
      </li>
    </>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Food Devivery
        </Link>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="navbarSupportedContent"
          aria-expanded={open}
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </Button>
        <Collapse in={open}>
          <div className="collapse navbar-collapse" id="example-collapse-text">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
            </ul>
          </div>
        </Collapse>
      </div>
    </nav>
  );
};

Header.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = { logout };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
