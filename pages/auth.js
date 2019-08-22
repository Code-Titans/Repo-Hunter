import React from 'react';
import withData from '../lib';
import AuthLoading from '../components/AuthPage';

const Auth = withData(({ url }) => (
  <AuthLoading url={url} />
));

export default Auth;
