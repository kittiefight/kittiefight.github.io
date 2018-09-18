import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const mapStateToProps = state => ({
  isAuthenticated: state.authReducer.isAuthenticated
});

export default function (ComposedComponent) {
  class AuthGuard extends Component {
    componentWillMount() {
      if (!this.props.isAuthenticated) this.props.history.push('/auth');
    }

    componentWillReceiveProps(nextProps) {
      if (!nextProps.isAuthenticated) this.props.history.push('/auth');
    }

    render() {
      return (
        <div>
          <ComposedComponent {...this.props} />
        </div>
      );
    }
  }

  AuthGuard.propTypes = {
    history: PropTypes.shape({ push: PropTypes.func }).isRequired,
    isAuthenticated: PropTypes.bool.isRequired
  };

  return connect(mapStateToProps, {})(AuthGuard);
}
