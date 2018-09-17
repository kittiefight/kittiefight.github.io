import React, { Component } from 'react';
import getWeb3 from 'utils/getWeb3';

const networkTypes = ['Not connected!', 'Connected'];

const getNetworkStatus = async (setStatus) => {
  const { web3 } = await getWeb3;
  if (web3.eth.accounts.length === 0) return setStatus(networkTypes[0]);
  return web3.version.getNetwork((err, networkID) => {
    if (err || Number(networkID) !== 1) return setStatus(networkTypes[0]);
    return setStatus(networkTypes[1]);
  });
};

let accountInterval = null;

class NetworkStatus extends Component {
  state = {
    networkStatus: 'loading'
  };

  componentDidMount() {
    const { stateSetNetworkStatus } = this;
    getNetworkStatus(stateSetNetworkStatus);

    getWeb3.then(({ web3 }) => {
      let [account] = web3.eth.accounts;
      accountInterval = setInterval(() => {
        if (web3.eth.accounts[0] !== account) {
          [account] = web3.eth.accounts;
          getNetworkStatus(stateSetNetworkStatus);
        }
      }, 100);
    });
  }

  componentWillUnmount() {
    clearInterval(accountInterval);
  }

  stateSetNetworkStatus = (networkStatus) => {
    this.setState(state => ({ ...state, networkStatus }));
  };

  render() {
    const { networkStatus } = this.state;
    return (
      <span
        className={`${
          networkStatus === networkTypes[0] ? 'bad' : 'okay'
        } network`}
      >
        <i className="network-dot" />
        <span className="network-status">{networkStatus}</span>
      </span>
    );
  }
}

export default NetworkStatus;
