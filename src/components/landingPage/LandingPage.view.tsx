import { Box, Container } from '@mui/material';
import { LandingPageContent } from './landingPageContent/LandingPageContent.view';

const LandingPage: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        backgroundImage: 'url(/background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
      }}
    >
      <Container>
        <LandingPageContent />
      </Container>
    </Box>
  );
};

export default LandingPage;
