import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Button from "../src/common/components/Button";

test("renders Button with label", () => {
  render(<Button label="Click Me" />);
  const buttonElement = screen.getByText(/click me/i);
  //   expect(buttonElement).toBeInTheDocument();
});

test("calls onClick when clicked", () => {
  const handleClick = jest.fn();
  render(<Button label="Click Me" onClick={handleClick} />);
  const buttonElement = screen.getByText(/click me/i);
  fireEvent.click(buttonElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
