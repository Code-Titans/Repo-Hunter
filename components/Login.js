import React from 'react';
import { Mutation } from 'react-apollo';
import { GITHUB_AUTH } from '../gql';
import Loading from './Loading';

const styles = require('../styles/Login.scss');

const Login = () => (
  <Mutation mutation={GITHUB_AUTH}>
    {
      (githubAuth, { error, loading }) => {
        if (error) console.log(error.message);
        if (loading) return <Loading />;
        return (
          <div className={styles.Login}>
            <div
              className={styles.LoginForm}
            >
              <a
                href={`https://github.com/login/oauth/authorize?response_type=code&scope=user%3Aemail&client_id=${process.env.ACCESS_TOKEN}`}
                className={styles.LoginFormSocial}
              >
                <span>Sign up with</span>
                <img src="/static/img/github-icon.svg" alt="github" />
              </a>
            </div>
          </div>
        );
      }
    }
  </Mutation>
);

export default Login;
