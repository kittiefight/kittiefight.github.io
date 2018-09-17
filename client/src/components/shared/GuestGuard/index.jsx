import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const mapStateToProps = state => ({
  isAuthenticated: state.authReducer.isAuthenticated
});

export default function (ComposedComponent) {
  class GuestGuard extends Component {
    componentWillMount() {
      if (this.props.isAuthenticated) this.props.history.push('/account');
    }

    render() {
      return (
        <div>
          <ComposedComponent {...this.props} />
        </div>
      );
    }
  }

  GuestGuard.propTypes = {
    history: PropTypes.shape({ push: PropTypes.func }).isRequired,
    isAuthenticated: PropTypes.bool.isRequired
  };

  return connect(mapStateToProps, {})(GuestGuard);
}
