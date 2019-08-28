import React from 'react';
import { mount } from 'enzyme';

import DropDown from '../components/Dropdown';

const sorting = [
  { value: 'Most', label: 'Most', name: 'sort' },
  { value: 'Least', label: 'Least', name: 'sort' },
];

describe('DropDown component', () => {
  let wrapper;
  const props = {
    value: '',
    defaultInputValue: '',
    onchange: jest.fn(),
    instanceId: 'kimame',
    options: sorting,
  };
  beforeEach(() => {
    wrapper = mount(<DropDown {...props} />);
  });

  it('should render DropDown component', () => {
  });
});
