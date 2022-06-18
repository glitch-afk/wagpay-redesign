import First from './first';
import Second from './second';

const index = () => {
  return (
    <div className="flex flex-col space-y-6">
      {/* section 1 */}
      <First />
      {/* section 2 */}
      <Second />
    </div>
  );
};

export default index;
