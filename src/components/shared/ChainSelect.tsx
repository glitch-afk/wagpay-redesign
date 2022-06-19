/* eslint-disable tailwindcss/no-custom-classname */
import React, { useState } from 'react';

const chainList = [
  {
    id: 1,
    name: 'Ethereum',
    icon: 'https://movricons.s3.ap-south-1.amazonaws.com/Ether.svg',
  },
  {
    id: 2,
    name: 'Polygon',
    icon: 'https://movricons.s3.ap-south-1.amazonaws.com/Matic.svg',
  },
];

const ChainSelect = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [value, setValue] = useState();
  const [icon, setIcon] = useState();

  const selectedChain = (chain: any) => {
    setValue(chain.name);
    setIcon(chain.icon);
    setIsDropDownOpen(!isDropDownOpen);
  };

  return (
    <div
      className="relative w-full"
      onClick={() => setIsDropDownOpen(!isDropDownOpen)}
    >
      <div
        id="form-select"
        className="form-select flex h-11 w-full cursor-pointer items-center justify-center rounded-md border-none bg-primaryGray pl-9 text-black outline-none dark:bg-tertiaryGray dark:text-white"
        placeholder="Search for Chain"
      >
        {value && (
          <img
            src={icon}
            alt="chain"
            className="ml-3 mr-2 shrink-0 rounded-md fill-current text-gray-400 group-hover:text-gray-500"
          />
        )}
        <span>{value}</span>
      </div>
      <button
        className="group absolute inset-0 right-auto"
        type="button"
        aria-label="Select"
      >
        {value ? (
          <></>
        ) : (
          <img
            src={icon}
            alt="chain"
            className="ml-3 mr-2 shrink-0 fill-current text-gray-400 group-hover:text-gray-500"
          />
        )}
      </button>

      {isDropDownOpen && (
        <div className="absolute left-0 z-10 w-full overflow-hidden rounded-b-md bg-primaryGray text-black shadow dark:text-white">
          {chainList.map((chain: any) => (
            <div
              key={chain.id}
              className="flex h-11 w-full cursor-pointer select-none flex-row justify-between bg-primaryGray py-0 pl-3 pr-2 hover:bg-gray-400 dark:bg-secondaryGray dark:text-white"
              onClick={() => selectedChain(chain)}
            >
              <div className="flex h-full flex-row items-center">
                <img
                  className="mr-2.5 w-5 rounded-md object-cover"
                  src={chain.icon}
                  alt="chain_icon"
                />
                <span className="leading-6">{chain.name}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChainSelect;
