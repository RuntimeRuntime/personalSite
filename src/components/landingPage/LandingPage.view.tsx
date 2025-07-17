import { Box, Container, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { LandingPageContent } from './landingPageContent/LandingPageContent.view';
import layer1 from '../../assets/parralax-background/layer1.png';
import layer2 from '../../assets/parralax-background/layer2.png';
import layer3New from '../../assets/parralax-background/layer3New.png';

// Image loading hook for optimization
const useImageLoader = (src: string) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setIsLoaded(true);
    img.onerror = () => setHasError(true);
    img.src = src;
  }, [src]);

  return { isLoaded, hasError };
};

const LandingPage: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  
  // Preload images for better performance
  const layer1Status = useImageLoader(layer1);
  const layer2Status = useImageLoader(layer2);
  const layer3Status = useImageLoader(layer3New);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate parallax offsets with bounds
  const layer1Offset = Math.min(scrollY * 0.3, 150); // Slower, max 100px
  const layer2Offset = Math.min(scrollY * 0.5, 400); // Faster, max 300px
  const layer3Offset = Math.min(scrollY * 0.8, 550); // Faster, max 500px

  return (
    <>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          color: 'white',
        }}
      >
        {/* Layer 1 - Background */}
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '120%', // Slightly larger to accommodate movement
            backgroundImage: layer1Status.isLoaded ? `url(${layer1})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            transform: `translate3d(0, ${-layer1Offset}px, 0)`,
            willChange: 'transform',
            zIndex: 1,
            transition: 'opacity 0.3s ease-in-out',
            opacity: layer1Status.isLoaded ? 1 : 0,
          }}
        />
        
        {/* Layer 2 - Middle Ground */}
        <Box
          sx={{
            position: 'absolute',
            top: 200,
            width: '100%',
            height: '120%', // Slightly larger to accommodate movement
            backgroundImage: layer2Status.isLoaded ? `url(${layer2})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            transform: `translate3d(0, ${-layer2Offset}px, 0)`,
            willChange: 'transform',
            zIndex: 2,
            opacity: layer2Status.isLoaded ? 0.8 : 0,
            transition: 'opacity 0.3s ease-in-out',
          }}
        />
        {/* Layer 3 - Foreground */}
        <Box sx={{
            position: 'absolute',
            top: 600,
            width: '100%',
            height: '100%',
            backgroundImage: layer3Status.isLoaded ? `url(${layer3New})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            transform: `translate3d(0, ${-layer3Offset}px, 0)`,
            willChange: 'transform',
            zIndex: 3,
            transition: 'opacity 0.3s ease-in-out',
            opacity: layer3Status.isLoaded ? 1 : 0,
        }}></Box>

        {/* Content */}
        <Container sx={{ position: 'relative', zIndex: 3}} >
          <LandingPageContent />
        </Container>
      </Box>

      {/* Additional Content Sections for Testing */}
      <Box sx={{ backgroundColor: '#1a1a1a', color: 'white', py: 8 }}>
        <Container>
          <Typography variant="h2" component="h2" gutterBottom>
            Section 1
          </Typography>
          <Typography variant="body1" paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
          <Typography variant="body1" paragraph>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Container>
      </Box>

      <Box sx={{ backgroundColor: '#2a2a2a', color: 'white', py: 8 }}>
        <Container>
          <Typography variant="h2" component="h2" gutterBottom>
            Section 2
          </Typography>
          <Typography variant="body1" paragraph>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </Typography>
          <Typography variant="body1" paragraph>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores 
            eos qui ratione voluptatem sequi nesciunt.
          </Typography>
        </Container>
      </Box>

      <Box sx={{ backgroundColor: '#3a3a3a', color: 'white', py: 8 }}>
        <Container>
          <Typography variant="h2" component="h2" gutterBottom>
            Section 3
          </Typography>
          <Typography variant="body1" paragraph>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, 
            sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </Typography>
          <Typography variant="body1" paragraph>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, 
            nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.
          </Typography>
        </Container>
      </Box>

      <Box sx={{ backgroundColor: '#4a4a4a', color: 'white', py: 8 }}>
        <Container>
          <Typography variant="h2" component="h2" gutterBottom>
            Section 4
          </Typography>
          <Typography variant="body1" paragraph>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti 
            atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
          </Typography>
          <Typography variant="body1" paragraph>
            Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. 
            Et harum quidem rerum facilis est et expedita distinctio.
          </Typography>
        </Container>
      </Box>

      <Box sx={{ backgroundColor: '#5a5a5a', color: 'white', py: 8 }}>
        <Container>
          <Typography variant="h2" component="h2" gutterBottom>
            Section 5
          </Typography>
          <Typography variant="body1" paragraph>
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat 
            facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
          </Typography>
          <Typography variant="body1" paragraph>
            Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates 
            repudiandae sint et molestiae non recusandae.
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default LandingPage;
