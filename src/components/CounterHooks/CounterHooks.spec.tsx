import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CounterHooks from './CounterHooks';

describe("<CounterHooks />", () => {
  it("properly increments and decrements the CounterHooks", () => {
    const { getByText } = render(<CounterHooks />);
    const counter = getByText("0");
    const incrementButton = getByText("+");
    const derementButton = getByText("-");

    fireEvent.click(incrementButton);
    expect(counter.textContent).toEqual("1")

    fireEvent.click(derementButton);
    expect(counter.textContent).toEqual("0")
  });
});