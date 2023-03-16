import 'styled-components';

import { InterfaceTheme, ThemeEnum } from '../interfaces';

declare module 'styled-components' {
  export interface DefaultTheme extends InterfaceTheme {
    type: ThemeEnum;
  }
}
