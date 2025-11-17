'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';
import { useTheme, alpha } from '@mui/material/styles';
import { Iconify } from '@/components/iconify';
import { MotionViewport } from '@/components/animate/motion-viewport';

const services = [
  {
    icon: 'eva:search-fill',
    title: 'Product Sourcing',
    description: 'Drawing upon our extensive local knowledge and expansive network in China, our team of procurement specialists tirelessly locate the precise products you require – all while ensuring the utmost value, exceptional quality, and timely delivery. We are committed to optimizing your procurement experience.',
  },
  {
    icon: 'eva:bulb-fill',
    title: 'Product Development',
    description: 'Transform your concept or blueprint into a proficiently crafted masterpiece ready for production. Every step, from conceptualization to prototyping, will be expertly guided to ensure the creation of a functional design that is meticulously optimized for manufacturing.',
  },
  {
    icon: 'eva:checkmark-circle-2-fill',
    title: 'Quality Control & QA',
    description: 'Achieve product excellence through our meticulous inspection and testing methods, safeguarding your investment, reputation, and customer satisfaction with rigorous quality control and thorough QA processes.',
  },
  {
    icon: 'eva:settings-2-fill',
    title: 'Manufacturing',
    description: 'Achieve unparalleled success by harnessing our cutting-edge manufacturing solutions, covering the entire spectrum from inception to completion. Leverage our extensive network, expertise, and meticulous oversight to guarantee impeccable quality, streamlined efficiency, and exceptional outcomes.',
  },
  {
    icon: 'eva:cube-fill',
    title: 'Assembly & Re-packing',
    description: 'Elevate your operations in China with our expertise in assembly, re-packing, kitting, and more. We deliver stunning products and captivating packaging that make a memorable impact. Let us help you leave a lasting impression.',
  },
  {
    icon: 'eva:car-fill',
    title: 'Shipping, Logistics & FBA',
    description: 'We offer a comprehensive range of shipping services, including LCL/FCL and air freight, to provide you with the best rates. Our dedicated team takes care of all the administrative tasks, manages customs clearance, and ensures the safe delivery of your shipments to your warehouses.',
  },
];

const stats = [
  { label: 'Product', value: '100%' },
  { label: 'Manufacture', value: '100%' },
  { label: 'Logistics', value: '100%' },
];

export default function Services() {
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
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="overline"
              sx={{
                fontSize: '1rem',
                fontWeight: 700,
                color: theme.palette.secondary.main,
                mb: 2,
                display: 'block',
              }}
            >
              Our Services
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 800,
                mb: 2,
              }}
            >
              We Deliver Best
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: '1.5rem', md: '2rem' },
                fontWeight: 600,
                mb: 3,
                opacity: 0.95,
              }}
            >
              China Sourcing Solutions and Procurement Outsourcing Services
            </Typography>
            <Typography
              variant="h6"
              sx={{
                opacity: 0.9,
                fontWeight: 400,
                maxWidth: 800,
                mx: 'auto',
              }}
            >
              We accomplish this by delivering impactful and tailored solutions on a large scale. Let us take care of your sourcing needs and provide you with a seamless experience.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Services Grid */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <MotionViewport>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                gap: 4,
              }}
            >
              {services.map((service, index) => (
                <Box key={service.title}>
                  <Card
                    sx={{
                      height: '100%',
                      borderRadius: 4,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: theme.shadows[20],
                        transform: 'translateY(-8px)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Box
                        sx={{
                          width: 80,
                          height: 80,
                          borderRadius: 3,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 3,
                          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                          boxShadow: `0 12px 24px ${alpha(theme.palette.primary.main, 0.3)}`,
                        }}
                      >
                        <Iconify icon={service.icon} width={40} sx={{ color: 'white' }} />
                      </Box>
                      <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                        {service.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                        {service.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              ))}
            </Box>
          </MotionViewport>
        </Container>
      </Box>

      {/* Expertise Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.neutral' }}>
        <Container maxWidth="lg">
          <MotionViewport>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                gap: 6,
                alignItems: 'center',
              }}
            >
              {/* Image */}
              <Box>
                <Box
                  sx={{
                    width: '100%',
                    height: { xs: 300, md: 400 },
                    borderRadius: 4,
                    overflow: 'hidden',
                    background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${alpha(theme.palette.secondary.main, 0.1)} 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Iconify
                    icon="eva:globe-2-fill"
                    width={200}
                    sx={{
                      color: theme.palette.primary.main,
                      opacity: 0.3,
                    }}
                  />
                </Box>
              </Box>

              {/* Content */}
              <Box>
                <Typography
                  variant="overline"
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: theme.palette.secondary.main,
                    mb: 2,
                    display: 'block',
                  }}
                >
                  Expertise
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '2rem', md: '3rem' },
                    fontWeight: 800,
                    mb: 3,
                  }}
                >
                  Strategic China Sourcing Solutions
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, fontSize: '1.125rem', lineHeight: 1.8, color: 'text.secondary' }}>
                  Strategic China sourcing Solutions is the key to securing contracts with optimal pricing and maximum value. Our commitment to this process allows us to consistently prioritize our client's interests and ensure their utmost satisfaction.
                </Typography>

                {/* Stats */}
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: 3,
                  }}
                >
                  {stats.map((stat) => (
                    <Paper
                      key={stat.label}
                      elevation={0}
                      sx={{
                        p: 3,
                        textAlign: 'center',
                        borderRadius: 3,
                        bgcolor: 'background.paper',
                        border: `2px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                      }}
                    >
                      <Typography
                        variant="h3"
                        sx={{
                          fontWeight: 800,
                          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                          backgroundClip: 'text',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          mb: 1,
                        }}
                      >
                        {stat.value}
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.secondary' }}>
                        {stat.label}
                      </Typography>
                    </Paper>
                  ))}
                </Box>
              </Box>
            </Box>
          </MotionViewport>
        </Container>
      </Box>
    </Box>
  );
}


