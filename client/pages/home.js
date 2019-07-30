import { Component, Fragment } from 'react';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
const styles = require('../styles/Home.scss');

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      viewProfile: false,
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleProfileView = this.handleProfileView.bind(this);
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

  render() {
    return (
      <Layout
        showProfile={this.handleProfileView}
        viewProfile={this.state.viewProfile}
        handleSearch={this.handleSearch}
        handleSearchSubmit={this.handleSearchSubmit}
      >
        <Sidebar/>
      </Layout>
    )
  }
}

export default Home;
