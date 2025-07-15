import { Box } from '@mui/material';
import profile from '../../assets/profile.png';

const ProfilePicture = () => {
  return (
    <Box
      sx={{
        width: 200,
        height: 200,
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        boxShadow: 3,
        border: '4px solid white',
        backgroundImage: `url(${profile})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    />
  );
};

export default ProfilePicture;
