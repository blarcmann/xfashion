import { createBox, createText, createTheme } from '@shopify/restyle'

const palette = {
  darkblue: '#0C0D34',
  white: 'white',
  body: 'rgba(12, 13, 52, 0.7)',
  bodylite: 'rgba(12, 13, 52, 0.5)',
  green: '#2CB9B0',
  greenlite: '#E7F9F7',
  graylite: 'rgba(12, 13, 52, 0.05)',
  red: '#FF0058',
  darkgray: '#8A8d90',
};


const theme = createTheme({
  colors: {
    secondary: palette.darkblue,
    white: palette.white,
    body: palette.body,
    green: palette.green,
    lightgray: palette.graylite,
    lightbody: palette.bodylite,
    lightgreen: palette.greenlite,
    darkgray: palette.darkgray,
    danger: palette.red,
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
      fontSize: 24,
      lineHeight: 30,
      fontFamily: 'SFProText-Semibold',
      color: 'secondary',
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: 'SFProText-Regular',
      color: 'body',
    },
    button: {
      fontFamily: 'SFProText-Semibold',
      fontSize: 15,
      color: 'secondary',
      textAlign: 'center',
    }
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