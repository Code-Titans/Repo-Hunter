import React, { Component } from 'react';
import Layout from './Layout';
import Sidebar from './Sidebar';
import SortAndFilter from './SortAndFilter';
import RepoList from './RepoList';
import styles from '../styles/HomePage.scss';
// TODO: Query for the repository
//  list with the token from localStorage
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      viewProfile: false,
      uploadForm: false,
    };
  }

  handleSearch = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSearchSubmit = (e) => {
    const { search } = this.state;
    e.preventDefault();
    if (!search) {
      console.log('nothing has been entered');
    } else console.log(search);
  };

  handleProfileView = () => {
    const { viewProfile } = this.state;
    this.setState({
      viewProfile: !viewProfile,
    });
  };

  handleShowUploadForm = () => {
    const { uploadForm } = this.state;
    this.setState({
      uploadForm: !uploadForm,
    });
  };

  render() {
    const { viewProfile, uploadForm } = this.state;
    return (
      <Layout
        showProfile={this.handleProfileView}
        viewProfile={viewProfile}
        handleSearch={this.handleSearch}
        handleSearchSubmit={this.handleSearchSubmit}
        showUploadForm={this.handleShowUploadForm}
        uploadForm={uploadForm}
      >
        <SortAndFilter />
        <div className={styles.Container}>
          <Sidebar />
          <RepoList />
        </div>
      </Layout>
    );
  }
}

export default HomePage;
