import React, { Component } from 'react'

interface CounterState {
  count: number
}

export default class Counter extends Component<{}, CounterState> {
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
        <button onClick={this.descrement}>-</button>
        <p>{this.state.count}</p>
        <button onClick={this.increment}>+</button>
      </div>
    )
  }
}