import { alpha } from '@mui/material/styles';

// Errandnese Brand Colors
const BRAND_COLORS = {
  primary: '#0056B3', // Blue
  secondary: '#FF8C00', // Orange
  neutral: '#F5F5F5', // Grey
};

// Grey palette
const GREY = {
  0: '#FFFFFF',
  50: '#FCFDFD',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#1C252E',
  900: '#141A21',
};

// Primary color shades (Blue)
const PRIMARY = {
  lighter: '#C8E0F5',
  light: '#5A9FD4',
  main: BRAND_COLORS.primary,
  dark: '#003D82',
  darker: '#002451',
  contrastText: '#FFFFFF',
};

// Secondary color shades (Orange)
const SECONDARY = {
  lighter: '#FFE5CC',
  light: '#FFB366',
  main: BRAND_COLORS.secondary,
  dark: '#CC7000',
  darker: '#994F00',
  contrastText: '#FFFFFF',
};

// Info color
const INFO = {
  lighter: '#CAFDF5',
  light: '#61F3F3',
  main: '#00B8D9',
  dark: '#006C9C',
  darker: '#003768',
  contrastText: '#FFFFFF',
};

// Success color
const SUCCESS = {
  lighter: '#D3FCD2',
  light: '#77ED8B',
  main: '#22C55E',
  dark: '#118D57',
  darker: '#065E49',
  contrastText: '#FFFFFF',
};

// Warning color
const WARNING = {
  lighter: '#FFF5CC',
  light: '#FFD666',
  main: '#FFAB00',
  dark: '#B76E00',
  darker: '#7A4100',
  contrastText: '#1C252E',
};

// Error color
const ERROR = {
  lighter: '#FFE9D5',
  light: '#FFAC82',
  main: '#FF5630',
  dark: '#B71D18',
  darker: '#7A0916',
  contrastText: '#FFFFFF',
};

// Common colors
const COMMON = {
  black: '#000000',
  white: '#FFFFFF',
};

export function palette(mode: 'light' | 'dark') {
  const light = {
    primary: PRIMARY,
    secondary: SECONDARY,
    info: INFO,
    success: SUCCESS,
    warning: WARNING,
    error: ERROR,
    grey: GREY,
    common: COMMON,
    divider: alpha(GREY[500], 0.2),
    text: {
      primary: GREY[800],
      secondary: GREY[600],
      disabled: GREY[500],
    },
    background: {
      paper: '#FFFFFF',
      default: '#FFFFFF',
      neutral: BRAND_COLORS.neutral,
    },
    action: {
      active: GREY[600],
      hover: alpha(GREY[500], 0.08),
      selected: alpha(GREY[500], 0.16),
      disabled: alpha(GREY[500], 0.8),
      disabledBackground: alpha(GREY[500], 0.24),
      focus: alpha(GREY[500], 0.24),
      hoverOpacity: 0.08,
      disabledOpacity: 0.48,
    },
  };

  const dark = {
    ...light,
    text: {
      primary: '#FFFFFF',
      secondary: GREY[500],
      disabled: GREY[600],
    },
    background: {
      paper: GREY[800],
      default: GREY[900],
      neutral: alpha(GREY[500], 0.12),
    },
    action: {
      ...light.action,
      active: GREY[500],
    },
  };

  return mode === 'light' ? light : dark;
}

