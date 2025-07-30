import { render, screen,fireEvent } from '@testing-library/react';
import Counter from './components/Counter';


test('renders initial count', () => {
  render(<Counter />);
  const countElement = screen.getByTestId('count');
  expect(countElement).toHaveTextContent('0');
});

test('increments count on button click', () => {
  render(<Counter />);
  const button = screen.getByText('Increment');
  fireEvent.click(button);
  const countElement = screen.getByTestId('count');
  expect(countElement).toHaveTextContent('1');
});

