'use client';

import './globals.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createCustomTheme } from '../theme';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const theme = createCustomTheme('light');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Errandnese LLC - Professional Sourcing & Logistics from China</title>
        <meta name="description" content="Trusted sourcing and logistics partner helping global clients find, inspect, and ship products efficiently from China. Professional services for eCommerce brands and importers." />
        <meta name="keywords" content="sourcing, logistics, China sourcing, product inspection, international shipping, eCommerce, supply chain" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <AppRouterCacheProvider options={{ key: 'css' }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <main>
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
