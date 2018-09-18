/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Proptypes from 'prop-types';
import './index.scss';

import Pagination from '../../shared/Pagination';

const CatCard = ({ supportPercent, ...props }) => {
  const isAvailable = props.available;
  const availabilityClass = isAvailable
    ? 'available_card'
    : 'not_available_card';
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className={`card br_10 ${availabilityClass}`}>
        <div className="card-head p-2 text-center text-light br_t_10">
          <h3 className="mb-0 font-weight-bold">23355</h3>
        </div>
        <div className="card-body bg_5">
          <img src="img/as-katkie-2.png" />
        </div>
        <div className="card-footer border-top-0">
          <div className="row align-items-end mx-0">
            <div className="w-50 text-left">Support</div>
            <div className="w-50 text-right font-weight-bold">
              {`${supportPercent}%`}
            </div>
          </div>
          <div className="progress row mx-0">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: `${supportPercent}%` }}
              aria-valuenow={supportPercent}
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
          <div className="py-2 line_height_2">
            <div className="row">
              <div className="col-6 font-weight-bold text-left">Name</div>
              <div className="col-6 text-right">Hadasaya</div>
            </div>
            <div className="divide" />
            <div className="row">
              <div className="col-6 font-weight-bold text-left">Next Fight</div>
              <div className="col-6 text-right">774479</div>
            </div>
          </div>
          <button type="button" className="kittieBtn">
            {isAvailable ? 'Challenge' : 'Not Available'}
          </button>
          <div className="info">
            <img src="img/symbol.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

CatCard.propTypes = {
  available: Proptypes.bool.isRequired,
  supportPercent: Proptypes.number.isRequired
};

class FightMarket extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onPageNavigation = this.onPageNavigation.bind(this);
  }
  onPageNavigation(pageNumber) {
    // TODO:: update and move logic
    // eslint-disable-next-line
    window.console && console.log(`Navigation attempt for page ${pageNumber}`);
    let pathName = this.props.history.location.pathname;
    pathName += `?page=${pageNumber}`;
    this.props.history.push(pathName);
  }
  render() {
    return (
      <div id="fight-market">
        <div className="content">
          <div className="container my-5">
            <div className="row">
              <div className="diamond_button">
                <img src="img/diamond.gif" className="diamond" />
                <button type="button" className="listButton">
                  List your Kittie Fighter
                </button>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-6 col-md-3 select_box">
                <select id="filter" className="w-100 form-control">
                  <option value disabled selected className="color_6">
                    Filter by
                  </option>
                  <option value="">AAA</option>
                  <option value="">BBB</option>
                  <option value="">yyy</option>
                </select>
              </div>
              <div className="col-6 col-md-3 select_box">
                <select id="sort" className="w-100 form-control">
                  <option value disabled selected className="color_6">
                    Sort by
                  </option>
                  <option value="">AAA</option>
                  <option value="">BBB</option>
                  <option value="">yyy</option>
                </select>
              </div>
              <div className="col-12 col-md-6">
                <div className="input-group search">
                  <div className="input-group-prepend">
                    <span
                      className={[
                        'input-group-text',
                        'px-5',
                        'border_search',
                        'bg_search',
                        'text-light',
                        'font-weight-bold'
                      ].join(' ')}
                    >
                      Search
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control border_search border-right-0"
                    aria-label="name"
                    placeholder="Name"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text border_search border-left-0 bg_white">
                      <i className="fa fa-search color_6" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {new Array(12).fill(0).map((v, idx) => {
                const key = `${idx}-${Date.now()}`;
                const isAvailable = !!((idx + 1) % 2);
                return (
                  <CatCard
                    key={key}
                    available={isAvailable}
                    supportPercent={isAvailable ? 75 : 35}
                  />
                );
              })}
            </div>
            <div className="pagination mt-5">
              <Pagination
                currentPage={2}
                lastPage={190}
                onPageNavigation={this.onPageNavigation}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FightMarket;
