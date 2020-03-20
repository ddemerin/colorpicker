import React, { Component } from 'react'
import Slider from './Slider'

export class SliderTrack extends Component {
  render() {
    const sliders = [
      {
        className: 'h-container',
        class: 'h-slider',
        name: 'H',
        for: 'hue-slider',
      },
      {
        className: 's-container',
        class: 'h-slider',
        name: 'S',
        for: 'sat-slider',
      },
      {
        className: 'l-container',
        class: 'h-slider',
        name: 'L',
        for: 'light-slider',
      },
    ]

    return (
      <section className="hsla-container">
        {sliders.map(slider => {
          return (
            <Slider
              className={slider.className}
              class={slider.class}
              name={slider.name}
              for={slider.for}
            />
          )
        })}
      </section>
    )
  }
}

export default SliderTrack
