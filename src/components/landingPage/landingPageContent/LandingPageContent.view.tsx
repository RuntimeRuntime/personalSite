import { Box, Button } from "@mui/material"
import ProfilePicture from "../../ProfilePicture/ProfilePicture"
import { GradientTitle, Subtitle } from "../../styled"

export const LandingPageContent = () => {
    return (
        <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: 4,
        }}
      >
        <ProfilePicture />

        <GradientTitle variant="h1">
          Hello, I&apos;m Kyle
        </GradientTitle>

        <Subtitle variant="h2">
          Crafting immersive digital experiences with passion and precision.
        </Subtitle>

        <Button
          variant="contained"
          size="large"
          sx={{
            mt: 4,
            backgroundColor: 'white',
            color: '#764ba2',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
            },
          }}
        >
          Find out more
        </Button>
      </Box>
    )
}