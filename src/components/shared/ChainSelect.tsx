/* eslint-disable tailwindcss/no-custom-classname */
import React, { useState } from 'react';

const ChainSelect = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const selectedChain = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  return (
    <div
      className="relative w-full"
      onClick={() => setIsDropDownOpen(!isDropDownOpen)}
    >
      <div
        id="form-select"
        className="form-select h-11 w-full cursor-pointer rounded-md border-none bg-primaryGray pl-9 text-sm text-black outline-none dark:bg-tertiaryGray dark:text-white"
        placeholder="Search for Chain"
      />
      <button
        className="group absolute inset-0 right-auto"
        type="button"
        aria-label="Select"
      >
        <svg
          className="ml-3 mr-2 h-4 w-4 shrink-0 fill-current text-gray-400 group-hover:text-gray-500"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
          <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
        </svg>
      </button>

      {isDropDownOpen && (
        <div className="absolute left-0 z-10 w-full overflow-hidden rounded-b-md bg-primaryGray text-black shadow dark:text-white">
          <div
            // key={chain.id}
            className="flex h-11 w-full cursor-pointer select-none flex-row justify-between bg-primaryGray py-2.5 pl-3 pr-2 hover:bg-gray-400 dark:bg-secondaryGray dark:text-white"
            onClick={() => selectedChain}
          >
            <div className="flex flex-row items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                width="19.19"
                height="32"
                className="mr-2.5 h-6 w-6"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 256 427"
              >
                <path
                  fill="#5A9DED"
                  d="M256 241.65L128 426.8V322.457l128-80.807Zm-67.84 65.08l-41.09 25.858v33.473l41.09-59.33Z"
                ></path>
                <path
                  fill="#53D3E0"
                  d="M0 241.65L128 426.8V322.457L0 241.65Zm67.84 65.08l41.09 25.858v33.473l-41.09-59.33Z"
                ></path>
                <path
                  fill="#D995D1"
                  d="m144.238 156.998l84.775 47.215l3.005 9.187l-10.094 8.812l-77.686-43.358z"
                ></path>
                <path
                  fill="#A6E276"
                  d="m111.818 156.998l-84.775 47.215l-3.005 9.187l10.094 8.812l77.686-43.358z"
                ></path>
                <path
                  fill="#FF9C92"
                  d="m128 0l128 219.203l-128 80.608V0Zm18.904 70.317V266.03l83.622-52.631l-83.622-143.083Z"
                ></path>
                <path
                  fill="#FFE94D"
                  d="M128 0L0 219.203l128 80.608V0Zm-18.904 70.317V266.03L25.474 213.4l83.622-143.083Z"
                ></path>
              </svg>
              {/* <img
                className="mr-2.5 h-6 w-6 rounded-md bg-gray-300 object-cover"
                src="#"
                // alt="chain_icon"
              /> */}
              <span className="leading-6">Ethereum</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChainSelect;
