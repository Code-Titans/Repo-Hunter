import React, {Component} from 'react';

const style = require('../styles/RepoList.scss');
import {Repos} from '../fixtures'
import RepoCard from "./RepoCard";
import Pagination from "./Pagination";

class RepoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      perPage: {value: 10, label: '10 / page'},
      displayedRepos: Repos
    }
  }

  renderRepos = ({value, label}) => {
    this.setState({
      perPage: {value, label}
    })
  };

  handlePageChange = ({target}) => {
    const {value} = target;
    this.setState({
      currentPage: Number(value)
    })
  };

  render() {
    const {displayedRepos, perPage, currentPage} = this.state;
    return (
        <div className={style.RepoList}>
          {
            displayedRepos.slice(0, perPage.value).map(repo => (
                <RepoCard repo={repo}/>
            ))
          }
          <Pagination
              renderRepos={this.renderRepos}
              perPage={perPage}
              handlePageChange={this.handlePageChange}
              currentPage={currentPage}
              Repos={Repos}/>
        </div>
    );
  }
}


export default RepoList;
