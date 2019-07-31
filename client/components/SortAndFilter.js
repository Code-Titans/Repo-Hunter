import React, {Fragment} from 'react';
import Select from '../components/Dropdown';

const styles = require('../styles/SortAndFilter.scss');


const options = [
  {value: 'Most Liked', label: 'Most Liked'},
  {value: 'Most Stared', label: 'Most Stared'},
];

const SortAndFilter = () => {
  return (
      <Fragment>
        <div className={styles.SearchSection}>
          <div className={styles.SearchInput}>
            <label> Filter by:</label>
            <Select options={options}/>
          </div>
          <div className={styles.SearchInput}>
            <label> Sort by:</label>
            <Select options={options}/>
          </div>
        </div>
      </Fragment>
  )
};

export default SortAndFilter;
