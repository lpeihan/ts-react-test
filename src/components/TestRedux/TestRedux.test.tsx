import React from 'react'
import "@testing-library/jest-dom/extend-expect";
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render, cleanup, fireEvent } from '@testing-library/react';
import { reducer } from '../../store/reducer'
import TestRedux from './TestRedux'

const renderWithRedux = (
  component,
  initialState?
) => {
  const store = createStore(reducer, initialState)
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

 afterEach(cleanup);

it('checks initial state is equal to 0', () => {
    const { getByTestId } = renderWithRedux(<TestRedux />)
    expect(getByTestId('counter')).toHaveTextContent('0')
  })

  it('increments the counter through redux', () => {
    const { getByTestId } = renderWithRedux(<TestRedux />, {count: 5});
    fireEvent.click(getByTestId('button-up'))
    expect(getByTestId('counter')).toHaveTextContent('6')
  })
  
  it('decrements the counter through redux', () => {
    const { getByTestId} = renderWithRedux(<TestRedux />, { count: 100})
    fireEvent.click(getByTestId('button-down'))
    expect(getByTestId('counter')).toHaveTextContent('99')
  })