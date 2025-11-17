import { forwardRef } from 'react';
import { Icon, IconifyIcon } from '@iconify/react';
import Box from '@mui/material/Box';
import type { BoxProps } from '@mui/material/Box';

// ----------------------------------------------------------------------

export interface IconifyProps extends BoxProps {
  icon: IconifyIcon | string;
}

export const Iconify = forwardRef<SVGElement, IconifyProps>(
  ({ icon, width = 20, sx, ...other }, ref) => (
    <Box
      ref={ref}
      component={Icon}
      icon={icon}
      sx={{ width, height: width, ...sx }}
      {...other}
    />
  )
);

Iconify.displayName = 'Iconify';

