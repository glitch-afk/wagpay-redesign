/* eslint-disable tailwindcss/no-custom-classname */
import { useState } from 'react';

const Second = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <section className="w-full rounded-lg bg-secondaryLight py-8 text-center dark:bg-secondaryDark">
      <div className="grid w-full grid-cols-7 gap-x-6 px-4 md:px-0">
        {/* left side */}
        <div className="col-span-full w-full space-y-4 md:col-span-4">
          <div className="flex w-full justify-between space-x-4 md:justify-around">
            <h2 className="text-left text-lg">Select bridge automatically</h2>
            <div className="flex items-center">
              <div className="form-switch focus-within:outline-blue">
                <input
                  type="checkbox"
                  id="switch-1"
                  className="sr-only"
                  checked={toggle}
                  onChange={() => setToggle(!toggle)}
                />
                <label className="bg-gray-400" htmlFor="switch-1">
                  <span
                    className="bg-white shadow-sm"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Switch label</span>
                </label>
              </div>
              {/* <div className="ml-2 text-sm italic text-gray-400">
                {toggle ? 'On' : 'Off'}
              </div> */}
            </div>
          </div>
          <div className="items- flex justify-between space-x-4 md:justify-around">
            <h2 className="text-left text-lg">Give priority to</h2>
            <div className="flex">
              <div className="m-3">
                {/* Start */}
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="radio-buttons"
                    className="form-radio border border-wagpayPurple bg-transparent text-indigo-500"
                  />
                  <span className="ml-2 text-sm">Gas Fee</span>
                </label>
                {/* End */}
              </div>
              <div className="m-3">
                {/* Start */}
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="radio-buttons"
                    className="form-radio border border-wagpayPurple bg-transparent text-indigo-500"
                  />
                  <span className="ml-2 text-sm">Time</span>
                </label>
                {/* End */}
              </div>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="col-span-full mt-8 w-full md:col-span-3 md:mt-0">
          <table className="w-full table-auto justify-self-center md:w-3/4">
            <tbody className="w-full">
              <tr className="text-left">
                <td className="text-md">Bridge Name</td>
                <td className="text-right text-sm md:text-left">Hop Bridge</td>
              </tr>
              <tr className="text-left">
                <td className="text-md">Bridge Fees</td>
                <td className="text-right text-sm md:text-left">0.007</td>
              </tr>
              <tr className="text-left">
                <td className="text-md">Gas Fees</td>
                <td className="text-right text-sm md:text-left">0.06</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Second;
