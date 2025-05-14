import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/header/Header';

test('Header renders Netflix Movies link', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
  const logoLink = screen.getByRole('link', { name: /netflix movies/i });
  expect(logoLink).toBeDefined();
});
