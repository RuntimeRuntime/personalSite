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
    expect(link).toHaveStyle('color: #ffffff');
  });

  it('applies the correct hover and focus styles', async () => {
    render(<NavBarItem {...defaultProps} />);
    const link = screen.getByRole('link');
    // Simulate hover
    userEvent.hover(link);
    expect(link).toHaveStyle('transform: scale(1.1)');
    expect(link).toHaveStyle('color: #ffffff');
    expect(link).toHaveStyle('background-color: transparent');
    userEvent.tab();
    expect(link).toHaveFocus();
    expect(link).toHaveStyle('background-color: transparent');
  });
}); 