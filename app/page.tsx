'use client';

import Link from 'next/link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useTheme, alpha } from '@mui/material/styles';
import { Iconify } from '@/components/iconify';
import { MotionViewport, varFade, varContainer } from '@/components/animate/motion-viewport';

const services = [
  {
    icon: 'eva:search-fill',
    title: 'Product Sourcing',
    description: 'Find the right suppliers and products that meet your quality and budget requirements.',
    color: '#0056B3',
  },
  {
    icon: 'eva:checkmark-circle-2-fill',
    title: 'Quality Inspection',
    description: 'Thorough product inspections to ensure quality standards are met before shipment.',
    color: '#FF8C00',
  },
  {
    icon: 'eva:cube-fill',
    title: 'Consolidation',
    description: 'Efficient consolidation services to optimize shipping costs and streamline logistics.',
    color: '#0056B3',
  },
  {
    icon: 'eva:car-fill',
    title: 'International Shipping',
    description: 'Reliable shipping solutions to get your products delivered safely and on time.',
    color: '#FF8C00',
  },
];

const benefits = [
  {
    icon: 'eva:award-fill',
    title: 'Trusted Expertise',
    description: 'Years of experience navigating the China supply chain with proven results.',
  },
  {
    icon: 'eva:eye-fill',
    title: 'Full Transparency',
    description: 'Clear communication and complete visibility throughout the entire process.',
  },
  {
    icon: 'eva:trending-down-fill',
    title: 'Cost-Effective Solutions',
    description: 'Competitive pricing without compromising on quality or service excellence.',
  },
];

export default function Home() {
  const theme = useTheme();

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
          color: 'white',
          py: { xs: 10, md: 16 },
        }}
      >
        {/* Background Elements */}
        <Box
          sx={{
            position: 'absolute',
            top: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${alpha(theme.palette.secondary.main, 0.2)} 0%, transparent 70%)`,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: -150,
            left: -150,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${alpha(theme.palette.secondary.main, 0.15)} 0%, transparent 70%)`,
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box
            sx={{ textAlign: 'center' }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                fontWeight: 800,
                mb: 3,
                lineHeight: 1.2,
              }}
            >
              Professional Product Sourcing & Logistics Solutions from China
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 2,
                opacity: 0.95,
                fontWeight: 400,
                maxWidth: 800,
                mx: 'auto',
              }}
            >
              Your trusted partner for finding, inspecting, and shipping products efficiently from China.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 5,
                opacity: 0.9,
                maxWidth: 700,
                mx: 'auto',
              }}
            >
              We provide comprehensive sourcing, quality inspection, consolidation, and international shipping services
              tailored for eCommerce brands and importers worldwide.
            </Typography>
            <Box>
              <Button
                component={Link}
                href="/contact"
                variant="contained"
                size="large"
                sx={{
                  bgcolor: theme.palette.secondary.main,
                  color: 'white',
                  px: 5,
                  py: 2,
                  fontSize: '1.125rem',
                  fontWeight: 700,
                  borderRadius: 2,
                  boxShadow: `0 8px 24px ${alpha(theme.palette.secondary.main, 0.4)}`,
                  '&:hover': {
                    bgcolor: theme.palette.secondary.dark,
                    transform: 'translateY(-4px)',
                    boxShadow: `0 12px 32px ${alpha(theme.palette.secondary.main, 0.5)}`,
                  },
                  transition: 'all 0.3s ease',
                }}
                endIcon={<Iconify icon="eva:arrow-forward-fill" />}
              >
                Get in Touch
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Services Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <MotionViewport>
            <Box
              sx={{ textAlign: 'center', mb: 8 }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2rem', md: '3rem' },
                  fontWeight: 800,
                  mb: 2,
                }}
              >
                Our Core Services
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: 'text.secondary',
                  fontWeight: 400,
                  maxWidth: 600,
                  mx: 'auto',
                }}
              >
                End-to-end solutions to streamline your supply chain from China
              </Typography>
            </Box>

            <Box>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: {
                    xs: 'repeat(1, 1fr)',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(4, 1fr)',
                  },
                  gap: 4,
                }}
              >
                {services.map((service, index) => (
                  <Box
                    key={service.title}
                  >
                      <Card
                        sx={{
                          height: '100%',
                          borderRadius: 3,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            boxShadow: theme.shadows[20],
                          },
                        }}
                      >
                        <CardContent sx={{ p: 4 }}>
                          <Box
                            sx={{
                              width: 64,
                              height: 64,
                              borderRadius: 2,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              mb: 3,
                              background: `linear-gradient(135deg, ${service.color} 0%, ${alpha(service.color, 0.7)} 100%)`,
                              boxShadow: `0 8px 16px ${alpha(service.color, 0.24)}`,
                            }}
                          >
                            <Iconify icon={service.icon} width={32} sx={{ color: 'white' }} />
                          </Box>
                          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5 }}>
                            {service.title}
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {service.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Box>
                ))}
              </Box>
            </Box>
          </MotionViewport>
        </Container>
      </Box>

      {/* Benefits Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.neutral' }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              gap: 6,
              alignItems: 'center',
            }}
          >
            <Box>
              <MotionViewport>
                <Box>
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: { xs: '2rem', md: '3rem' },
                      fontWeight: 800,
                      mb: 4,
                    }}
                  >
                    Why Choose Errandnese?
                  </Typography>
                  <Stack spacing={4}>
                    {benefits.map((benefit, index) => (
                      <Box
                        key={benefit.title}
                        sx={{ display: 'flex', gap: 2 }}
                      >
                        <Box
                          sx={{
                            width: 48,
                            height: 48,
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            bgcolor: theme.palette.secondary.main,
                            boxShadow: `0 4px 12px ${alpha(theme.palette.secondary.main, 0.3)}`,
                          }}
                        >
                          <Iconify icon={benefit.icon} width={24} sx={{ color: 'white' }} />
                        </Box>
                        <Box>
                          <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                            {benefit.title}
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {benefit.description}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Stack>
                </Box>
              </MotionViewport>
            </Box>

            <Box>
              <MotionViewport>
                <Box>
                  <Card
                    sx={{
                      p: 5,
                      borderRadius: 4,
                      background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                      color: 'white',
                      boxShadow: `0 24px 48px ${alpha(theme.palette.primary.main, 0.24)}`,
                    }}
                  >
                    <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>
                      Ready to Get Started?
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 4, opacity: 0.9 }}>
                      Let us help you streamline your sourcing and logistics operations. Contact us today to discuss your needs.
                    </Typography>
                    <Button
                      component={Link}
                      href="/contact"
                      variant="contained"
                      size="large"
                      fullWidth
                      sx={{
                        bgcolor: 'white',
                        color: theme.palette.primary.main,
                        fontWeight: 700,
                        py: 1.5,
                        '&:hover': {
                          bgcolor: '#f5f5f5',
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                      endIcon={<Iconify icon="eva:arrow-forward-fill" />}
                    >
                      Contact Us Now
                    </Button>
                  </Card>
                </Box>
              </MotionViewport>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

