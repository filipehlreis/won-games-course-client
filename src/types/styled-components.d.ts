import theme from 'styles/theme';

// inferencia de tipos
type Theme = typeof theme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface, prettier/prettier
  export interface DefaultTheme extends Theme { }
}
