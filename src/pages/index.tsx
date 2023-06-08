import { H1, Section } from '@core/theme';
import { Picture } from '@components';
import { MainPageStyled } from './styled';

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
