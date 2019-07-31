import React, {Component, Fragment} from 'react';
import Select from 'react-select';

const style = require('../styles/Dropdown.scss');

class DropDown extends Component {

  state = {
    selectedOption: ''
  };

  handleSelectChange = (selectedOption) => {
    this.setState({
      selectedOption
    }, () => console.log(this.state.selectedOption));

  };

  render() {
    const {options} = this.props;
    const {selectedOption} = this.state;
    return (
        <Fragment>
          <Select
              className={style.Select}
              value={selectedOption}
              onChange={this.handleSelectChange}
              options={options}
          />
        </Fragment>
    )
  }
}

export default DropDown;
