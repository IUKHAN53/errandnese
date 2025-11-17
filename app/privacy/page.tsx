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
    title: '1. Information We Collect',
    content: `We collect information that you provide directly to us, including:
    
• Contact information (name, email address, phone number, business address)
• Business information (company name, industry, sourcing requirements)
• Communication records (emails, messages, inquiries)
• Payment and transaction information (when applicable)
• Technical information (IP address, browser type, device information)`,
  },
  {
    title: '2. How We Use Your Information',
    content: `We use the information we collect to:

• Provide and improve our sourcing and logistics services
• Communicate with you about your inquiries and orders
• Process transactions and send related information
• Send you technical notices, updates, and support messages
• Respond to your comments, questions, and customer service requests
• Monitor and analyze trends, usage, and activities
• Detect, prevent, and address technical issues and fraudulent activities`,
  },
  {
    title: '3. Information Sharing and Disclosure',
    content: `We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:

• With service providers who perform services on our behalf
• With suppliers and logistics partners to fulfill your orders
• To comply with legal obligations or respond to lawful requests
• To protect our rights, property, or safety, and that of our users
• With your consent or at your direction`,
  },
  {
    title: '4. Data Security',
    content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    title: '5. Data Retention',
    content: `We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.`,
  },
  {
    title: '6. Your Rights',
    content: `You have the right to:

• Access, update, or delete your personal information
• Object to or restrict the processing of your information
• Request a copy of your information in a portable format
• Withdraw consent where we rely on it to process your information
• Lodge a complaint with a supervisory authority

To exercise these rights, please contact us using the information provided below.`,
  },
  {
    title: '7. Cookies and Tracking Technologies',
    content: `We use cookies and similar tracking technologies to collect information about your browsing activities. You can control cookies through your browser settings. However, disabling cookies may affect the functionality of our website.`,
  },
  {
    title: '8. Third-Party Links',
    content: `Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.`,
  },
  {
    title: '9. Children\'s Privacy',
    content: `Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us.`,
  },
  {
    title: '10. Changes to This Privacy Policy',
    content: `We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. Your continued use of our services after any changes constitutes your acceptance of the updated policy.`,
  },
  {
    title: '11. Contact Us',
    content: `If you have any questions about this Privacy Policy or our privacy practices, please contact us at:

Email: info@errandnese.site
Phone: (+1) 000-000-0000

We will respond to your inquiry as soon as possible.`,
  },
];

export default function Privacy() {
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
              Privacy Policy
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
                  At Errandnese LLC, we are committed to protecting your privacy and ensuring the security of your
                  personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your
                  information when you use our services or visit our website.
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

