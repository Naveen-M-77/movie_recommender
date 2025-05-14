import { render, screen } from '@testing-library/react';
import App from '../App';
import { MemoryRouter } from 'react-router-dom';

test('renders header and footer components', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  // You can customize the text queries based on your actual Header/Footer content
  expect(screen.getByRole('banner')).toBeInTheDocument(); // If <header> uses role="banner"
  expect(screen.getByRole('contentinfo')).toBeInTheDocument(); // If <footer> uses role="contentinfo"
});
