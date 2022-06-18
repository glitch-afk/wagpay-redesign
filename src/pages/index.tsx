import TokenScreen from '@/components/TokenScreen';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main meta={<Meta title="Wagpay" description="Wagpay Landing page" />}>
      <TokenScreen />
    </Main>
  );
};

export default Index;
