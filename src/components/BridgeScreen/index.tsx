import React from 'react';

import BridgeSection from './BridgeSection';
import SwapCard from './SwapCard';

const index = () => {
  return (
    <div className="mt-4 grid w-full grid-cols-9 content-start gap-y-10 pb-6 md:pb-0 lg:mt-12 lg:gap-y-0 lg:gap-x-3">
      <SwapCard />
      <BridgeSection />
    </div>
  );
};

export default index;
