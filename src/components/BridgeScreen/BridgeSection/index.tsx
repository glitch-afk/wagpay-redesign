/* eslint-disable tailwindcss/no-custom-classname */
import React from 'react';

import Third from '../../TokenScreen/third';
import SingleBridge from './SingleBridge';

const BridgeSection = () => {
  return (
    <section className="col-span-full w-full px-2 sm:px-8 lg:col-span-6 lg:px-0">
      {/* top bar */}
      <div className="mb-4 flex w-full items-center justify-between">
        <div className="flex items-center space-x-2">
          <span>Select bridges to swap</span>
          <button
            type="button"
            className="flex items-center justify-center space-x-2 text-xs text-primaryGray decoration-wavy hover:underline hover:underline-offset-2"
          >
            <span>Refresh routes</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              width="16"
              height="16"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 21 21"
            >
              <g
                fill="none"
                fillRule="evenodd"
                stroke="#888888"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3.5 6.5c1.378-2.412 4.024-4 7-4a8 8 0 0 1 8 8m-1 4c-1.408 2.287-4.118 4-7 4a8 8 0 0 1-8-8"></path>
                <path d="M8.5 6.5h-5v-5m9 13h5v5"></path>
              </g>
            </svg>
          </button>
        </div>
        <select
          name="filter"
          id="filter"
          className="form-select rounded-md border-none bg-secondaryDark outline-none dark:text-white"
        >
          <option
            value="gas_fees"
            className="rounded-b-md border-none bg-secondaryDark outline-none dark:text-white"
          >
            Gas Fees
          </option>
          <option
            value="bridge_fees"
            className="rounded-b-md border-none bg-secondaryDark outline-none dark:text-white"
          >
            Bridge Fees
          </option>
          <option
            value="time"
            className="rounded-b-md border-none bg-secondaryDark outline-none dark:text-white"
          >
            Time
          </option>
        </select>
      </div>
      {/* bridges */}
      <div className="no-scrollbar mb-4 max-h-[480px] min-h-fit w-full overflow-y-scroll overscroll-auto rounded-md p-3 dark:bg-secondaryDark">
        <SingleBridge />
        <SingleBridge />
        <SingleBridge />
        <SingleBridge />
        <SingleBridge />
        <SingleBridge />
      </div>
      {/* bottom panel */}
      <Third
        classes={`py-5`}
        forward={{ name: 'Swap', link: '/' }}
        back={{ name: 'Go Back', link: '/' }}
      />
    </section>
  );
};

export default BridgeSection;
