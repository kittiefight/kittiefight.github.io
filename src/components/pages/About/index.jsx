import React, { Component } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

import * as AboutPageModule from './../../../modules/about';
import TeamMembers from './team-members'

const AVATAR_PATH = 'img/team-members/'
const DEFAULT_AVATAR = AVATAR_PATH + 'blank-avatar.jpg'

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.refToSlickTeam = React.createRef();
  }
  componentDidMount() {
    AboutPageModule.initJquerySlick(this.refToSlickTeam.current);
  }
  componentWillUnmount() {
    AboutPageModule.destroyJquerySlick(this.refToSlickTeam.current);
  }

  render() {
    return (
      <div id="about-page">
        <div className="content">
          <div className="content_tab">
            <div className="tab">
              <ul>
                <li>
                  <a href="#/about">
                    <img src="img/tab_img1.png" />
                    <span>About</span>
                  </a>
                </li>
                <li className="mx-3">
                  <a href="#!" data-toggle="tooltip">
                    <img src="img/tab_img2.png" />
                    <span>Technical Details</span>
                  </a>
                </li>
                <li>
                  <a href="#!" data-toggle="tooltip">
                    <img src="img/tab_img3.png" />
                    <span>Fight Paper</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="arrow_down">
              <i className="fa fa-angle-down" />
            </div>
          </div>
          <div className="content_1">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="about_img">
                    <img src="img/about_kat.gif" className="mb-1" />
                  </div>
                  <div className="team_head">Team KittieFight</div>
                  <p>
                    In kittieFIGHT, tokens are awarded to winners of each fight
                    session that utilizes customized fighting kittie characters
                    derived from the Cryptokitties platform. kittieFIGHT is
                    gamified with a unique economic token model utilizing
                    limited supply with suppressed emissions and incentivized
                    crowd dynamics to drive up each value of token necessary to
                    reward owners of Cryptokitties fungible tokens.{' '}
                  </p>
                  <p>
                    The kittieFIGHT Dapp also solves the problem of oversupply
                    of Cryptokitties via euthanasia/kittie-sink called
                    kittieHELL. The sink effect from fights also serves to
                    create demand for new kitties on the Cryptokitties platform.
                    Winners of fights on the kittieFIGHT platform can trade
                    winning tokens to buy more Cryptokitties collectibles.
                    kittieFIGHT Cryptokitties-based, crowd-driven, real-time
                    fighting Dapp game is brought to you by the team below and
                    others from SuperDAO.
                  </p>
                  <div className="team">
                    <div className="team_profile" ref={this.refToSlickTeam}>
                      {TeamMembers.map((member) => {
                        const key = member.name;
                        const imgName = member.avatar ? AVATAR_PATH + member.avatar : DEFAULT_AVATAR;
                        return (
                          <div key={key} className="px-2 py-1">
                            <div className="team_member">
                              <div className="team_member__avatar">
                                <img src={window.location.origin + window.location.pathname + imgName} />
                              </div>
                              <a href={member.url || 'javascript:void(0)'} target="_blank" rel="noindex,nofollow">
                                <div className="member_name">{ member.name }</div>
                              </a>
                              <div className="member_desc">{ member.info }</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="team_bottom">
                    <p className="color_6"> KittieFIGHT Fight-Festo</p>
                    <div className="team_head">
                      THE KittieFIGHT Team @SuperDAO
                    </div>
                    <div className="team_bottom_text">
                      <div className="row">
                        <div className="col-12 col-md-5">
                          <br />
                          We are excited to apply our combined experience in the
                          blockchain industry to gaming applications that are
                          completely immersive for the user experience yet
                          economically profitable. We achieve this with the
                          combination of sound game theory, crowd dynamics and
                          massive user incentive driven by crypto economics to
                          deliver outcomes to the benefit of consumer which
                          ultimately brings more utility and prosperity to the
                          Cryptokitties platform.
                        </div>
                        <div className="col-12 col-md-5 offset-md-1">
                          <br />
                          We believe Cryptokitties has capitalized on a massive
                          opportunity by tokenizing cat memes; one of the
                          biggest internet mainstays by ascribing unique genes
                          generation to each non-fungible cat token created. We
                          are determined to bring more value to the platform by
                          solving any problems of oversupply and bringing more
                          utility for the tokens and rewards to the users of the
                          cryptokitties platform.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
