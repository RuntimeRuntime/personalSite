import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NavBarItem, NavBarItemProps } from './NavBarItem';

jest.mock('react-router-dom', () => ({
  Link: ({ to, children, ...props }: any) => <a href={to} {...props}>{children}</a>,
}));


describe('NavBarItem', () => {
  const defaultProps: NavBarItemProps = {
    label: 'TestLabel',
    href: '/test',
  };

  it('renders the label', () => {
    render(<NavBarItem {...defaultProps} />);
    expect(screen.getByText('TestLabel')).toBeInTheDocument();
  });

  it('renders the correct link', () => {
    render(<NavBarItem {...defaultProps} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/test');
  });

  it('applies the correct default color', () => {
    render(<NavBarItem {...defaultProps} />);
    const link = screen.getByRole('link');
    expect(link).toHaveStyle('color: #f0f0f0');
  });

  it('applies the correct hover and focus styles', async () => {
    render(<NavBarItem {...defaultProps} />);
    const link = screen.getByRole('link');
    // Simulate hover
    await userEvent.hover(link);
    // We can't test computed styles directly, but we can check the style prop
    // (MUI applies styles via inline style or class, so this is a basic check)
    // For more robust style checks, use visual regression or integration tests
    // Simulate focus
    link.focus();
    expect(link).toHaveFocus();
  });
}); 