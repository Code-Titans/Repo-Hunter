import React, { Component, Fragment } from 'react';
import Select from './Dropdown';

const styles = require('../styles/SortAndFilter.scss');


const filtering = [
  { value: 'Likes', label: 'Likes', name: 'filter' },
  { value: 'Stars', label: 'Stars', name: 'filter' },
];
const sorting = [
  { value: 'Most', label: 'Most', name: 'sort' },
  { value: 'Least', label: 'Least', name: 'sort' },
];

class SortAndFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
      sort: '',
    };
  }


  handleChange = ({ value, label, name }) => (
    this.setState({
      [name]: { value, label, name },
    })
  );

  render() {
    const { filter, sort } = this.state;
    return (
      <Fragment>
        <div className={styles.SearchSection}>
          <div className={styles.SearchInput}>
            <span> Filter by:</span>
            <Select
              options={filtering}
              value={filter}
              onChange={this.handleChange}
              instanceId="filter"
            />
          </div>
          <div className={styles.SearchInput}>
            <span> Sort by:</span>
            <Select
              options={sorting}
              value={sort}
              onChange={this.handleChange}
              instanceId="sort"
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default SortAndFilter;
