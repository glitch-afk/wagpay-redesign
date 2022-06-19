import ChainSelect from '../shared/ChainSelect';
import CoinSelect from '../shared/CoinSelect';

const First = () => {
  return (
    <section className="w-full rounded-lg py-8 px-2 text-center dark:bg-secondaryDark">
      <h1 className="text-lg font-medium">Select Token</h1>
      <div className="grid justify-items-center md:grid-cols-3">
        {/* section #1 */}
        <div className="mt-8 flex w-full flex-col items-center justify-center px-6 md:mt-0">
          <span className="mb-2">Source Chain</span>
          <ChainSelect />
        </div>

        {/* section #2 */}
        <div className="mt-4 flex w-full flex-col items-center justify-center space-y-3 md:mt-0">
          {/* send section */}
          <div className="col-span-7 mt-4 w-full rounded-md p-3 dark:bg-tertiaryGray sm:mt-7">
            <label
              htmlFor="sender"
              className="mb-2 block text-left text-sm text-white"
            >
              You Send
            </label>
            <div className="flex w-full">
              <div className="relative h-12 w-3/5 shadow-sm">
                <input
                  type="number"
                  placeholder="0.00"
                  className="block h-12 w-full rounded-l-md border-none bg-quaternaryGray px-3 text-white shadow-sm outline-none focus:border-none focus:outline-none active:outline-none sm:text-sm"
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <span className="text-xs text-gray-400">MAX</span>
                </div>
              </div>
              <CoinSelect />
            </div>
          </div>
          {/* svg */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="24"
            height="24"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              fill="#888888"
              d="m18 4l-4 4h3v8a2 2 0 0 1-2 2a2 2 0 0 1-2-2V8a4 4 0 0 0-4-4a4 4 0 0 0-4 4v8H2l4 4l4-4H7V8a2 2 0 0 1 2-2a2 2 0 0 1 2 2v8a4 4 0 0 0 4 4a4 4 0 0 0 4-4V8h3l-4-4Z"
            ></path>
          </svg>
          {/* svg end */}
          {/* receive section */}
          <div className="col-span-7 mt-4 w-full rounded-md p-2 dark:bg-tertiaryGray sm:mt-7">
            <label
              htmlFor="sender"
              className="mb-2 block text-left text-sm text-white"
            >
              You Receive
            </label>
            <div className="flex w-full">
              <div className="relative h-12 w-3/5 shadow-sm">
                <input
                  type="number"
                  placeholder="0.00"
                  disabled
                  className="block h-12 w-full rounded-l-md border-none bg-quaternaryGray px-3 text-white shadow-sm outline-none focus:border-none focus:outline-none active:outline-none sm:text-sm"
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <span className="text-xs text-gray-400">MAX</span>
                </div>
              </div>
              <CoinSelect />
            </div>
          </div>
          {/* receive section end */}
        </div>
        {/* section #3 */}
        <div className="mt-6 flex w-full flex-col items-center justify-center px-6 md:mt-0">
          <span className="mb-2">Destination Chain</span>
          <ChainSelect />
        </div>
      </div>
    </section>
  );
};

export default First;
