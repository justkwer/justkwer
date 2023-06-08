import { H1, Section, MainPageStyled } from '@core/theme';
import { Picture } from '@components';

const MainPage = () => {
  return (
    <MainPageStyled>
      <Section>
        <H1>Change Your Life</H1>
        <Picture />
      </Section>
    </MainPageStyled>
  );
};

export default MainPage;
