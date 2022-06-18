import type { ReactNode } from 'react';

import Navbar from '@/components/navbar';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="mx-auto h-screen w-full px-1 antialiased dark:bg-primaryDark dark:text-white">
    {props.meta}

    <div className="mx-auto max-w-7xl">
      <Navbar />
      {props.children}
    </div>
  </div>
);

export { Main };
