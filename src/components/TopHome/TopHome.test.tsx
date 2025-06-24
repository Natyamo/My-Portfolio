import React from 'react';
import { render, screen } from '@testing-library/react';
import { TopHome } from './TopHome';

test('renders TopHome component', () => {
  render(<TopHome />);
  const linkElement = screen.getByText(/TopHome/i);
  expect(linkElement).toBeInTheDocument();
});