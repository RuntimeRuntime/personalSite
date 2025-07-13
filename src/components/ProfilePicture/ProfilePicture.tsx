import { Box } from '@mui/material';

const ProfilePicture: React.FC = () => {
  return (
    <Box
      sx={{
        width: 200,
        height: 200,
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        boxShadow: 3,
        border: '4px solid white',
      }}
    />
  );
};

export default ProfilePicture;
