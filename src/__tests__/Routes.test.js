// src/__tests__/Routes.min.test.js
import Routes from '../config/Routes';

test('Routes is defined and is a function', () => {
  expect(Routes).toBeDefined();
  expect(typeof Routes).toBe('function');
});
