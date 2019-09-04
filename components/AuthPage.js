import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import PropTypes from 'prop-types';
import Router from 'next/router';
import { Mutation } from 'react-apollo';
import { GITHUB_AUTH } from '../gql';
import Loading from './Loading';

// TODO: Make this component reusable
class CallLoginMutation extends React.Component {
  async componentDidMount() {
    const { called, githubAuth } = this.props;
    if (!called) {
      const { data: { gitHubAuth: { token } } } = await githubAuth();
      if (token) {
        localStorage.setItem('token', token);
        // Router.push('/home',);
      }
    }
  }

  render() {
    return <Loading />;
  }
}

CallLoginMutation.propTypes = {
  called: PropTypes.bool.isRequired,
  githubAuth: PropTypes.func.isRequired,
};
// TODO: Make a universal error handling class for the error boundary
// TODO: Create an error boundary
const AuthLoading = (props) => {
  console.log("AuthLoading ==> ",props);
  const [token, setToken] = useState("");
  const [githubAuth] = useMutation(GITHUB_AUTH);

  useEffect(() => {
    console.log('Calling mutation');
    setToken("hello")
  }, []);

  console.log(token);
  return <Loading/>
};

AuthLoading.getInitialProps = ctx => {
  console.log('Authloading ')
  return { client: ctx.apolloClient };
};

const AuthLoadig = ({ code }) => (
  <Mutation mutation={GITHUB_AUTH} variables={{ code }}>
    {
      (githubAuth, { error, loading, called }) => {
        if (error) return (error);
        if (loading) return <Loading />;
        return (
          <CallLoginMutation githubAuth={githubAuth} called={called} />
        );
      }
    }
  </Mutation>
);

AuthLoading.propTypes = {
  code: PropTypes.string.isRequired,
};


export default AuthLoading;
