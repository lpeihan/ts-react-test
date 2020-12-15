import React, { Component } from 'react'

interface TestElementsState {
  count: number
}

export default class TestElements extends Component<{}, TestElementsState> {
  state = {
    count: 0
  }

  descrement = () => {
    this.setState(({ count }) => ({ count: count - 1 }))
  }

  increment = () => {
    this.setState(({ count }) => ({ count: count + 1 }))
  }

  render() {
    return (
      <div>
        <button data-testid="button-up" onClick={this.descrement}>-</button>
        <p data-testid="counter">{this.state.count}</p>
        <button disabled data-testid="button-down" onClick={this.increment}>+</button>
      </div>
    )
  }
}