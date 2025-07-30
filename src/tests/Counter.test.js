import { render, fireEvent, screen } from "@testing-library/react";
import Counter from "../components/Counter";

test('1. testing initial component render checking for count and control', () => {
  render(<Counter />)
  const buttonElement = screen.getByText('Increment')
  const countElement = screen.getByTestId('count')
  expect(buttonElement).toBeInTheDocument();
  expect(countElement).toHaveTextContent('0')
})

test('2. testing by incrementing 100 times', () => {
  render(<Counter />)
  const button = screen.getByText('Increment')
  for (let i = 0; i < 100; i++) {
    fireEvent.click(button)
  }
  const count=screen.getByTestId('count')
  expect(count).toHaveTextContent('100')
})