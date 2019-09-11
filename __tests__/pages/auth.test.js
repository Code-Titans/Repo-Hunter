import React from 'react';
import { mount } from 'enzyme';
import Auth from '../../pages/auth';

describe('Auth page component', () => {
  let wrapper, props, mocks;
  let code = '0c37beabd9db9398a488';
  let ctx = { query: { code }};

  beforeEach(() => {
    props = Auth.getInitialProps(ctx);
    wrapper = mount(
      <Auth code={props.code} />
    );
  });

  it('should render the auth page', function () {
    expect(wrapper).not.toBeNull();
  });
});
