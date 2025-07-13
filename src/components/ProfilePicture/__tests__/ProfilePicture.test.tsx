import { render } from '@testing-library/react';
import ProfilePicture from '../ProfilePicture';

describe('ProfilePicture Component', () => {
  it('renders with correct styling', () => {
    const { container } = render(<ProfilePicture />);
    const profileElement = container.firstChild as HTMLElement;

    expect(profileElement).toBeInTheDocument();
    expect(profileElement).toHaveStyle({
      width: '200px',
      height: '200px',
      borderRadius: '50%',
    });
  });
});
