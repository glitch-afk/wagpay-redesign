/* eslint-disable tailwindcss/no-custom-classname */
import React, { useState } from 'react';

const coins = [
  {
    id: 1,
    name: 'USDC',
    icon: 'https://movricons.s3.ap-south-1.amazonaws.com/Ether.svg',
  },
  {
    id: 2,
    name: 'USDT',
    icon: 'https://movricons.s3.ap-south-1.amazonaws.com/Matic.svg',
  },
];

const CoinSelect = () => {
  const [isDropDownOpenCoin, setIsDropDownOpenCoin] = useState(false);
  const [value, setValue] = useState('USDC');
  const [icon, setIcon] = useState(
    'https://movricons.s3.ap-south-1.amazonaws.com/Ether.svg'
  );

  const selectedCoin = (coin: any) => {
    setValue(coin.name);
    setIcon(coin.icon);
    setIsDropDownOpenCoin(!isDropDownOpenCoin);
  };

  return (
    <>
      <div className="relative w-2/5">
        <div
          className="flex flex-row overflow-hidden rounded-r-md"
          onClick={() => setIsDropDownOpenCoin(!isDropDownOpenCoin)}
        >
          <div className="form-select flex h-12 w-full cursor-pointer select-none flex-row justify-between border-none bg-tertiaryLight px-1 text-black dark:bg-quaternaryGray dark:text-white">
            <div className="flex flex-row items-center">
              <img
                className="mr-2.5 rounded-md object-cover"
                src={icon}
                alt="chain_icon"
              />
              <span className="text-xs leading-6">{value}</span>
            </div>
          </div>
        </div>
        {isDropDownOpenCoin && (
          <div className="absolute top-12 left-0 z-10 w-full overflow-hidden rounded-b-md bg-tertiaryLight text-black shadow dark:bg-secondaryGray dark:text-white">
            {coins.map((coin) => (
              <div
                key={coin.id}
                className="flex h-11 w-full cursor-pointer select-none flex-row justify-between bg-tertiaryLight py-2.5 pl-3 pr-2 text-white hover:bg-gray-400 dark:bg-secondaryGray"
                onClick={() => selectedCoin(coin)}
              >
                <div className="flex flex-row items-center">
                  <img
                    className="mr-2.5 h-6 w-6 rounded-md bg-gray-300 object-cover"
                    src={coin.icon}
                    alt="chain_icon"
                  />
                  <span className="text-sm leading-6">{coin.name}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CoinSelect;
