import React, { Component } from 'react'
import FancyButton from './fancyButton';
// import "./sass/main.scss"

export default class App extends Component {
  render() {
    return (
      <div>
        <FancyButton>Hola chicos 1</FancyButton>
        <FancyButton>Hola chicos 2</FancyButton>
        <FancyButton>Hola chicos 3</FancyButton>

        <div className="test-div">lorem ipsum dolor</div>
        {
          Array(100).fill().map((x, idx) => {
            return <div className={"button_" + idx}></div>
          })
        }
      </div>
    )
  }
}
