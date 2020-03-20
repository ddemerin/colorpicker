import React, { Component } from 'react'

export class App extends Component {
  state = {
    hue: Math.floor(Math.random() * 360),
    sat: Math.floor(Math.random() * 100),
    light: Math.floor(Math.random() * 100),
  }

  randomAll = e => {
    this.setState({
      hue: Math.floor(Math.random() * 360),
      sat: Math.floor(Math.random() * 100),
      light: Math.floor(Math.random() * 100),
    })
  }

  updateHue = e => {
    this.setState({
      hue: e.target.value,
    })
    console.log(this.state.hue)
  }

  updateSat = e => {
    this.setState({
      sat: e.target.value,
    })
    console.log(this.state.hue)
  }

  updateLight = e => {
    this.setState({
      light: e.target.value,
    })
    console.log(this.state.hue)
  }

  updateAll = e => {
    this.setState({
      hue: e.target.value,
      sat: e.target.value,
      light: e.target.value,
    })
  }

  render() {
    return (
      <body>
        <main>
          <section className="color-display-container">
            <aside className="color-display">
              <h1>Color</h1>
              <div
                className="color-box"
                style={{
                  backgroundColor: `hsla(${this.state.hue},
                ${this.state.sat}%,
                ${this.state.light}%)`,
                }}
              ></div>
              <button
                onClick={this.randomAll}
                className="random-button"
                name="random-button"
                value={this.updateAll}
              >
                Randomize!
              </button>
            </aside>
            <div className="hsla-code-container">
              <p className="hsla-code">
                hsla({this.state.hue}, {this.state.sat}%, {this.state.light}%)
              </p>
            </div>
          </section>
          <section className="hsla-container">
            <div className="h-container">
              <label htmlFor="h-slider">H</label>
              <input
                onChange={this.updateHue}
                type="range"
                className="h-slider"
                name="h-slider"
                min="0"
                max="360"
                value={this.state.hue}
              ></input>
              <p className="percent">{this.state.hue}</p>
            </div>
            <div className="s-container">
              <label htmlFor="s-slider">S</label>
              <input
                onChange={this.updateSat}
                type="range"
                className="s-slider"
                name="s-slider"
                min="0"
                max="100"
                value={this.state.sat}
              ></input>
              <p className="percent">{this.state.sat}%</p>
            </div>
            <div className="l-container">
              <label htmlFor="l-slider">L</label>
              <input
                onChange={this.updateLight}
                type="range"
                className="l-slider"
                name="l-slider"
                min="0"
                max="100"
                value={this.state.light}
              ></input>
              <p className="percent">{this.state.light}%</p>
            </div>
            <div className="a-container">
              <label htmlFor="a-slider">A</label>
              <input
                onChange={this.updateAlpha}
                type="range"
                className="a-slider"
                name="a-slider"
                min="0"
                max="100"
                value={this.state.alpha}
              ></input>
              <p className="percent">{this.state.alpha}%</p>
            </div>
          </section>
        </main>
      </body>
    )
  }
}

export default App
