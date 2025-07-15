import { ListItemButton } from '@mui/material';
import { Link } from 'react-router-dom';

/**
 * Props for NavBarItem component.
 */
export type NavBarItemProps = {
  label: string;
  href: string;
};

export const NavBarItem = ({ label, href }: NavBarItemProps) => (
  <ListItemButton
    component={Link}
    to={href}
    sx={{
      color: '#ffffff',
      textDecoration: 'none',
      fontSize: '1.5rem',
      transition: 'all 0.2s ease-in-out',
      transform: 'scale(1)',
      backgroundColor: 'transparent',
      '&:hover': {
        transform: 'scale(1.1)',
        color: '#ffffff',
        backgroundColor: 'transparent',
      },
      '&.Mui-focusVisible': {
        backgroundColor: 'transparent',
      },
    }}
  >
    {label}
  </ListItemButton>
); 