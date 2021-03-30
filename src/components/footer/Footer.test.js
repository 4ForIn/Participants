import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Footer component', () => {
  it('renders zoom word', () => {
    // getter from react Testing Library: div.querySelector('.app')
    const { getByText } = render(<Footer />);
    expect(getByText(/zoom/i)).toBeInTheDocument();
  });
  it('renders learning word', () => {
    const { getByText } = render(<Footer />);
    expect(getByText(/learning/i)).toBeInTheDocument();
  });
  it('renders strong element', () => {
    const { getByTestId } = render(<Footer />);
    expect(getByTestId('in-footer-strong')).toBeInTheDocument();
  });
});
