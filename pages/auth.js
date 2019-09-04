import React, { useEffect } from 'react';
import Router from "next/router";
import PropTypes from 'prop-types';
import { useMutation } from '@apollo/react-hooks';
import { GITHUB_AUTH } from '../gql';
import Loading from '../components/Loading';

const Auth = ({ code }) => {
  const [githubAuth] = useMutation(GITHUB_AUTH);
  const callMutation = async (code) => {
    const { data: { gitHubAuth: { token }}} =
      await githubAuth({ variables: { code } });
    return token;
  };
  useEffect(() => {
    callMutation(code)
      .then(token => {
        localStorage.setItem('token', token);
        Router.push("/home");
      })
      .catch(err => console.log(err.message));
  }, []);

  return <Loading/>
};

Auth.getInitialProps = ctx => {
  const { query : { code } } = ctx;
  return { code };
};

Auth.propTypes = {
  code: PropTypes.string.isRequired,
};

export default Auth;
