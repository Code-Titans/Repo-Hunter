import React from 'react';
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
      const { data: { gitHubAuth } } = await githubAuth();
      if (gitHubAuth) {
        localStorage.setItem('token', gitHubAuth.access_token);
        Router.push('/home');
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

// TODO:
//  Create an error boundary
const AuthLoading = ({ url }) => {
  const { code } = url.query;
  return (
    <Mutation mutation={GITHUB_AUTH} variables={{ code }}>
      {
        (githubAuth, { error, loading, called }) => {
          if (error) console.log(error.message);
          if (loading) return <Loading />;
          return (
            <CallLoginMutation githubAuth={githubAuth} called={called} />
          );
        }
      }
    </Mutation>
  );
};

AuthLoading.propTypes = {
  url: PropTypes.shape({
    query: PropTypes.shape({
      code: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};


export default AuthLoading;
