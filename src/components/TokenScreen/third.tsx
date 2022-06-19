import Link from 'next/link';
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

const Third = ({
  classes,
  forward,
  back,
}: {
  classes: string;
  forward: any;
  back: any;
}) => {
  return (
    <section
      className={`${classes} w-full rounded-lg bg-secondaryLight px-2 text-center dark:bg-secondaryDark`}
    >
      <div className="mx-auto flex w-full flex-col items-center justify-between space-y-5 lg:w-10/12 lg:flex-row lg:space-y-0">
        {/* left */}
        <div className="text-center text-sm dark:text-primaryGray lg:w-4/5 lg:text-left">
          Swap __USDC from polygon mainnet to USDC of ethereum mainnet using Hop
          bridge.
          <span className="block">You will receive __ USDC on ethereum</span>
        </div>
        {/* right */}
        <div className="flex space-x-4">
          <Link href={back.link}>
            <a>
              <Button classes={`bg-primaryGray dark:bg-tertiaryGray`}>
                {back.name}
              </Button>
            </a>
          </Link>
          <Link href={forward.link}>
            <a>
              <Button classes={`bg-secondaryGray text-white`}>
                {forward.name}
              </Button>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Third;
