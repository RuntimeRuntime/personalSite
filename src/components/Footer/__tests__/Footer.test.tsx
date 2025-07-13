import { render, screen } from '@testing-library/react';
import Footer from '../Footer';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../../muiTheme';

describe('Footer Component', () => {
  const renderWithTheme = (ui: React.ReactElement) =>
    render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);

  it('renders copyright information', () => {
    renderWithTheme(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(
      screen.getByText(`© ${currentYear} Kyle Byrne. All rights reserved.`)
    ).toBeInTheDocument();
  });

  it('renders social links', () => {
    renderWithTheme(<Footer />);

    const githubLink = screen.getByTestId('github-link');
    const linkedinLink = screen.getByTestId('linkedin-link');
    const emailLink = screen.getByTestId('email-link');

    expect(githubLink).toBeInTheDocument();
    expect(linkedinLink).toBeInTheDocument();
    expect(emailLink).toBeInTheDocument();
  });
});
