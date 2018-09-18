import store from '../../src/store';
import { setCurrentUser } from '../actions/authAction';

export default function authCheck() {
  let account = web3.eth.accounts[0];
  let user = account ? { address: account } : {};

  store.dispatch(setCurrentUser(user));

  setInterval(() => {
    if (web3.eth.accounts[0] !== account) {
      [account] = web3.eth.accounts;
      user = account ? { address: account } : {};
      store.dispatch(setCurrentUser(user));
    }
  }, 100);
}
