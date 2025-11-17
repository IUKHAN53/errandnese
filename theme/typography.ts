// Typography configuration
export const fontFamily = {
  primary: '"Public Sans Variable", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  secondary: '"Barlow", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
};

export function typography() {
  return {
    fontFamily: fontFamily.primary,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightSemiBold: 600,
    fontWeightBold: 700,
    h1: {
      fontWeight: 800,
      lineHeight: 1.2,
      fontSize: '3.5rem', // 56px
      letterSpacing: '-0.02em',
      fontFamily: fontFamily.secondary,
    },
    h2: {
      fontWeight: 800,
      lineHeight: 1.3,
      fontSize: '3rem', // 48px
      letterSpacing: '-0.01em',
      fontFamily: fontFamily.secondary,
    },
    h3: {
      fontWeight: 700,
      lineHeight: 1.4,
      fontSize: '2rem', // 32px
      fontFamily: fontFamily.secondary,
    },
    h4: {
      fontWeight: 700,
      lineHeight: 1.5,
      fontSize: '1.5rem', // 24px
      fontFamily: fontFamily.secondary,
    },
    h5: {
      fontWeight: 600,
      lineHeight: 1.5,
      fontSize: '1.25rem', // 20px
      fontFamily: fontFamily.secondary,
    },
    h6: {
      fontWeight: 600,
      lineHeight: 1.6,
      fontSize: '1.125rem', // 18px
      fontFamily: fontFamily.secondary,
    },
    subtitle1: {
      fontWeight: 600,
      lineHeight: 1.6,
      fontSize: '1rem', // 16px
    },
    subtitle2: {
      fontWeight: 600,
      lineHeight: 1.6,
      fontSize: '0.875rem', // 14px
    },
    body1: {
      lineHeight: 1.6,
      fontSize: '1rem', // 16px
    },
    body2: {
      lineHeight: 1.6,
      fontSize: '0.875rem', // 14px
    },
    caption: {
      lineHeight: 1.5,
      fontSize: '0.75rem', // 12px
    },
    overline: {
      fontWeight: 700,
      lineHeight: 1.5,
      fontSize: '0.75rem', // 12px
      textTransform: 'uppercase' as const,
    },
    button: {
      fontWeight: 700,
      lineHeight: 1.71429,
      fontSize: '0.875rem', // 14px
      textTransform: 'unset' as const,
    },
  };
}

