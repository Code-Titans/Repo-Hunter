import React, { Component } from 'react'

export default class extends Component {
  static getInitialProps ({ query: { code } }) {
    return { aboutId: code }
  }

  render () {
    return <div>
      <h1>Code: {this.props.aboutId}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  }
}
