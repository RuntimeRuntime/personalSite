import { render, screen } from '@testing-library/react';
import LandingPage from '../LandingPage.view';

describe('LandingPage Component', () => {
  it('renders the main heading with name', () => {
    render(<LandingPage />);
    expect(screen.getByText(/Hello, I'm Kyle/)).toBeInTheDocument();
  });

  it('renders the subheading text', () => {
    render(<LandingPage />);
    expect(
      screen.getByText(
        'Crafting immersive digital experiences with passion and precision.'
      )
    ).toBeInTheDocument();
  });

  it('renders the call-to-action button', () => {
    render(<LandingPage />);
    const ctaButton = screen.getByText('Find out more');
    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton.tagName.toLowerCase()).toBe('button');
  });

  it('renders the profile picture component', () => {
    const { container } = render(<LandingPage />);
    const profilePictureElement = container.querySelector(
      '[class*="MuiBox-root"]'
    );
    expect(profilePictureElement).toBeInTheDocument();
  });
});
