import React from 'react';

import ChainSelect from '../shared/ChainSelect';
import CoinSelect from '../shared/CoinSelect';

const SwapCard = () => {
  return (
    <section className="col-span-full flex w-full flex-col space-y-4 px-2 sm:px-8 lg:col-span-3 lg:px-0">
      <h1 className="mb-3 text-lg font-bold">Summary</h1>
      <div className="w-full rounded-md p-2 dark:bg-secondaryDark">
        <h2 className="mb-4 font-semibold">Selected Chains</h2>
        <div className="flex w-full justify-evenly space-x-3">
          <div className="w-1/2">
            <h3 className="mb-2 text-sm">Source Chain</h3>
            <ChainSelect />
          </div>
          <div className="w-1/2">
            <h3 className="mb-2 text-sm">Destination Chain</h3>
            <ChainSelect />
          </div>
        </div>
      </div>

      <div className="col-span-7 mt-4 flex w-full flex-col space-y-2 rounded-md bg-primaryGray p-3 dark:bg-tertiaryGray sm:mt-7">
        <h2 className="mb-4 font-semibold">Selected Tokens</h2>
        <label
          htmlFor="sender"
          className="mb-2 block text-left text-sm text-black dark:text-white"
        >
          You Send
        </label>
        <div className="flex w-full">
          <div className="relative h-12 w-3/5 shadow-sm">
            <input
              type="number"
              placeholder="0.00"
              className="block h-12 w-full rounded-l-md border-none bg-tertiaryLight px-3 text-black shadow-sm outline-none focus:border-none focus:outline-none active:outline-none dark:bg-quaternaryGray dark:text-white sm:text-sm"
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <span className="text-xs text-gray-400">MAX</span>
            </div>
          </div>
          <CoinSelect />
        </div>
        <span className="text-sm text-primaryGray">~ 95 USD</span>
        {/* svg */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          width="36"
          height="36"
          preserveAspectRatio="xMidYMid meet"
          className="flex w-full items-center"
          viewBox="0 0 24 24"
        >
          <path
            fill="#888888"
            d="m18 4l-4 4h3v8a2 2 0 0 1-2 2a2 2 0 0 1-2-2V8a4 4 0 0 0-4-4a4 4 0 0 0-4 4v8H2l4 4l4-4H7V8a2 2 0 0 1 2-2a2 2 0 0 1 2 2v8a4 4 0 0 0 4 4a4 4 0 0 0 4-4V8h3l-4-4Z"
          ></path>
        </svg>
        {/* receive section */}
        <label
          htmlFor="sender"
          className="mb-2 block text-left text-sm text-black dark:text-white"
        >
          You Receive
        </label>
        <div className="flex w-full">
          <div className="relative h-12 w-3/5 shadow-sm">
            <input
              type="number"
              placeholder="0.00"
              className="block h-12 w-full rounded-l-md border-none bg-tertiaryLight px-3 text-black shadow-sm outline-none focus:border-none focus:outline-none active:outline-none dark:bg-quaternaryGray dark:text-white sm:text-sm"
              disabled
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <span className="text-xs text-gray-400">MAX</span>
            </div>
          </div>
          <CoinSelect />
        </div>
        <span className="text-sm text-primaryGray">~ 95 USD</span>
      </div>

      <div className="flex w-full flex-col space-y-2 rounded-md p-2 dark:bg-secondaryDark">
        <div className="flex w-full items-center justify-between">
          <span>Bridge Name</span>
          <span className="text-sm font-light">HOP Bridge</span>
        </div>
        <div className="flex w-full items-center justify-between">
          <span>Bridge Fees</span>
          <span className="text-sm font-light">0.007 USDC</span>
        </div>
        <div className="flex w-full items-center justify-between">
          <span>Gas Fees</span>
          <span className="text-sm font-light">0.06 USDC</span>
        </div>
      </div>
    </section>
  );
};

export default SwapCard;
