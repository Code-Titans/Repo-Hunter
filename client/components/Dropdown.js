import React, {Fragment} from 'react';
import Select from 'react-select';

const style = require('../styles/Dropdown.scss');

const DropDown = ({options, onChange, value, defaultInputValue  }) => {
  return (
      <Fragment>
        <Select
            className={style.Select}
            value={value}
            defaultInputValue={defaultInputValue}
            onChange={onChange}
            options={options}
        />
      </Fragment>
  )
};

export default DropDown;
