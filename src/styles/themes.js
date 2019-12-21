import { colorUtils } from '@utils';

/* Colors */
const colors = {
  white: '#ffffff',
  blueGrey: '#ebeff0',
  darkBlueGrey: '#7f8a9a',
  green: '#A0D468',
  darkGreen: '#8CC152',
  red: '#ED5565',
  darkRed: '#DA4453',
  highlight: 'rgba(255, 255, 255, 0.3)',
  darkHighlight: 'rgba(0, 0, 0, 0.15)'
};

/* Styled Components Theme Variables */
const themes = {
  grey: {
    backgroundColor: colors.blueGrey,
    textColor: colors.darkBlueGrey,
    remarksColor: `rgba(${colorUtils.getRgb(colors.darkBlueGrey)}, 0.5)`,
    linkColor: colors.darkBlueGrey,
    linkHoverColor: colors.darkBlueGrey,
    highlightColor: colors.darkHighlight
  },
  green: {
    backgroundColor: colors.darkGreen,
    textColor: colors.white,
    remarksColor: `rgba(${colorUtils.getRgb(colors.white)}, 0.7)`,
    linkColor: colors.white,
    linkHoverColor: colors.white,
    highlightColor: colors.highlight
  },
  red: {
    backgroundColor: colors.red,
    textColor: colors.white,
    remarksColor: `rgba(${colorUtils.getRgb(colors.white)}, 0.7)`,
    linkColor: colors.white,
    linkHoverColor: colors.white,
    highlightColor: colors.highlight
  }
};

export default themes;
