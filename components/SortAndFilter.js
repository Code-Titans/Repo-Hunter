import React, { Component } from 'react';
import Select from './Dropdown';
import styles from '../styles/SortAndFilter.scss';

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
      <>
        <div className={styles.FilterSortSection}>
          <div className={styles.FilterInput}>
            <p> Filter by:</p>
            <Select
              options={filtering}
              value={filter}
              onChange={this.handleChange}
              instanceId="filter"
            />
          </div>
          <div className={styles.SortInput}>
            <p> Sort by:</p>
            <Select
              options={sorting}
              value={sort}
              onChange={this.handleChange}
              instanceId="sort"
            />
          </div>
        </div>
      </>
    );
  }
}

export default SortAndFilter;
