import React, {Fragment} from 'react';
import Select from 'react-select';

const style = require('../styles/Dropdown.scss');

const DropDown = ({options, onChange, value, defaultInputValue, instanceId   }) => {
  return (
      <Fragment>
        <Select
            className={style.Select}
            value={value}
            defaultInputValue={defaultInputValue}
            onChange={onChange}
            options={options}
            instanceId={instanceId}
        />
      </Fragment>
  )
};

export default DropDown;
