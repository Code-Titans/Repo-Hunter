import React, {Fragment} from 'react';
import Select from 'react-select';

const style = require('../styles/Dropdown.scss');

const DropDown = ({options, onChange, value }) => {
  return (
      <Fragment>
        <Select
            className={style.Select}
            value={value}
            onChange={onChange}
            options={options}
        />
      </Fragment>
  )
};

export default DropDown;
