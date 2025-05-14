import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../components/button/Button'; // Adjust path to your actual Button component

test('button click triggers an event', () => {
  // Mock function for onClick
  const handleClick = jest.fn();
  
  // Render the button with "Click me" as children
  render(<Button onClick={handleClick}>Click me</Button>); 

  // Find the button using the text "Click me"
  const buttonElement = screen.getByRole('button', { name: /click me/i });

  // Simulate a click event
  fireEvent.click(buttonElement);

  // Assert that the click function was called
  expect(handleClick).toHaveBeenCalledTimes(1);
});
