import React, { Component } from 'react';
import Layout from "../components/Layout"
import Login from '../components/Login';

export default class Index extends Component {
  render() {
    return (
      <Layout>
        <Login/>
      </Layout>
    )
  }
}
