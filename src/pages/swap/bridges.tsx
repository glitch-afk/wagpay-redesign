import BridgeScreen from '@/components/BridgeScreen/';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main meta={<Meta title="Wagpay" description="Wagpay Landing page" />}>
      <BridgeScreen />
    </Main>
  );
};

export default Index;
