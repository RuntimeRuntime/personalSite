import { render, screen } from '@testing-library/react';
import { NavBar } from '../navBar';

jest.mock('react-router-dom', () => ({
  Link: ({ to, children, ...props }: any) => <a href={to} {...props}>{children}</a>,
}));

describe('Nav Component', () => {
  it('renders navigation links', () => {
    render(<NavBar />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('renders links with correct navigation', () => {
    render(<NavBar  />);

    const homeLink = screen.getByText('Home').closest('a');
    const aboutLink = screen.getByText('About').closest('a');
    const portfolioLink = screen.getByText('Portfolio').closest('a');
    const contactLink = screen.getByText('Contact').closest('a');

    expect(homeLink).toHaveAttribute('href', '/');
    expect(aboutLink).toHaveAttribute('href', '/about');
    expect(portfolioLink).toHaveAttribute('href', '/portfolio');
    expect(contactLink).toHaveAttribute('href', '/contact');
  });
});
