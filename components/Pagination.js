import React, { Component } from 'react';
import Select from './Dropdown';

const style = require('../styles/Pagination.scss');

const pageOptions = [
  { value: 10, label: '10 / page' },
  { value: 5, label: '5 / page' },
];

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paginatedLength: '',
      pages: [],
      previous: '',
      next: '',
    };
  }

  componentDidMount() {
    const { Repos } = this.props;
    if (Repos.length !== 0) {
      this.setPages();
    }
  }

  setPages = () => {
    const { Repos, perPage } = this.props;
    const paginatedLength = Math.ceil(Repos.length / perPage.value);
    const pages = Array.from({ length: paginatedLength }, (v, k) => k + 1).slice(0, 5);
    this.setState({
      paginatedLength,
      pages,
      next: paginatedLength > 5 ? 'active' : '',
    });
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { perPage } = this.props;
    if (prevProps.perPage.value !== perPage.value) {
      this.props.renderRepos(perPage);
      this.setPages();
    }
  }

  renderNextAndPreviousPages = ({ target }) => {
    const { pages, paginatedLength } = this.state;
    if (target.value === 'next') {
      const nextPages = [];
      const counter = pages.slice(-1).pop() + 1;
      if (counter <= paginatedLength) {
        for (let i = counter; i < counter + 5; i++) {
          if (i <= paginatedLength) {
            nextPages.push(i);
          }
        }
        this.setState({
          pages: nextPages,
          next: 'active',
          previous: 'active',
        });
      }
      if (nextPages[nextPages.length - 1] === paginatedLength) {
        this.setState({
          next: '',
        });
      }
    }
    if (target.value === 'previous') {
      const previousPages = [];
      const counter = pages[0];
      if (counter > 1) {
        for (let i = counter - 1; i >= counter - 5; i--) {
          previousPages.push(i);
        }
        previousPages.reverse();
        this.setState({
          pages: previousPages,
          next: 'active',
        });
      }
      if (counter === 6) {
        this.setState({
          previous: '',
          next: 'active',
        });
      }
    }
  };


  render() {
    const { pages, next, previous } = this.state;
    const {
      Repos, renderRepos, perPage, currentPage, handlePageChange,
    } = this.props;
    if (Repos.length === 0) {
      return;
    }
    return (
      <div className={style.PaginationSection}>
        <div className={style.PaginationContent}>
          <div className={style.PageButton}>
            <button
              className={previous === 'active' ? style.ActiveNavigationButton : style.Button}
              value="previous"
              onClick={this.renderNextAndPreviousPages}
            >
                Previous
            </button>
            <div className={style.CurrentPageButton}>
              {
                pages.map((page) => (
                  <button
                    value={page}
                    onClick={handlePageChange}
                    className={page === currentPage ? style.ActivePage : ''}
                    key={page}
                  >
                    {page}
                  </button>
                ))
              }
            </div>
            <button
              value="next"
              onClick={this.renderNextAndPreviousPages}
              className={next === 'active' ? style.ActiveNavigationButton : style.Button}
            >
                Next
            </button>
          </div>
          <Select
            value={perPage}
            onChange={renderRepos}
            options={pageOptions}
            instanceId="pagination"
          />
        </div>
      </div>
    );
  }
}

export default Pagination;
