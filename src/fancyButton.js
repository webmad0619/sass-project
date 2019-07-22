import React, { Component } from 'react'

export default class FancyButton extends Component {
    render() {
        return (
            <button className="fancy">
                {this.props.children}
            </button>
        )
    }
}
