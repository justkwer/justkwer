import { MainLayout } from '@layout';
import { H1 } from '@core/theme';
import { Picture } from '@components';

const MainPage = () => {
  return (
    <MainLayout>
      <H1>Change Your Life</H1>
      <Picture />
    </MainLayout>
  );
};

export default MainPage;
