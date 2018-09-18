/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import NetworkStatus from 'NetworkStatus';
import { connect } from 'react-redux';
import './index.scss';

// eslint-disable-next-line import/first
import logo from 'img/logo.png';

const PROP_TYPES = {
  address: PropTypes.string,
  isAuthenticated: PropTypes.bool.isRequired
};

const DEFAULT_PROPS = {
  address: ''
};

const Header = (props) => {
  const { isAuthenticated, address } = props;

  return (
    <nav className="navbar navbar-expand-xl navbar-dark head">
      <Link to="/" className="navbar-brand">
        <img src={logo} className="logo" />
      </Link>
      <div>
        <NetworkStatus />
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="#!" data-toggle="tooltip" className="nav-link">
              FIGHT MARKET
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#!" data-toggle="tooltip" className="nav-link">
              FIGHT EXPLORER
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about"  className="nav-link">
              ABOUT
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#!" data-toggle="tooltip" className="nav-link">
              FAQ
            </Link>
          </li>
          {!isAuthenticated && (
            <li className="nav-item">
              <Link to="/auth" className="nav-link">
                SIGN IN
              </Link>
            </li>
          )}
        </ul>
        {isAuthenticated && (
          <div className="form-inline mt-md-0 connect">
            <span className="connect_id">{address.slice(0, 10)}</span>
            <span className="connect_text">CONNECTED</span>
          </div>
        )}
      </div>
    </nav>
  );
};

Header.propTypes = PROP_TYPES;
Header.defaultProps = DEFAULT_PROPS;

function mapStateToProps({ authReducer }) {
  return {
    isAuthenticated: authReducer.isAuthenticated,
    address: authReducer.user.address
  };
}

export default connect(mapStateToProps, {})(Header);
