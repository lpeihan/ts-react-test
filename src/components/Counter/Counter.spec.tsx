import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe("<Counter />", () => {
  it("properly increments and decrements the counter", () => {
    const { getByText } = render(<Counter />);
    const counter = getByText("0");
    const incrementButton = getByText("+");
    const derementButton = getByText("-");

    fireEvent.click(incrementButton);
    expect(counter.textContent).toEqual("1")

    fireEvent.click(derementButton);
    expect(counter.textContent).toEqual("0")
  });
});