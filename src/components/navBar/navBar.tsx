import { AppBar, Toolbar, Box, ListItem, List } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { NavBarItem } from './navBarItem/NavBarItem';

export const NavBar = () => {

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Contact', href: '/contact' },
  ];

  const theme = useTheme();

  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{
        backdropFilter: 'blur(8px)',
        backgroundColor: 'rgba(255,255,255,0.35)',
        borderBottom: '1px solid #D1D1D1FF',
        boxShadow: '0 2px 6px rgba(200, 200, 200, 1)',
      }}
    >
      <Toolbar>
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <List sx={{ display: 'flex', flexDirection: 'row', gap: 0 }}>
            {navItems.map((item) => (
              <ListItem key={item.label}>
                <NavBarItem label={item.label} href={item.href} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Toolbar>
    </AppBar>
  );
};