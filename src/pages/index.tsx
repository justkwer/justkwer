import { MainLayout } from '@layout';
import { H1, Section } from '@core/theme';
import { Picture } from '@components';
import { MainPageStyled } from './styled';

const MainPage = () => {
  return (
    <MainLayout>
      <MainPageStyled>
        <Section>
          <H1>Change Your Life</H1>
          <Picture />
        </Section>
      </MainPageStyled>
    </MainLayout>
  );
};

export default MainPage;
