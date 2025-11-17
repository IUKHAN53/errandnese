'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import { useTheme, alpha } from '@mui/material/styles';
import { Iconify } from '@/components/iconify';
import { MotionViewport, varFade } from '@/components/animate/motion-viewport';
import { CONFIG } from '@/config';

// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: 'eva:email-fill',
    title: 'Email',
    value: CONFIG.contact.email,
    href: `mailto:${CONFIG.contact.email}`,
    color: '#0056B3',
  },
  {
    icon: 'eva:phone-fill',
    title: 'Phone',
    value: CONFIG.contact.phone,
    href: `tel:${CONFIG.contact.phone.replace(/[^0-9+]/g, '')}`,
    color: '#FF8C00',
  },
  {
    icon: 'eva:pin-fill',
    title: 'Address',
    value: CONFIG.contact.address,
    href: '#',
    color: '#0056B3',
  },
];

export default function Contact() {
  const theme = useTheme();
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('Form data:', data);
      setSubmitStatus('success');
      reset();
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

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
            background: `radial-gradient(circle, ${alpha(theme.palette.secondary.main, 0.2)} 0%, transparent 70%)`,
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
              Get in Touch
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
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Contact Form & Info Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '7fr 5fr' },
              gap: 6,
            }}
          >
            {/* Contact Form */}
            <Box>
              <MotionViewport>
                <Box>
                  <Typography variant="h3" sx={{ fontWeight: 800, mb: 3 }}>
                    Send us a Message
                  </Typography>

                  {submitStatus === 'success' && (
                    <Alert severity="success" sx={{ mb: 3 }}>
                      Thank you for your message! We'll get back to you soon.
                    </Alert>
                  )}

                  {submitStatus === 'error' && (
                    <Alert severity="error" sx={{ mb: 3 }}>
                      Something went wrong. Please try again.
                    </Alert>
                  )}

                  <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                    <Stack spacing={3}>
                      <TextField
                        fullWidth
                        label="Your Name"
                        {...register('name')}
                        error={!!errors.name}
                        helperText={errors.name?.message}
                        disabled={isSubmitting}
                      />

                      <TextField
                        fullWidth
                        label="Email Address"
                        type="email"
                        {...register('email')}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                        disabled={isSubmitting}
                      />

                      <TextField
                        fullWidth
                        label="Subject"
                        {...register('subject')}
                        error={!!errors.subject}
                        helperText={errors.subject?.message}
                        disabled={isSubmitting}
                      />

                      <TextField
                        fullWidth
                        label="Message"
                        multiline
                        rows={6}
                        {...register('message')}
                        error={!!errors.message}
                        helperText={errors.message?.message}
                        disabled={isSubmitting}
                      />

                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        disabled={isSubmitting}
                        sx={{
                          py: 1.5,
                          fontSize: '1rem',
                          fontWeight: 700,
                          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                          '&:hover': {
                            transform: 'translateY(-2px)',
                            boxShadow: `0 12px 24px ${alpha(theme.palette.primary.main, 0.3)}`,
                          },
                          transition: 'all 0.3s ease',
                        }}
                        endIcon={<Iconify icon="eva:paper-plane-fill" />}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </Stack>
                  </Box>
                </Box>
              </MotionViewport>
            </Box>

            {/* Contact Information */}
            <Box>
              <MotionViewport>
                <Box>
                  <Typography variant="h3" sx={{ fontWeight: 800, mb: 3 }}>
                    Contact Information
                  </Typography>

                  <Stack spacing={3}>
                    {contactInfo.map((info, index) => (
                      <Box
                        key={info.title}
                      >
                        <Paper
                          elevation={0}
                          sx={{
                            p: 3,
                            borderRadius: 3,
                            border: `2px solid ${alpha(info.color, 0.1)}`,
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              borderColor: info.color,
                              boxShadow: `0 8px 24px ${alpha(info.color, 0.15)}`,
                            },
                          }}
                        >
                          <Stack direction="row" spacing={2} alignItems="flex-start">
                            <Box
                              sx={{
                                width: 56,
                                height: 56,
                                borderRadius: 2,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                                background: `linear-gradient(135deg, ${info.color} 0%, ${alpha(info.color, 0.7)} 100%)`,
                                boxShadow: `0 8px 16px ${alpha(info.color, 0.24)}`,
                              }}
                            >
                              <Iconify icon={info.icon} width={28} sx={{ color: 'white' }} />
                            </Box>
                            <Box sx={{ flex: 1 }}>
                              <Typography variant="subtitle2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                                {info.title}
                              </Typography>
                              {info.href.startsWith('#') ? (
                                <Typography variant="body1" sx={{ fontWeight: 600 }}>
                                  {info.value}
                                </Typography>
                              ) : (
                                <Typography
                                  component="a"
                                  href={info.href}
                                  variant="body1"
                                  sx={{
                                    fontWeight: 600,
                                    color: 'text.primary',
                                    textDecoration: 'none',
                                    '&:hover': {
                                      color: info.color,
                                    },
                                    transition: 'color 0.3s ease',
                                  }}
                                >
                                  {info.value}
                                </Typography>
                              )}
                            </Box>
                          </Stack>
                        </Paper>
                      </Box>
                    ))}
                  </Stack>

                  {/* Business Hours */}
                  <Box
                    sx={{ mt: 4 }}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        p: 4,
                        borderRadius: 3,
                        background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.08)} 0%, ${alpha(theme.palette.secondary.main, 0.08)} 100%)`,
                        border: `2px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                      }}
                    >
                      <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                        <Iconify icon="eva:clock-fill" width={24} sx={{ color: theme.palette.primary.main }} />
                        <Typography variant="h6" sx={{ fontWeight: 700 }}>
                          Business Hours
                        </Typography>
                      </Stack>
                      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                        Monday - Friday: 9:00 AM - 6:00 PM (EST)
                        <br />
                        Saturday: 10:00 AM - 4:00 PM (EST)
                        <br />
                        Sunday: Closed
                      </Typography>
                    </Paper>
                  </Box>
                </Box>
              </MotionViewport>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

