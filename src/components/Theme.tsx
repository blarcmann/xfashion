import { createBox, createText, createTheme } from '@shopify/restyle'

const palette = {
  darkblue: '#0C0D34',
  gray: 'rgba(12, 13, 52, 0.33)',
  lightblue: '#BFEAF5',
  white: 'white',
  body: 'rgba(12, 13, 52, 0.7)',
  bodylite: 'rgba(12, 13, 52, 0.5)',
  green: '#2CB9B0',
  greenlite: '#E7F9F7',
  graylite: 'rgba(12, 13, 52, 0.05)',
  red: '#FF0058',
  darkgray: '#8A8d90',
  orange: '#FE5E33',
  yellow: '#FFC641',
  pink: '#FF87A2',
  violet: '#442CB9',
  dirtywhite: '#FAFAFA',
};


const theme = createTheme({
  colors: {
    secondary: palette.darkblue,
    white: palette.white,
    body: palette.body,
    green: palette.green,
    lightblue: palette.lightblue,
    lightgray: palette.graylite,
    lightbody: palette.bodylite,
    lightgreen: palette.greenlite,
    darkgray: palette.darkgray,
    gray: palette.gray,
    danger: palette.red,
    orange: palette.orange,
    yellow: palette.yellow,
    pink: palette.pink,
    violet: palette.violet,
    dirtywhite: palette.dirtywhite,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    none: 0,
    s: 4,
    m: 10,
    l: 25,
    xl: 40,
  },
  textVariants: {
    hero: {
      fontSize: 80,
      lineHeight: 80,
      fontFamily: 'SFProText-Bold',
      color: 'white',
      textAlign: 'center',
    },
    title: {
      fontSize: 24,
      fontFamily: 'SFProText-Semibold',
      color: 'secondary',
    },
    title2: {
      fontSize: 18,
      lineHeight: 30,
      fontFamily: 'SFProText-Semibold',
      color: 'secondary',
    },
    body: {
      fontSize: 15,
      lineHeight: 24,
      fontFamily: 'SFProText-Regular',
      color: 'body',
    },
    button: {
      fontFamily: 'SFProText-Semibold',
      fontSize: 15,
      color: 'secondary',
      textAlign: 'center',
    },
    header: {
      fontSize: 12,
      fontFamily: 'SFProText-Semibold',
      lineHeight: 24,
      textTransform: 'uppercase',
      color: 'secondary',
    },
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
});

export type Theme = typeof theme;
export const Text = createText<Theme>();
export const Box = createBox<Theme>();
export default theme;