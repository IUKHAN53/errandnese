'use client';

import { m } from 'framer-motion';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import { useTheme, alpha } from '@mui/material/styles';
import { MotionViewport, varFade } from '@/components/animate/motion-viewport';

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: `By accessing and using the services provided by Errandnese LLC ("Company," "we," "us," or "our"), you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.`,
  },
  {
    title: '2. Services Description',
    content: `Errandnese LLC provides professional sourcing and logistics services, including but not limited to:

• Product sourcing and supplier identification
• Quality inspection and control services
• Consolidation and warehousing services
• International shipping and logistics coordination
• Supply chain consultation and support

The specific services provided will be outlined in individual service agreements or quotations.`,
  },
  {
    title: '3. User Obligations',
    content: `When using our services, you agree to:

• Provide accurate and complete information
• Comply with all applicable laws and regulations
• Not use our services for any illegal or unauthorized purpose
• Maintain the confidentiality of your account credentials
• Promptly notify us of any unauthorized use of your account
• Pay all fees and charges associated with your use of our services`,
  },
  {
    title: '4. Pricing and Payment',
    content: `Service fees will be provided in quotations or service agreements. Payment terms will be specified in individual agreements. We reserve the right to modify our pricing at any time. All fees are non-refundable unless otherwise specified in writing.`,
  },
  {
    title: '5. Quality Assurance',
    content: `While we strive to ensure the highest quality standards in our inspection services, we cannot guarantee that products will be free from all defects. Our liability is limited to the scope of services explicitly agreed upon in writing. We are not responsible for defects that arise after our inspection or during shipping.`,
  },
  {
    title: '6. Shipping and Delivery',
    content: `Shipping timelines are estimates and may vary due to factors beyond our control, including customs delays, weather conditions, and carrier issues. We are not liable for delays in shipping or delivery. Risk of loss and title for products pass to you upon delivery to the carrier.`,
  },
  {
    title: '7. Limitation of Liability',
    content: `To the maximum extent permitted by law, Errandnese LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly. Our total liability shall not exceed the amount paid by you for the specific services giving rise to the claim.`,
  },
  {
    title: '8. Intellectual Property',
    content: `All content on our website, including text, graphics, logos, and software, is the property of Errandnese LLC or its licensors and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.`,
  },
  {
    title: '9. Confidentiality',
    content: `We respect the confidentiality of your business information. We will not disclose your confidential information to third parties except as necessary to provide our services or as required by law. You agree to keep confidential any proprietary information we share with you.`,
  },
  {
    title: '10. Force Majeure',
    content: `We shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including but not limited to acts of God, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents, pandemics, strikes, or shortages of transportation, facilities, fuel, energy, labor, or materials.`,
  },
  {
    title: '11. Dispute Resolution',
    content: `Any disputes arising from these Terms and Conditions or our services shall be resolved through good faith negotiation. If negotiation fails, disputes shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.`,
  },
  {
    title: '12. Governing Law',
    content: `These Terms and Conditions shall be governed by and construed in accordance with the laws of the United States and the state in which Errandnese LLC is registered, without regard to its conflict of law provisions.`,
  },
  {
    title: '13. Modifications to Terms',
    content: `We reserve the right to modify these Terms and Conditions at any time. We will notify you of any material changes by posting the updated terms on our website. Your continued use of our services after such modifications constitutes your acceptance of the updated terms.`,
  },
  {
    title: '14. Termination',
    content: `We reserve the right to terminate or suspend your access to our services at any time, with or without cause or notice. Upon termination, all provisions of these Terms and Conditions that by their nature should survive termination shall remain in effect.`,
  },
  {
    title: '15. Severability',
    content: `If any provision of these Terms and Conditions is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.`,
  },
  {
    title: '16. Contact Information',
    content: `For questions about these Terms and Conditions, please contact us at:

Email: info@errandnese.site
Phone: (+1) 000-000-0000

We will respond to your inquiry as soon as possible.`,
  },
];

export default function Terms() {
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
          py: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box
            component={m.div}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            sx={{ textAlign: 'center' }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 800,
                mb: 2,
              }}
            >
              Terms & Conditions
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.9 }}>
              Last Updated: January 2025
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Content Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.default' }}>
        <Container maxWidth="md">
          <MotionViewport>
            <Box component={m.div} variants={varFade().inUp} sx={{ mb: 6 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  bgcolor: alpha(theme.palette.primary.main, 0.04),
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                }}
              >
                <Typography variant="body1" sx={{ lineHeight: 1.8, color: 'text.secondary' }}>
                  These Terms and Conditions ("Terms") govern your use of the services provided by Errandnese LLC.
                  Please read these Terms carefully before using our services. By using our services, you acknowledge
                  that you have read, understood, and agree to be bound by these Terms.
                </Typography>
              </Paper>
            </Box>

            {sections.map((section, index) => (
              <Box
                key={section.title}
                component={m.div}
                variants={varFade().inUp}
                sx={{ mb: 5 }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    color: theme.palette.primary.main,
                  }}
                >
                  {section.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    lineHeight: 1.8,
                    color: 'text.secondary',
                    whiteSpace: 'pre-line',
                  }}
                >
                  {section.content}
                </Typography>
                {index < sections.length - 1 && (
                  <Divider sx={{ mt: 4, borderColor: alpha(theme.palette.grey[500], 0.1) }} />
                )}
              </Box>
            ))}
          </MotionViewport>
        </Container>
      </Box>
    </Box>
  );
}

