import { alpha } from '@mui/material/styles';
import type { Shadows } from '@mui/material/styles';

// Custom shadows for modern design
export function shadows(mode: 'light' | 'dark'): Shadows {
  const color = mode === 'light' ? '#000000' : '#000000';

  const transparent = alpha(color, 0);

  return [
    'none',
    `0px 1px 2px 0px ${alpha(color, 0.08)}`,
    `0px 2px 4px -1px ${alpha(color, 0.08)}`,
    `0px 3px 6px -2px ${alpha(color, 0.12)}`,
    `0px 4px 8px -2px ${alpha(color, 0.12)}`,
    `0px 5px 10px -3px ${alpha(color, 0.16)}`,
    `0px 6px 12px -4px ${alpha(color, 0.16)}`,
    `0px 7px 14px -4px ${alpha(color, 0.16)}`,
    `0px 8px 16px -4px ${alpha(color, 0.16)}`,
    `0px 9px 18px -5px ${alpha(color, 0.16)}`,
    `0px 10px 20px -5px ${alpha(color, 0.16)}`,
    `0px 11px 22px -6px ${alpha(color, 0.16)}`,
    `0px 12px 24px -6px ${alpha(color, 0.16)}`,
    `0px 13px 26px -6px ${alpha(color, 0.16)}`,
    `0px 14px 28px -7px ${alpha(color, 0.16)}`,
    `0px 15px 30px -7px ${alpha(color, 0.16)}`,
    `0px 16px 32px -8px ${alpha(color, 0.16)}`,
    `0px 17px 34px -8px ${alpha(color, 0.16)}`,
    `0px 18px 36px -8px ${alpha(color, 0.16)}`,
    `0px 19px 38px -9px ${alpha(color, 0.16)}`,
    `0px 20px 40px -9px ${alpha(color, 0.16)}`,
    `0px 21px 42px -10px ${alpha(color, 0.16)}`,
    `0px 22px 44px -10px ${alpha(color, 0.16)}`,
    `0px 23px 46px -10px ${alpha(color, 0.16)}`,
    `0px 24px 48px -11px ${alpha(color, 0.16)}`,
  ];
}

// Custom shadows for cards, buttons, etc.
export const customShadows = (mode: 'light' | 'dark') => {
  const color = mode === 'light' ? '#000000' : '#000000';

  return {
    z1: `0 1px 2px 0 ${alpha(color, 0.08)}`,
    z4: `0 4px 8px 0 ${alpha(color, 0.12)}`,
    z8: `0 8px 16px 0 ${alpha(color, 0.16)}`,
    z12: `0 12px 24px -4px ${alpha(color, 0.16)}`,
    z16: `0 16px 32px -4px ${alpha(color, 0.16)}`,
    z20: `0 20px 40px -4px ${alpha(color, 0.16)}`,
    z24: `0 24px 48px 0 ${alpha(color, 0.16)}`,
    primary: `0 8px 16px 0 ${alpha('#0056B3', 0.24)}`,
    secondary: `0 8px 16px 0 ${alpha('#FF8C00', 0.24)}`,
    info: `0 8px 16px 0 ${alpha('#00B8D9', 0.24)}`,
    success: `0 8px 16px 0 ${alpha('#22C55E', 0.24)}`,
    warning: `0 8px 16px 0 ${alpha('#FFAB00', 0.24)}`,
    error: `0 8px 16px 0 ${alpha('#FF5630', 0.24)}`,
    card: `0 0 2px 0 ${alpha(color, 0.2)}, 0 12px 24px -4px ${alpha(color, 0.12)}`,
    dialog: `-40px 40px 80px -8px ${alpha(color, 0.24)}`,
    dropdown: `0 0 2px 0 ${alpha(color, 0.24)}, -20px 20px 40px -4px ${alpha(color, 0.24)}`,
  };
};

