import { Box } from '@mui/material';
import { useState, useRef } from 'react';
import profile from '../../assets/profile.png';

const ProfilePicture = () => {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const componentRef = useRef<HTMLDivElement>(null);
  const profilePictureSize = 200;

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!componentRef.current || !isHovering) return;
    const rect = componentRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate mouse position relative to component center
    const relativeX = event.clientX - rect.left - centerX;
    const relativeY = event.clientY - rect.top - centerY;
    
    // Normalize to -1 to 1 range
    const normalizedX = relativeX / centerX;
    const normalizedY = relativeY / centerY;

    console.log('Mouse position:', { normalizedX, normalizedY });
    setMousePosition({ x: normalizedX, y: normalizedY });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setMousePosition({ x: 0, y: 0 });
  };

  // Calculate rotation based on mouse position
  const rotateY = isHovering ? mousePosition.x * 15 : 0;
  const rotateX = isHovering ? -mousePosition.y * 10 : 0;

  // Calculate subtle shadow offset based on rotation
  const shadowOffsetX = isHovering ? mousePosition.x * 8 : 0;
  const shadowOffsetY = isHovering ? mousePosition.y * 8 : 0;

  console.log('Rotation values:', { rotateY, rotateX, isHovering });

  return (
    <Box
      ref={componentRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
              sx={{
          width: profilePictureSize,
          height: profilePictureSize,
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        boxShadow: `${shadowOffsetX}px ${shadowOffsetY}px 15px rgba(0, 0, 0, 0.3)`,
        border: '4px solid white',
        backgroundImage: `url(${profile})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        transition: 'all 0.1s ease-out',
        transformStyle: 'preserve-3d',
        perspective: '1000px',
        cursor: 'pointer',
        transform: isHovering 
          ? `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)` 
          : 'perspective(1000px) rotateY(0deg) rotateX(0deg)',
      }}
    />
  );
};

export default ProfilePicture;
