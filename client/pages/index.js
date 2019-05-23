import React, { Component } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Login from '../components/Login';

export default class Index extends Component {
  render() {
    return (
      <div>
        <Header>
          This is a child of the header component
        </Header>
        This is repo-hunter a place to share and interact about code.
        <Login />
      </div>
    )
  }
}
