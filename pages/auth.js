import React, { useEffect } from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';
import { useMutation } from '@apollo/react-hooks';
import jwt from 'jsonwebtoken';
import { GITHUB_AUTH } from '../gql';
import Loading from '../components/Loading';

const Auth = ({ code }) => {
  const [githubAuth] = useMutation(GITHUB_AUTH);
  const callMutation = async authCode => {
    const { data: { gitHubAuth: { token } } } = await githubAuth({
      variables: { code: authCode },
    });
    return token;
  };
  useEffect(() => {
    callMutation(code)
      .then(token => {
        const {
          data: {
            accessToken, picture, username, id,
          },
        } = jwt.verify(token, process.env.SECRET_KEY);
        localStorage.setItem('token', token);
        localStorage.setItem('picture', picture);
        localStorage.setItem('username', username);
        localStorage.setItem('id', id);
        localStorage.setItem('accessToken', accessToken);
        Router.push('/home');
      })
      .catch(err => err.message);
  }, []);

  return <Loading />;
};

Auth.getInitialProps = ctx => {
  const { query: { code } } = ctx;
  return { code };
};

Auth.propTypes = {
  code: PropTypes.string.isRequired,
};

export default Auth;
