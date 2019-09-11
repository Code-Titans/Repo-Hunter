import React from 'react';
import { mount } from 'enzyme';
import Index from '../../pages';

describe('Index page component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Index />
    );
  });

  it('should render the index page', function () {
    expect(wrapper).not.toBeNull();
  });
});
