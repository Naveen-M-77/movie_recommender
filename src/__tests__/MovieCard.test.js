// src/__tests__/MovieCard.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import MovieCard from '../components/movie-card/MovieCard';

test('MovieCard applies background-image style', () => {
  const mockItem = { poster_path: 'path.jpg', title: 'Test Title' };
  render(
    <MemoryRouter>
      <MovieCard item={mockItem} category="movie" />
    </MemoryRouter>
  );

  // Grab the div that uses the .movie-card class
  const cardDiv = screen.getByRole('link', { name: /test title/i }).querySelector('.movie-card');
  expect(cardDiv).toBeInTheDocument();

  // Expect its inline style to include the poster path
  expect(cardDiv.style.backgroundImage).toContain('path.jpg');
});
