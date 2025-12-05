import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../Counter";

test("increments count when button is clicked", () => {
  render(<Counter />);
  const button = screen.getByRole("button", { name: /count is 0/i });
  expect(button).toBeTruthy();
  fireEvent.click(button);
  expect(button.textContent).toBe("count is 1");
});

test("increments multiple times", () => {
  render(<Counter />);
  const button = screen.getByRole("button");
  for (let i = 0; i < 5; i++) {
    fireEvent.click(button);
  }
  expect(button.textContent).toBe("count is 5");
});

test("renders button with initial count and is interactive", () => {
  render(<Counter />);
  const button = screen.getByText(/count is 0/i);
  expect(button).toBeDefined();
  // ensure subsequent clicks continue to update the label
  fireEvent.click(button);
  fireEvent.click(button);
  expect(button.textContent).toBe("count is 2");
});