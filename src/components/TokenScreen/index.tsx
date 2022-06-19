import First from './first';
import Second from './second';
import Third from './third';

const index = () => {
  return (
    <div className="mt-4 flex flex-col space-y-6 pb-6 md:pb-0 lg:mt-12">
      {/* section 1 */}
      <First />
      {/* section 2 */}
      <Second />
      {/* section 3 */}
      <Third />
    </div>
  );
};

export default index;
