import React from 'react';
import './index.scss';

const Auth = () => (
  <div id="auth-page">
    <div className="content">
      <div className="contentSign">
        <form>
          <div className="close" />
          <div className="welcome">Welcome to</div>
          <div className="gradient_fight">KittieFIGHT</div>
          <img src="img/diamond.gif" className="diamond" />
          <div className="text">
            Select your account in metamask same as you have on cryptokitties
          </div>
          <input
            type="text"
            placeholder="Wallet Address"
            className="form-control wal_address my-3"
          />
          <div className="text">
            Enter a referal hash if you have one (optional)
          </div>
          <input
            type="text"
            placeholder="Enter referal hash"
            className="form-control hash mt-3"
          />
          <div className="text1 my-3">
            Make sure you have kitties on the cryptokitties platform.<br />{' '}
            Select your cryptokitties address from your metamask
          </div>
          <button type="button" className="signBtn">
            SIGN IN
          </button>
        </form>
      </div>
    </div>
  </div>
);

export default Auth;
