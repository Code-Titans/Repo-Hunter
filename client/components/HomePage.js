import Layout from './Layout';
import Sidebar from './Sidebar';
import React, { Component } from 'react';

const styles = require('../styles/Home.scss');

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      viewProfile: false,
      uploadForm: false,
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleProfileView = this.handleProfileView.bind(this);
    this.handleShowUploadForm = this.handleShowUploadForm.bind(this);
  };

  handleSearch = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  };

  handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!this.state.search) {
      console.log('nothing has been entered')
    } else console.log(this.state.search)
  };

  handleProfileView = () => {
    this.setState({
      viewProfile: !this.state.viewProfile
    })
  };

  handleShowUploadForm = () => {
    this.setState({
      uploadForm : !this.state.uploadForm
    })
  };

  render() {
    return (
      <Layout
        showProfile={this.handleProfileView}
        viewProfile={this.state.viewProfile}
        handleSearch={this.handleSearch}
        handleSearchSubmit={this.handleSearchSubmit}
        showUploadForm={this.handleShowUploadForm}
        uploadForm={this.state.uploadForm}
      >
        <Sidebar/>
      </Layout>
    )
  }
}

export default HomePage;
