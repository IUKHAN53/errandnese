'use client';

import Link from 'next/link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { useTheme, alpha } from '@mui/material/styles';
import { Iconify } from './iconify';
import { CONFIG } from '../config';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms & Conditions', href: '/terms' },
];

export default function Footer() {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: theme.palette.grey[900],
        color: 'white',
        pt: 8,
        pb: 4,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: 4,
          }}
        >
          {/* Company Info */}
          <Box>
            <Box>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 800,
                  mb: 2,
                  background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.secondary.main} 100%)`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Errandnese LLC
              </Typography>
              <Typography variant="body2" sx={{ color: theme.palette.grey[400], mb: 3 }}>
                Professional sourcing and logistics solutions from China for eCommerce brands and
                importers worldwide.
              </Typography>
              <Stack direction="row" spacing={1.5}>
                {[
                  { icon: 'eva:linkedin-fill', href: CONFIG.social.linkedin },
                  { icon: 'eva:twitter-fill', href: CONFIG.social.twitter },
                  { icon: 'eva:facebook-fill', href: CONFIG.social.facebook },
                ].map((social, index) => (
                  <Box
                    key={index}
                    component="a"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      bgcolor: alpha(theme.palette.primary.main, 0.1),
                      color: theme.palette.primary.light,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        bgcolor: theme.palette.primary.main,
                        color: 'white',
                      },
                    }}
                  >
                    <Iconify icon={social.icon} width={20} />
                  </Box>
                ))}
              </Stack>
            </Box>
          </Box>

          {/* Quick Links */}
          <Box>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                Quick Links
              </Typography>
              <Stack spacing={1.5}>
                {quickLinks.map((link) => (
                  <Box
                    key={link.label}
                  >
                    <Link href={link.href} style={{ textDecoration: 'none' }}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: theme.palette.grey[400],
                          transition: 'color 0.3s ease',
                          '&:hover': {
                            color: theme.palette.secondary.main,
                          },
                        }}
                      >
                        {link.label}
                      </Typography>
                    </Link>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Box>

          {/* Contact Info */}
          <Box>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                Contact Us
              </Typography>
              <Stack spacing={2}>
                <Stack direction="row" spacing={1.5} alignItems="flex-start">
                  <Iconify icon="eva:email-fill" width={20} sx={{ color: theme.palette.secondary.main, mt: 0.3 }} />
                  <Box>
                    <Typography variant="caption" sx={{ color: 'white', fontWeight: 600, display: 'block' }}>
                      Email
                    </Typography>
                    <Typography
                      component="a"
                      href={`mailto:${CONFIG.contact.email}`}
                      variant="body2"
                      sx={{
                        color: theme.palette.grey[400],
                        textDecoration: 'none',
                        '&:hover': { color: theme.palette.secondary.main },
                      }}
                    >
                      {CONFIG.contact.email}
                    </Typography>
                  </Box>
                </Stack>
                <Stack direction="row" spacing={1.5} alignItems="flex-start">
                  <Iconify icon="eva:phone-fill" width={20} sx={{ color: theme.palette.secondary.main, mt: 0.3 }} />
                  <Box>
                    <Typography variant="caption" sx={{ color: 'white', fontWeight: 600, display: 'block' }}>
                      Phone
                    </Typography>
                    <Typography
                      component="a"
                      href={`tel:${CONFIG.contact.phone.replace(/[^0-9+]/g, '')}`}
                      variant="body2"
                      sx={{
                        color: theme.palette.grey[400],
                        textDecoration: 'none',
                        '&:hover': { color: theme.palette.secondary.main },
                      }}
                    >
                      {CONFIG.contact.phone}
                    </Typography>
                  </Box>
                </Stack>
                <Stack direction="row" spacing={1.5} alignItems="flex-start">
                  <Iconify icon="eva:pin-fill" width={20} sx={{ color: theme.palette.secondary.main, mt: 0.3 }} />
                  <Box>
                    <Typography variant="caption" sx={{ color: 'white', fontWeight: 600, display: 'block' }}>
                      Address
                    </Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.grey[400] }}>
                      {CONFIG.contact.address}
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ my: 4, borderColor: alpha(theme.palette.grey[500], 0.2) }} />

        <Typography
          variant="body2"
          sx={{
            textAlign: 'center',
            color: theme.palette.grey[500],
          }}
        >
          © {new Date().getFullYear()} Errandnese LLC. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
}

