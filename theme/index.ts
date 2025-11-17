import { createTheme, alpha } from '@mui/material/styles';
import { palette } from './palette';
import { typography } from './typography';
import { shadows, customShadows } from './shadows';

// Create theme
export function createCustomTheme(mode: 'light' | 'dark' = 'light') {
  const paletteConfig = palette(mode);
  const typographyConfig = typography();
  const shadowsConfig = shadows(mode);
  const customShadowsConfig = customShadows(mode);

  const theme = createTheme({
    palette: {
      mode,
      ...paletteConfig,
    },
    typography: typographyConfig,
    shadows: shadowsConfig,
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: 'none',
            fontWeight: 700,
            boxShadow: 'none',
            '&:hover': {
              boxShadow: 'none',
            },
          },
          sizeLarge: {
            height: 48,
            fontSize: '1rem',
            padding: '0 24px',
          },
          sizeMedium: {
            height: 40,
            padding: '0 20px',
          },
          sizeSmall: {
            height: 32,
            padding: '0 16px',
          },
          contained: {
            '&:hover': {
              transform: 'translateY(-2px)',
              transition: 'all 0.2s ease-in-out',
            },
          },
          outlined: {
            borderWidth: 2,
            '&:hover': {
              borderWidth: 2,
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            boxShadow: customShadowsConfig.card,
            borderRadius: 16,
            position: 'relative',
            zIndex: 0,
          },
        },
      },
      MuiCardContent: {
        styleOverrides: {
          root: {
            padding: 24,
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              borderRadius: 8,
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
          rounded: {
            borderRadius: 16,
          },
        },
      },
      MuiContainer: {
        styleOverrides: {
          root: {
            paddingLeft: 16,
            paddingRight: 16,
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            boxShadow: 'none',
            backdropFilter: 'blur(8px)',
            backgroundColor: alpha(paletteConfig.background.default, 0.8),
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline',
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            fontWeight: 600,
          },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            borderColor: paletteConfig.divider,
          },
        },
      },
    },
  });

  return theme;
}

export { customShadows };

