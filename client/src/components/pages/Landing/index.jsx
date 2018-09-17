/* eslint-disable jsx-a11y/anchor-is-valid,react/no-array-index-key */
import React, { Component } from 'react';
import moment from 'moment';
import getWeb3 from './../../../utils/getWeb3';
import './index.scss';

import RotateElement from '../../shared/RotateElement';
import * as LandingPageModule from '../../../modules/landing';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      web3: null
    };
    this.refToSlickText = React.createRef();
  }

  componentDidMount = () => {
    getWeb3
      .then(({ web3 }) => {
        this.setState({ web3 });
      })
      .catch(() => {
        console.log('Error finding web3.', this.state.web3); // eslint-disable-line
      });

    LandingPageModule.initJquerySlick($(this.refToSlickText.current));
  };

  componentWillUnmount() {
    LandingPageModule.destroyJquerySlick($(this.refToSlickText.current));
  }

  render() {
    return (
      <div id="landing-page">
        <div className="content">
          <div className="container-home">
            <div className="aspect-ratio-box">
              <div className="aspect-ratio-box-inside">
                <div className="row">
                  <div className="col-md-6 col-12">
                    <div className="catLeft">
                      <div className="home_text_1">
                        <div
                          className="color_4 large
                           font-weight-bold display_table"
                        >
                          Fight your
                        </div>
                        <div
                          className="color_4 large
                           font-weight-bold display_table"
                        >
                          CryptoKitties
                        </div>
                        <div
                          className="color_4 large
                           font-weight-bold display_table"
                        >
                          to win precious tokens & Eth!
                        </div>
                        <div
                          className="my-3 color_7
                           font-weight-bold medium display_table"
                        >
                          (watchout for Kittiehell!)
                        </div>
                        <a href="#">
                          <div className="btn-1 mb-3">Fight Meow!</div>
                        </a>
                      </div>
                      <img src="img/cat-star.gif" className="catStar" />
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <img src="img/cat-group.gif" className="catGroup" />
                    <div className="rotate_text">
                      <div className="line_1" />
                      <div
                        id="verticalSlider"
                        className="autoplay"
                        ref={this.refToSlickText}
                      >
                        {new Array(9)
                          .fill(0)
                          .map((val, idx) => (
                            <RotateElement
                              key={idx}
                              time={moment().format('hh:mm:ss A')}
                            />
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* section 2 begin */}
        <div className="section-2">
          <div className="container">
            <div className="content-1">
              <div className="row">
                <div className="col-md-7 m-auto col-12">
                  <div className="kittieFight mb-2">What is KittieFIGHT</div>
                  <p className="text3">
                    KittieFIGHT game centered around utiliziing collectible
                    cryptokitties, in competitive fighting matches for economic
                    gains. www.cryptokitties.co cat holders can always fight to
                    earn money on this platform.
                  </p>
                </div>
                <div className="offset-1 col-md-4 col-12">
                  <div className="kittie_diamond">
                    <img src="img/home-2.gif" className="w-100" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* section 3 begin */}
        <div className="section-3">
          <img src="img/home-3.gif" className="w-100" />
          <div className="section-container">
            <div className="container">
              <div className="row">
                <div className="col-10 col-md-7">
                  <div className="butWhy mt_why">But why?</div>
                  <div className="text4">
                    KittieFIGHT incentivizes more cryptokitties.co player
                    activity via fight winning rewards, providing winners with
                    more resources to participate on www.cryptokitties.co . Also
                    oversupply cryptokitties non-fungibles is cut down
                    progressively by destroying Kitties not saved in time in
                    kittieHell.
                  </div>
                  <a href="#">
                    <div className="btn-2 mb-5">Fight Meow!</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* section 4 begin */}
        <div className="section-4">
          <div className="container">
            <div className="row mr-0">
              <div className="offset-2 col-12 col-md-8">
                <h1 className="ether">Win Tokens & Ether </h1>
                <div className="text5">
                  Winning kitties win cash in Eth and tokens, there is also a
                  nifty suprise for supporters of winning cats.<br />
                  Losing kitties have to pay their way out of KittieHell or risk
                  loosing kitties forever!
                </div>
                <a href="#">
                  <div className="btn-1 mt-4 mb-5 mx-auto">Fight Meow!</div>
                </a>
              </div>
            </div>
            <div className="row mr-0">
              <div className="col-4 kat-vs01">
                <img src="img/Kat-VS01.gif" className="w-100" />
              </div>
              <div className="col-4 kat-vs02">
                <img src="img/Kat-VS2.gif" className="w-100" />
              </div>
              <div className="col-4">
                <img src="img/Kat-Win03.gif" className="w-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
