/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

import ImageSuperDAO from './../../../../public/img/superdao.png'; // eslint-disable-line

const Footer = () => (
  <footer>
    <div className="footer-wrapper">
      <div className="row mr-0">
        <div className="container">
          <div className="row footer-content">
            <div className="col-md-3 col-12 mb-30">
              <div className="footer-menu-header">
                <span>Navigation</span>
              </div>
              <div className="footer-menu-item">
                <Link to="#!" data-toggle="tooltip">
                  My Account
                </Link>
              </div>
              <div className="footer-menu-item">
                <Link to="#!" data-toggle="tooltip">
                  Activity
                </Link>
              </div>
              <div className="footer-menu-item">
                <Link to="#!" data-toggle="tooltip">
                  Fighting Ground
                </Link>
              </div>
              <div className="footer-menu-item">
                <Link to="#!" data-toggle="tooltip">
                  FAQ
                </Link>
              </div>
              <div className="footer-menu-item">
                <Link data-toggle="tooltip" to="#!">
                  Help/Support
                </Link>
              </div>
            </div>
            <div className="col-md-2 col-12 mb-30">
              <div className="footer-menu-header">
                <span>Our</span>
              </div>
              <div className="footer-menu-item">
                <Link to="/about">About</Link>
              </div>
              <div className="footer-menu-item">
                <Link to="#!"  data-toggle="tooltip">
                  Fight Paper
                </Link>
              </div>
              <div className="footer-menu-item">
                <Link to="#!" data-toggle="tooltip">
                  Updates
                </Link>
              </div>
              <div className="footer-menu-item">
                <Link to="#!" data-toggle="tooltip">
                  Press
                </Link>
              </div>
            </div>
            <div className="col-md-4 col-12 mb-30 need-help-wrapper">
              <div className="footer-menu-header">
                <span>Need Help?</span>
              </div>
              <div className="need-help-text">
                <span>
                  If you need help with something else please see our fully
                  searchable FAQs or drop us a line at <a href="mailto:kittieFight@protonmail.com">kittieFight@protonmail.com</a> and we&#39;ll be happy to help you out!
                </span>
              </div>
            </div>
            <div className="col-md-3 col-12">
              <div className="footer-menu-header">
                <span>Social Media</span>
              </div>
              <div className="footer-menu-item">
                <i className="fa fa-twitter icon-item" aria-hidden="true" />
                <a href="https://twitter.com/kittiefightHQ" target="_blank">
                  Twitter
                </a>
              </div>
              <div className="footer-menu-item">
                <i
                  className="fa fa-facebook-official icon-item"
                  aria-hidden="true"
                />
                <a href="https://www.facebook.com/kittiefight" target="_blank">
                  Facebook
                </a>
              </div>
              <div className="footer-menu-item">
                <i className="fa fa-paper-plane icon-item" aria-hidden="true" />
                <a href="http://t.me/kittiefight" target="_blank">
                  Telegram
                </a>
              </div>
              <div className="footer-menu-item">
                <i
                  className="fa fa-reddit-alien icon-item"
                  aria-hidden="true"
                />
                <a href="https://www.reddit.com/r/kittiefight" target="_blank">
                  Reddit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom-wrapper">
      <div className="footer-bottom-text-wrapper">
        <span className="mr-5">A SuperDAO Dapp Product</span>
        <img src={ImageSuperDAO} className="footerLogo" />
      </div>
    </div>
  </footer>
);

export default Footer;
