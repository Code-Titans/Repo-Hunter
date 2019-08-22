import React, { Component } from 'react';
import Router from 'next/router';
import { Mutation } from 'react-apollo';
import { SIGN_UP, GITHUB_AUTH } from '../gql';
import Loading from './Loading';

const styles = require('../styles/Login.scss');

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginForm: true,
      email: '',
      password: '',
      confirmPassword: '',
      passwordType: 'true',
    };
  }

  handleForm = () => {
    this.setState({ loginForm: !this.state.loginForm });
  };

  handleOnchange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  togglePasswordView = () => {
    this.setState({
      passwordType: !this.state.passwordType,
    });
  };

  render() {
    const {
      loginForm
    } = this.state;
    return (
      <Mutation mutation={loginForm ? GITHUB_AUTH : SIGN_UP}>
        {
          (githubAuth, { error, loading, data }) => {
            if (error) {
              console.log(error.message);
            }
            if (loading) return <Loading/>;

            if (data && (data.login || data.register)) {
              const { token, user } = data.login || data.register;
              if (token) {
                localStorage.setItem('token', token);
                localStorage.setItem('id', user.id);
                Router.push('/home');
              }
            }
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
                    <img src={"/static/img/github-icon.svg"} alt="github"/>
                  </a>
                </div>
                {loginForm
                  ? (
                    <p>
                      Don't have an account?
                      <span onClick={this.handleForm}>Sign up</span>
                    </p>
                  )
                  : (
                    <p>
                      Already have an account?
                      <span onClick={this.handleForm}>Log in</span>
                    </p>
                  )}
              </div>
            );
          }
        }
      </Mutation>
    );
  }
}

export default Login;
