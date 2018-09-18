import React from 'react';
import './index.scss';
import Pagination from '../../shared/Pagination/index';

const Account = () => (
  <div id="account-page">
    <div className="content">
      <div className="container account">
        {/* Nav tabs */}
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              data-toggle="tab"
              href="#account_balance"
            >
              Account Balance
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#account_activity">
              Account Activity
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#kittie_list">
              Kittie List
            </a>
          </li>
        </ul>

        {/* <!-- Tab panes --> */}
        <div className="tab-content">
          <div id="account_balance" className="tab-pane active">
            <br />
            <div className="row">
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-md-8">
                    <div className="balance text-center">
                      <div className="balance_text">Account Balance</div>
                      <div className="balance_num">1000</div>
                      <div className="token">KittieFIGHT tokens</div>
                      <div className="eth">
                        <span>3 ETH</span>
                        <span className="vertical-line" />
                        <span>$3000 USD</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="diamond">
                      <img src="img/diamond.gif" className="w-100 diamond" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 right_content">
                <div className="right_text">
                  <span className="rect" />
                  <div className="text_1">
                    You have xxx Superneum in your account
                  </div>
                  <span className="rect" />
                  <div className="text_2">
                    You earned xxx Kittyfight Tokens this week, from xxx
                    Superneum you own.
                  </div>
                </div>
                <button type="button" className="bi_3 bonus_btn">
                  Withdraw xxx bonus tokens
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="superneum_fee">
                  <div>
                    <span className="font-weight-bold">Superneum</span>
                    <span className="ml-4">
                      :You have xxx Superneum stalked, you can list fights for
                      xxx timetime
                    </span>
                  </div>
                  <div>
                    <span className="font-weight-bold">Listing Fees</span>
                    <span className="ml-4">
                      :You have xxx Superneum stalked, you can list fights for
                      xxx timetime
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row send_exchange">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-head">Send KittieFIGHT Coins</div>
                  <div className="card-body">
                    <form>
                      <input
                        type="text"
                        id="send_address"
                        placeholder="Address"
                        className="form-control w-100 mb-4"
                      />
                      <input
                        type="text"
                        id="send_amount"
                        placeholder="Amount"
                        className="form-control w-100 mb-4"
                      />
                      <button
                        type="submit"
                        className="bi_4 colorWhite w-100"
                        id="send"
                      >
                        SEND
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-head">Exchange KittieFIGHT for ETH</div>
                  <div className="card-body">
                    <form>
                      <input
                        type="text"
                        id="eth_address"
                        placeholder="ETH Address"
                        className="form-control w-100 mb-4"
                      />
                      <input
                        type="text"
                        id="eth_amount"
                        placeholder="Amount to Exchange"
                        className="form-control w-100 mb-4"
                      />
                      <button
                        type="submit"
                        className="bi_4 colorWhite w-100"
                        id="eth"
                      >
                        EXCHANGE
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="row stake_burn">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-head">Stake Superneum</div>
                  <div className="card-body">
                    <form>
                      <input
                        type="text"
                        id="stake_address"
                        placeholder="Address"
                        className="form-control w-100 mb-4"
                      />
                      <input
                        type="text"
                        id="stake_amount"
                        placeholder="Amount"
                        className="form-control w-100 mb-4"
                      />
                      <button
                        type="submit"
                        className="bi_4 colorWhite w-100"
                        id="stake"
                      >
                        STAKE
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-head">Buy Burn Fees</div>
                  <div className="card-body">
                    <form>
                      <input
                        type="text"
                        id="burn_address"
                        placeholder="Address"
                        className="form-control w-100 mb-4"
                      />
                      <input
                        type="text"
                        id="burn_amount"
                        placeholder="Exchange"
                        className="form-control w-100 mb-4"
                      />
                      <button
                        type="submit"
                        className="bi_4 colorWhite w-100"
                        id="burn"
                      >
                        BURN
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="row stake_burn">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-head">Hold</div>
                  <div className="card-body">
                    <form>
                      <input
                        type="text"
                        id="hold_amount"
                        placeholder="Amount"
                        className="number-control w-100 mb-4"
                      />
                      <button
                        type="submit"
                        className="bi_4 colorWhite w-100"
                        id="stake"
                      >
                        HOLD
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-head">Release</div>
                  <div className="card-body">
                    <form>
                      <input
                        type="number"
                        id="release_amount"
                        placeholder="Amount"
                        className="form-control w-100 mb-4"
                      />
                      <button
                        type="submit"
                        className="bi_4 colorWhite w-100"
                        id="burn"
                      >
                        RELEASE
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="guide">
                  <div className="guide_title mb-3">Guide</div>
                  <span className="rect" />
                  <div className="guide_text">
                    1000 tokens give free access for 1 day
                  </div>
                  <span className="rect" />
                  <div className="guide_text">
                    10000 tokens give free access for 1 week
                  </div>
                  <span className="rect" />
                  <div className="guide_text">
                    20000 tokens give free access{' '}
                    <span className="color_3">forever</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="guide">
                  <div className="guide_title mb-3">Guide</div>
                  <span className="rect" />
                  <div className="guide_text">
                    1000 tokens give free access for 1 day
                  </div>
                  <span className="rect" />
                  <div className="guide_text">
                    10000 tokens give free access for 1 week
                  </div>
                  <span className="rect" />
                  <div className="guide_text">
                    20000 tokens give free access{' '}
                    <span className="color_3">forever</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="account_activity" className="tab-pane fade">
            <br />
            <div className="activity_title">Account Activity</div>
            <div className="row">
              <div className="col-12">
                <div className="account_content">
                  <img src="img/background.png" className="account_img" />
                  <div className="description">
                    <div className="date mb-2">14 March, 2018, 12:19 AM</div>
                    <div className="description_text">
                      Lorem ipsum dolor sit amet, consectetur{' '}
                      <span className="color_3">adipisicing elit</span>, sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{' '}
                    </div>
                  </div>
                  <img
                    src="img/button-successfull.png"
                    className="successfull"
                  />
                </div>
              </div>
            </div>
            <div className="divide my-4" />
            <div className="row">
              <div className="col-12">
                <div className="account_content">
                  <img src="img/background.png" className="account_img" />
                  <div className="description">
                    <div className="date mb-2">14 March, 2018, 12:19 AM</div>
                    <div className="description_text">
                      Lorem ipsum dolor sit amet, consectetur{' '}
                      <span className="color_3">adipisicing elit</span>, sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{' '}
                    </div>
                  </div>
                  <img src="img/button-timed-out.png" className="time_out" />
                </div>
              </div>
            </div>
            <div className="divide my-4" />
            <div className="row">
              <div className="col-12">
                <div className="account_content">
                  <img src="img/background.png" className="account_img" />
                  <div className="description">
                    <div className="date mb-2">14 March, 2018, 12:19 AM</div>
                    <div className="description_text">
                      Lorem ipsum dolor sit amet, consectetur{' '}
                      <span className="color_3">adipisicing elit</span>, sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{' '}
                    </div>
                  </div>
                  <img src="img/button-timed-out.png" className="time_out" />
                </div>
                <div className="divide my-4" />
                <div className="row">
                  <div className="col-12">
                    <div className="account_content">
                      <img src="img/background.png" className="account_img" />
                      <div className="description">
                        <div className="date mb-2">
                          14 March, 2018, 12:19 AM
                        </div>
                        <div className="description_text">
                          Lorem ipsum dolor sit amet, consectetur{' '}
                          <span className="color_3">adipisicing elit</span>, sed
                          do eiusmod tempor incididunt ut labore et dolore magna
                          aliqua.{' '}
                        </div>
                      </div>
                      <img
                        src="img/button-timed-out.png"
                        className="time_out"
                      />
                    </div>
                  </div>
                </div>
                <div className="divide my-4" />
                <div className="row">
                  <div className="col-12">
                    <div className="account_content">
                      <img src="img/background.png" className="account_img" />
                      <div className="description">
                        <div className="date mb-2">
                          14 March, 2018, 12:19 AM
                        </div>
                        <div className="description_text">
                          Lorem ipsum dolor sit amet, consectetur{' '}
                          <span className="color_3">adipisicing elit</span>, sed
                          do eiusmod tempor incididunt ut labore et dolore magna
                          aliqua.{' '}
                        </div>
                      </div>
                      <img
                        src="img/button-timed-out.png"
                        className="time_out"
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="more_activity bi_1"
                  align="center"
                >
                  LOAD MORE ACTIVITY
                </button>
              </div>
            </div>
          </div>
          <div id="kittie_list" className="tab-pane">
            <br />
            <div className="row">
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 card-bottom-margin">
                <div className="card br_10 available_card">
                  <div className="card-head p-2 text-center text-light br_t_10">
                    <h3 className="mb-0 font-weight-bold">23355</h3>
                  </div>
                  <div className="card-body bg_5">
                    <img className="img-fluid" src="img/as-katkie-2.png" />
                  </div>
                  <div className="card-footer border-top-0">
                    <div className="row align-items-end mx-0">
                      <div className="w-50 text-left">Support</div>
                      <div className="w-50 text-right font-weight-bold">
                        70%
                      </div>
                    </div>
                    <div className="progress row mx-0">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: '75%' }}
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                    </div>
                    <div className="py-2 line_height_2">
                      <div className="row">
                        <div className="col-6 font-weight-bold text-left">
                          Name
                        </div>
                        <div className="col-6 text-right">Hadasaya</div>
                      </div>
                      <div className="divide" />
                      <div className="row">
                        <div className="col-6 font-weight-bold text-left">
                          Next Fight
                        </div>
                        <div className="col-6 text-right">774479</div>
                      </div>
                    </div>
                    <button type="button" className="kittieBtn">
                      Challenge
                    </button>
                    <div className="info">
                      <img src="img/symbol.png" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12  col-sm-6 col-md-6 col-lg-6 card-bottom-margin">
                <div className="card br_10 not_available_card">
                  <div className="card-head p-2 text-center text-light br_t_10">
                    <h3 className="mb-0 font-weight-bold">23355</h3>
                  </div>
                  <div className="card-body bg_5">
                    <img className="img-fluid" src="img/as-katkie-2.png" />
                  </div>
                  <div className="card-footer border-top-0">
                    <div className="row align-items-end mx-0">
                      <div className="w-50 text-left">Support</div>
                      <div className="w-50 text-right font-weight-bold">
                        35%
                      </div>
                    </div>
                    <div className="progress row mx-0">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: '35%' }}
                        aria-valuenow="35"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                    </div>
                    <div className="py-2 line_height_2">
                      <div className="row">
                        <div className="col-6 font-weight-bold text-left">
                          Name
                        </div>
                        <div className="col-6 text-right">Hadasaya</div>
                      </div>
                      <div className="divide" />
                      <div className="row">
                        <div className="col-6 font-weight-bold text-left">
                          Next Fight
                        </div>
                        <div className="col-6 text-right">444666</div>
                      </div>
                    </div>
                    <button type="button" className="kittieBtn">
                      Not Available
                    </button>
                    <div className="info">
                      <img src="img/symbol.png" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 card-bottom-margin">
                <div className="card br_10 available_card">
                  <div className="card-head p-2 text-center text-light br_t_10">
                    <h3 className="mb-0 font-weight-bold">23355</h3>
                  </div>
                  <div className="card-body bg_5">
                    <img className="img-fluid" src="img/as-katkie-2.png" />
                  </div>
                  <div className="card-footer border-top-0">
                    <div className="row align-items-end mx-0">
                      <div className="w-50 text-left">Support</div>
                      <div className="w-50 text-right font-weight-bold">
                        70%
                      </div>
                    </div>
                    <div className="progress row mx-0">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: '75%' }}
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                    </div>
                    <div className="py-2 line_height_2">
                      <div className="row">
                        <div className="col-6 font-weight-bold text-left">
                          Name
                        </div>
                        <div className="col-6 text-right">Hadasaya</div>
                      </div>
                      <div className="divide" />
                      <div className="row">
                        <div className="col-6 font-weight-bold text-left">
                          Next Fight
                        </div>
                        <div className="col-6 text-right">774479</div>
                      </div>
                    </div>
                    <button type="button" className="kittieBtn">
                      Challenge
                    </button>
                    <div className="info">
                      <img src="img/symbol.png" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 card-bottom-margin">
                <div className="card br_10 not_available_card">
                  <div className="card-head p-2 text-center text-light br_t_10">
                    <h3 className="mb-0 font-weight-bold">23355</h3>
                  </div>
                  <div className="card-body bg_5">
                    <img className="img-fluid" src="img/as-katkie-2.png" />
                  </div>
                  <div className="card-footer border-top-0">
                    <div className="row align-items-end mx-0">
                      <div className="w-50 text-left">Support</div>
                      <div className="w-50 text-right font-weight-bold">
                        35%
                      </div>
                    </div>
                    <div className="progress row mx-0">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: '35%' }}
                        aria-valuenow="35"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                    </div>
                    <div className="py-2 line_height_2">
                      <div className="row">
                        <div className="col-6 font-weight-bold text-left">
                          Name
                        </div>
                        <div className="col-6 text-right">Hadasaya</div>
                      </div>
                      <div className="divide" />
                      <div className="row">
                        <div className="col-6 font-weight-bold text-left">
                          Next Fight
                        </div>
                        <div className="col-6 text-right">444666</div>
                      </div>
                    </div>
                    <button type="button" className="kittieBtn">
                      Not Available
                    </button>
                    <div className="info">
                      <img src="img/symbol.png" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="pagination pagination-margin mt-5">
                {/* <div id="data-container"></div> */}
                {/* <div id="pagination-container" className="mx-auto" /> */}
                <Pagination currentPage={1} lastPage={200} perPage={10} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Account;
