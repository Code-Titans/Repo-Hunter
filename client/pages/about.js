import React, { Component } from 'react'
import { withRouter } from 'next/router';
import Layout from '../components/Layout';
const styles = require('../styles/About.scss');

export default class extends Component {
  render() {
    return (
      <Layout>
        <div className={styles.About}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </Layout>
    )
  }
}
