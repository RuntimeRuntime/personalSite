import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

export const GradientTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.breakpoints.up('md') ? '4rem' : '2.5rem',
  fontWeight: 'bold',
  background: 'linear-gradient(45deg, #fff 30%, #e0e0e0 90%)',
  backgroundClip: 'text',
  textFillColor: 'transparent',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.breakpoints.up('md') ? '1.5rem' : '1.2rem',
  maxWidth: '800px',
  color: 'rgba(255, 255, 255, 0.9)',
})); 