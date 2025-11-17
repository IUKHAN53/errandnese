'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';
import { useTheme, alpha } from '@mui/material/styles';
import { Iconify } from '@/components/iconify';
import { MotionViewport, varFade } from '@/components/animate/motion-viewport';

const coreValues = [
  {
    icon: 'eva:shield-fill',
    title: 'Trust',
    description: 'Building lasting relationships through reliability, integrity, and consistent delivery on our promises.',
    color: '#0056B3',
  },
  {
    icon: 'eva:eye-fill',
    title: 'Transparency',
    description: 'Maintaining open communication and providing complete visibility throughout every stage of the process.',
    color: '#FF8C00',
  },
  {
    icon: 'eva:award-fill',
    title: 'Expertise',
    description: 'Leveraging deep industry knowledge and experience to deliver exceptional results for our clients.',
    color: '#0056B3',
  },
];

const industries = [
  { icon: 'eva:shopping-cart-fill', name: 'eCommerce' },
  { icon: 'eva:cube-fill', name: 'Retail' },
  { icon: 'eva:briefcase-fill', name: 'B2B' },
  { icon: 'eva:globe-fill', name: 'Import/Export' },
];

export default function About() {
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
          py: { xs: 10, md: 14 },
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${alpha(theme.palette.secondary.main, 0.3)} 0%, transparent 70%)`,
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box
            sx={{ textAlign: 'center' }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 800,
                mb: 2,
              }}
            >
              About Errandnese LLC
            </Typography>
            <Typography
              variant="h5"
              sx={{
                opacity: 0.95,
                fontWeight: 400,
                maxWidth: 700,
                mx: 'auto',
              }}
            >
              Your trusted partner in sourcing and logistics excellence
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Company Overview */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <MotionViewport>
            <Box sx={{ maxWidth: 900, mx: 'auto' }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2rem', md: '3rem' },
                  fontWeight: 800,
                  mb: 4,
                }}
              >
                Who We Are
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, fontSize: '1.125rem', lineHeight: 1.8, color: 'text.secondary' }}>
                Errandnese LLC is a professional sourcing and logistics company specializing in helping global clients
                navigate the complexities of the China supply chain. Founded with a vision to bridge the gap between
                international businesses and Chinese manufacturers, we have built our reputation on trust, transparency,
                and exceptional service delivery.
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, fontSize: '1.125rem', lineHeight: 1.8, color: 'text.secondary' }}>
                Our team brings together years of experience in international trade, quality control, and logistics
                management. We understand the challenges that eCommerce brands and importers face when sourcing products
                from China, and we've developed comprehensive solutions to address every aspect of the supply chain.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'text.secondary' }}>
                From initial product sourcing to final delivery, we manage every step of the process with meticulous
                attention to detail. Our on-the-ground presence in China, combined with our deep understanding of
                international business practices, enables us to provide seamless, reliable services that our clients
                can depend on.
              </Typography>
            </Box>
          </MotionViewport>
        </Container>
      </Box>

      {/* Mission Statement */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.neutral' }}>
        <Container maxWidth="lg">
          <MotionViewport>
            <Box>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 4, md: 6 },
                  borderRadius: 4,
                  background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.08)} 0%, ${alpha(theme.palette.secondary.main, 0.08)} 100%)`,
                  border: `2px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: '1.75rem', md: '2.5rem' },
                    fontWeight: 800,
                    mb: 3,
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Our Mission
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'text.secondary' }}>
                  To provide reliable sourcing, inspection, and shipping services for eCommerce brands and importers
                  worldwide, empowering businesses to grow through efficient and trustworthy supply chain solutions.
                  We are committed to delivering excellence in every interaction, ensuring our clients receive the
                  highest quality products at competitive prices, delivered on time, every time.
                </Typography>
              </Paper>
            </Box>
          </MotionViewport>
        </Container>
      </Box>

      {/* Core Values */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <MotionViewport>
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2rem', md: '3rem' },
                  fontWeight: 800,
                  mb: 2,
                }}
              >
                Our Core Values
              </Typography>
              <Typography variant="h6" sx={{ color: 'text.secondary', fontWeight: 400 }}>
                The principles that guide everything we do
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                gap: 4,
              }}
            >
              {coreValues.map((value, index) => (
                <Box key={value.title}>
                  <Box>
                    <Card
                      sx={{
                        height: '100%',
                        textAlign: 'center',
                        borderRadius: 4,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          boxShadow: theme.shadows[20],
                        },
                      }}
                    >
                      <CardContent sx={{ p: 5 }}>
                        <Box
                          sx={{
                            width: 80,
                            height: 80,
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mx: 'auto',
                            mb: 3,
                            background: `linear-gradient(135deg, ${value.color} 0%, ${alpha(value.color, 0.7)} 100%)`,
                            boxShadow: `0 12px 24px ${alpha(value.color, 0.3)}`,
                          }}
                        >
                          <Iconify icon={value.icon} width={40} sx={{ color: 'white' }} />
                        </Box>
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                          {value.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                          {value.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Box>
                </Box>
              ))}
            </Box>
          </MotionViewport>
        </Container>
      </Box>

      {/* Industries We Serve */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.neutral' }}>
        <Container maxWidth="lg">
          <MotionViewport>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2rem', md: '3rem' },
                  fontWeight: 800,
                  mb: 2,
                }}
              >
                Industries We Serve
              </Typography>
              <Typography variant="h6" sx={{ color: 'text.secondary', fontWeight: 400 }}>
                Providing specialized solutions across multiple sectors
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(4, 1fr)' },
                gap: 3,
                justifyContent: 'center',
              }}
            >
              {industries.map((industry, index) => (
                <Box key={industry.name}>
                  <Box>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 4,
                        textAlign: 'center',
                        borderRadius: 3,
                        bgcolor: 'background.paper',
                        border: `2px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          borderColor: theme.palette.primary.main,
                          boxShadow: `0 8px 24px ${alpha(theme.palette.primary.main, 0.2)}`,
                        },
                      }}
                    >
                      <Iconify
                        icon={industry.icon}
                        width={48}
                        sx={{
                          color: theme.palette.primary.main,
                          mb: 2,
                        }}
                      />
                      <Typography variant="h6" sx={{ fontWeight: 700 }}>
                        {industry.name}
                      </Typography>
                    </Paper>
                  </Box>
                </Box>
              ))}
            </Box>
          </MotionViewport>
        </Container>
      </Box>
    </Box>
  );
}

