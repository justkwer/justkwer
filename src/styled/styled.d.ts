import 'styled-components';

import { InterfaceTheme, ThemeEnum } from '../interfaces/styled.model';

declare module 'styled-components' {
  export interface DefaultTheme extends InterfaceTheme {
    type: ThemeEnum;
  }
}
