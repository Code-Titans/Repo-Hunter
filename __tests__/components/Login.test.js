import React from 'react';
import { shallow } from 'enzyme';
import Login from '../../components/Login';

describe('Login component', () => {
  const wrapper = shallow(<Login/>);
  it('should render the login component with a link as a button', function () {
    const button = wrapper.find('a');
    const span = button.childAt(0);
    const image = button.childAt(1);
    expect(span.text()).toContain('Sign up with');
    expect(image.prop('src')).toContain('/static/img/github-icon.svg');
    expect(image.prop('alt')).toContain('github');
  });
});
