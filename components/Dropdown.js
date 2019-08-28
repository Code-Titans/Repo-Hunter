import React, { Fragment } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

const style = require('../styles/Dropdown.scss');

const DropDown = ({
  options, onChange, value, defaultInputValue, instanceId,
}) => (
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
);

DropDown.propTypes = {
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  defaultInputValue: PropTypes.string.isRequired,
  instanceId: PropTypes.string.isRequired,
};

export default DropDown;
