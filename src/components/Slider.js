import React, { Component } from 'react'

export class Slider extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <label for={this.props.for}>{this.props.name}</label>
        <input
          type="range"
          className={this.props.class}
          name={this.props.name}
          min="0"
          max="100"
        ></input>
      </div>
    )
  }
}

export default Slider
