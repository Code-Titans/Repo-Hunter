import React, {Component, Fragment} from 'react';
import Select from './Dropdown';

const styles = require('../styles/SortAndFilter.scss');


const filter = [
  {value: 'Likes', label: 'Likes', name:'filter'},
  {value: 'Stars', label: 'Stars', name:'filter'},
];
const sorting = [
  {value: 'Most', label: 'Most', name:'sort'},
  {value: 'Least', label: 'Least', name:'sort'},
];

class SortAndFilter extends Component {
  state = {
    filter: '',
    sort: ''
  };

  handleChange = ({value, label,  name}) => {
    this.setState({
      [name]: { value, label, name }
    }, () => console.log(this.state.sort));

  };

  render() {
    return (
        <Fragment>
          <div className={styles.SearchSection}>
            <div className={styles.SearchInput}>
              <label> Filter by:</label>
              <Select options={filter} value={this.state.filter} onChange={this.handleChange}/>
            </div>
            <div className={styles.SearchInput}>
              <label> Sort by:</label>
              <Select options={sorting} value={this.state.sort} onChange={this.handleChange}/>
            </div>
          </div>
        </Fragment>
    )
  }
}

export default SortAndFilter;
