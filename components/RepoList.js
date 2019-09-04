import React, { Component } from 'react';
import { Repos } from '../fixtures';
import RepoCard from './RepoCard';
import Pagination from './Pagination';

const style = require('../styles/RepoList.scss');

class RepoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      perPage: { value: 10, label: '10 / page' },
      repos: Repos,
    };
  }

  componentDidMount() {
    // TODO: call the repository list mutation
  }

  renderRepos = ({ value, label }) => {
    this.setState({
      perPage: { value, label },
    });
  };

  handlePageChange = ({ target }) => {
    const { value } = target;
    this.setState({
      currentPage: Number(value),
    });
  };

  render() {
    const { repos, perPage, currentPage } = this.state;
    return (
      <div className={style.RepoList}>
        {
          repos.slice(0, perPage.value).map((repo, i) => (
            <RepoCard repo={repo} key={i.toString()} />
          ))
        }
        <Pagination
          renderRepos={this.renderRepos}
          perPage={perPage}
          handlePageChange={this.handlePageChange}
          currentPage={currentPage}
          Repos={Repos}
        />
      </div>
    );
  }
}


export default RepoList;
