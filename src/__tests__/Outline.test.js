// src/__tests__/OutlineButton.min.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { OutlineButton } from '../components/button/Button';

test('OutlineButton displays its children', () => {
  render(<OutlineButton>Press Me</OutlineButton>);
  const btn = screen.getByRole('button', { name: /press me/i });
  expect(btn).toBeDefined();
});
