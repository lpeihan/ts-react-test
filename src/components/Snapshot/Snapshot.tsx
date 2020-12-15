import React, { Component } from 'react'

interface SnapshotState {
  value: string
}

export default class Snapshot extends Component<{}, SnapshotState> {
  state = {
    value: "snapshot1"
  }

  render() {
    return (
      <p>{this.state.value}</p>
    )
  }
}