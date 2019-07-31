import React, {Fragment} from 'react';
import Select from '../components/Select';

const styles = require('../styles/Search.scss');


const options = [
  {value: 'Most Liked', label: 'Most Liked'},
  {value: 'Most Stared', label: 'Most Stared'},
];

const Search = () => {
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

export default Search;
