import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { formatAmount } from '../../../utils/number-format';
import './index.scss';

const DummyResults = [
  { title: 'TOTAL SUPPLY', value: 100000 },
  { title: 'DEMAND', value: 100000 },
  { title: 'TOTAL MINTED', value: 100000 },
  { title: 'TOTAL BURNED', value: 100000 },
  { title: 'TOTAL USERS', value: 100000 },
  { title: 'TOTAL KITTIES DESTROYED', value: 100000 },
  { title: 'WEEKLY BONUS TO SUPERNEUM HOLDERS', value: 100000 },
  { title: 'FIGHTS / LAST HOUR', value: 100000 },
  { title: 'MINTED / HOUR', value: 100000 },
  { title: 'BURNED / HOUR', value: 100000 },
  { title: 'SCHEDULED FIGHTS', value: 100000 },
  { title: 'TOTAL FIGHT', value: 100000 }
];

const ResultCard = ({ title, value }) => (
  <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
    <div className="card">
      <div className="card-body">
        <div>{title.toUpperCase()}</div>
        <p>{formatAmount(value)}</p>
      </div>
    </div>
  </div>
);

ResultCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
};

class FightExplorer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="fight-explorer">
        <div className="content">
          <div className="container">
            <div className="form-group row">
              <div className="col-sm-3 mt-3">
                <button type="submit" className="search btn">
                  Search
                </button>
              </div>
              <div className="col-sm-9 mt-3">
                <input
                  type="text"
                  className="form-control"
                  id="search_address"
                  placeholder="SEARCH ADDRESS"
                />
              </div>
            </div>
          </div>
          <div className="card_group">
            <div className="row">
              {DummyResults.map(data => (
                <ResultCard
                  key={data.title}
                  title={data.title}
                  value={data.value}
                />
              ))}
            </div>
          </div>
          <div className="fight_explorer_updates">
            <div className="fight_updates_text">REAL TIME UPDATES</div>
            <div className="fight_updates_box">
              <div className="title">
                <div className="w-25 p-title">Kitty Wins</div>
                <div className="w-25 p-title">Group Wins</div>
                <div className="w-25 p-title">Losses</div>
                <div className="w-25 p-title">General Updates</div>
              </div>
              <table className="table">
                {new Array(9).fill(0).map((v, i) => {
                  const key = i + Date.now();
                  return (
                    <tr key={key}>
                      <td className="w-25 colorWhite">
                        Kitty xxx won fight xxx winning xxx tokens
                      </td>
                      <td className="w-25 color_7">
                        Supporting groups for kitty xxx won xxx waggered tokens
                        with xxx participants
                      </td>
                      <td className="w-25 colorWhite">
                        Kitty xxx lost fight xxx there is xxx time to redeem
                        from kittyhell
                      </td>
                      <td className="w-25 color_8">
                        Kitty xxx locked in kitty hell forever
                      </td>
                    </tr>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FightExplorer;
