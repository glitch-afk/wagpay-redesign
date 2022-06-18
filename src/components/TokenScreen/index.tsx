import React from 'react';

const index = () => {
  return (
    <section className="w-full text-center dark:bg-secondaryDark">
      <h1>Select Token</h1>
      <div className="grid grid-cols-3">
        <div className="flex w-full flex-col items-center justify-center">
          Source Chain
          <input type="text" placeholder="Search for Chains" />
        </div>
        <div className="flex w-full items-center justify-center">2</div>
        <div className="flex w-full flex-col items-center justify-center">
          Destination Chain
          <input type="text" placeholder="Search for Chains" />
        </div>
      </div>
    </section>
  );
};

export default index;
