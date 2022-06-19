/* eslint-disable tailwindcss/no-custom-classname */
import React, { useState } from 'react';

const CoinSelect = () => {
  const [isDropDownOpenCoin, setIsDropDownOpenCoin] = useState(false);

  const selectedCoin = () => {
    setIsDropDownOpenCoin(!isDropDownOpenCoin);
  };

  return (
    <>
      <div className="relative w-2/5">
        <div
          className="flex flex-row overflow-hidden rounded-r-md"
          onClick={() => {
            setIsDropDownOpenCoin(!isDropDownOpenCoin);
          }}
        >
          <div className="form-select flex h-12 w-full cursor-pointer select-none flex-row justify-between border-none  bg-quaternaryGray px-1 text-white">
            <div className="flex flex-row items-center">
              <img
                className="mr-2.5 rounded-md bg-gray-300 object-cover"
                src="https://movricons.s3.ap-south-1.amazonaws.com/Ether.svg"
                alt="chain_icon"
              />
              <span className="text-xs leading-6">USDC</span>
            </div>
          </div>
        </div>
        {isDropDownOpenCoin && (
          <div className="absolute top-12 left-0 z-10 w-full overflow-hidden rounded-b-md text-white shadow dark:bg-secondaryGray">
            <div
              // key={coin.chainAgnositcId}
              className="flex h-11 w-full cursor-pointer select-none flex-row justify-between py-2.5 pl-3 pr-2 text-white hover:bg-gray-900 dark:bg-secondaryGray"
              onClick={() => selectedCoin}
            >
              <div className="flex flex-row items-center">
                <img
                  className="mr-2.5 h-6 w-6 rounded-md bg-gray-300 object-cover"
                  src="https://movricons.s3.ap-south-1.amazonaws.com/Ether.svg"
                  alt="chain_icon"
                />
                <span className="text-sm leading-6">USDC</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CoinSelect;
