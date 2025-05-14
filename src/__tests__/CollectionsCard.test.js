// src/__tests__/CollectionsCard.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // 🧠 THIS IS THE FIX
import CollectionsCard from '../components/CollectionsCard/CollectionsCard';

test('renders CollectionsCard with image and video elements', () => {
  render(<CollectionsCard item={{ title: 'Test Movie', img: 'test.jpg', video: 'test.mp4' }} />);
  
  const imageElement = screen.getByRole('img');
  expect(imageElement).toBeInTheDocument();

  const videoElement = document.querySelector('video');
  expect(videoElement).toBeInTheDocument();
});
