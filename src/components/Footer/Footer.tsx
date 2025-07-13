import { Box, Container, IconButton, Typography } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        mt: 'auto',
        backgroundColor: 'background.paper',
        borderTop: 1,
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {currentYear} Kyle Byrne. All rights reserved.
          </Typography>

          <Box>
            <IconButton
              data-testid="github-link"
              href="https://github.com/runtimeruntime"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              <GitHub />
            </IconButton>
            <IconButton
              data-testid="linkedin-link"
              href="https://linkedin.com/in/kyle-j-byrne"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              data-testid="email-link"
              href="mailto:kylebyrnecontact.gmail.com"
              color="inherit"
            >
              <Email />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
