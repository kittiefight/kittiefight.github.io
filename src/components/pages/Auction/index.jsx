import React from 'react';
import './index.scss';

import Bids from 'Bids';

const Auction = () => (
  <main className="auction-container bg-grey-lightest pb-8">
    <section className="top-container flex p-6 relative">
      <div className="w-1/3 py-8 px-6 bg-blue text-white radius-xm big-el-shadow relative">
        <h2 className="mb-4 text-base uppercase tracking-wide">
          <b>KittieFight</b> Auction
        </h2>
        <form action="">
          <div className="flex">
            <fieldset className="flex">
              <input
                type="checkbox"
                id="cbx"
                style={{ display: 'none' }}
                checked
              />
              <label htmlFor="cbx" className="check">
                <svg width="18px" height="18px" viewBox="0 0 18 18">
                  <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z" />
                  <polyline points="1 9 7 14 15 4" />
                </svg>
              </label>
              <span className="text-xs">Bidding</span>
            </fieldset>

            {/* <fieldset>
              <input type="checkbox" id="cbx" style={{ display: 'none' }} />
              <label for="cbx" className="check">
                <svg width="18px" height="18px" viewBox="0 0 18 18">
                  <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z" />
                  <polyline points="1 9 7 14 15 4" />
                </svg>
              </label>
            </fieldset> */}
          </div>
          <div className="mt-6">
            <fieldset>
              <label htmlFor="amount" className="block">
                Amount
              </label>
              <input
                id="id"
                type="text"
                value="1 eth"
                className="w-full text-white text-xl bold"
              />
            </fieldset>
          </div>
          <button className="mt-6 px-4 py-2 bg-white text-grey-darker radius-xm small-el-shadow cursor-pointer">
            Bid
          </button>
        </form>
      </div>
      <div className="w-1/3 flex flex-wrap justify-center items-center py-8">
        <div className="flex flex-col justify-between">
          <div className="my-4">
            <h3 className="text-sm text-grey-dark">Max Bid</h3>
            <span className="text-grey-darker">
              <b className="bold text-grey-darkest text-5xl">56</b> Eth
            </span>
          </div>

          <div className="my-4">
            <h3 className="text-sm text-grey-dark">Min Bid</h3>
            <span className="text-grey-darker">
              <b className="bold text-grey-darkest text-4xl">2</b> Eth
            </span>
          </div>

          <div className="my-4">
            <h3 className="text-sm text-grey-dark">Last Bid</h3>
            <span className="text-grey-darker">
              <b className="bold text-grey-darkest text-4xl">24</b> Eth
            </span>
          </div>
        </div>
      </div>
      <div className="w-1/3 flex flex-wrap justify-center items-center py-8 bg-grey-lighter">
        <div>
          <div className="p-8 bg-grey-lighter text-pink">
            <h3 className="text-sm ">Total bids</h3>
            <b className="text-6xl ">183</b>
          </div>
        </div>
      </div>
    </section>
    <section className="px-6">
      <div>
        <h2 className="bold text-2xl text-grey-darker">Bids</h2>
      </div>
      <Bids />
    </section>
  </main>
);

export default Auction;
