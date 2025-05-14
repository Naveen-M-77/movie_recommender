// src/__tests__/Footer.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Footer from '../components/footer/Footer';

test('Footer renders at least one link', () => {
  render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  );
  const links = screen.getAllByRole('link');
  expect(links.length).toBeGreaterThan(0);
});
