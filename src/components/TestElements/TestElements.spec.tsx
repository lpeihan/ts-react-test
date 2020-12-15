import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import TestElements from './TestElements';

afterEach(cleanup);

describe("<TestElements />", () => {
  it("should equal to 0", () => {
    const { getByTestId } = render(<TestElements />);
    expect(getByTestId("counter")).toHaveTextContent("0");
  });


  it("should be enabled", () => {
    const { getByTestId } = render(<TestElements />);
    expect(getByTestId("button-up")).not.toHaveAttribute("disabled");
    fireEvent.click(getByTestId("button-up"));
    expect(getByTestId("counter").textContent).toEqual("-1");
  });

  it("should be disabled", () => {
    const { getByTestId } = render(<TestElements />);
    expect(getByTestId("button-down")).toBeDisabled();
    fireEvent.click(getByTestId("button-down"));
    expect(getByTestId("counter").textContent).toEqual("0");
  });
});