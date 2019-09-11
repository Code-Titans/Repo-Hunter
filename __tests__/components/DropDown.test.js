import React from 'react';
import { mount } from 'enzyme';

import DropDown from '../../components/Dropdown';

const sorting = [
  { value: 'Most', label: 'Most', name: 'sort' },
  { value: 'Least', label: 'Least', name: 'sort' },
];

describe('DropDown component', () => {
  let wrapper;
  const props = {
    value: '',
    defaultInputValue: '',
    onChange: jest.fn(),
    instanceId: 'kimame',
    options: sorting,
  };
  beforeEach(() => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    wrapper = mount(<DropDown {...props} />);
  });

  it('should render DropDown component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
