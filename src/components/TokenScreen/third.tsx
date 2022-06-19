import React from 'react';

const Button = ({
  children,
  classes,
}: {
  children: React.ReactNode;
  classes: String;
}) => {
  return (
    <button className={`${classes} w-max px-6 py-2 rounded-md`}>
      {children}
    </button>
  );
};

const Third = () => {
  return (
    <section className="w-full rounded-lg bg-secondaryLight py-8 px-2 text-center dark:bg-secondaryDark">
      <div className="mx-auto flex w-full flex-col items-center justify-between space-y-5 lg:w-10/12 lg:flex-row lg:space-y-0">
        {/* left */}
        <div className="text-center text-sm dark:text-primaryGray lg:w-4/5 lg:text-left">
          Swap __USDC from polygon mainnet to USDC of ethereum mainnet using Hop
          bridge.
          <span className="block">You will receive __ USDC on ethereum</span>
        </div>
        {/* right */}
        <div className="flex space-x-4">
          <Button classes={`bg-primaryGray dark:bg-tertiaryGray`}>
            Cancel
          </Button>
          <Button classes={`bg-secondaryGray text-white`}>
            Select Bridges
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Third;
