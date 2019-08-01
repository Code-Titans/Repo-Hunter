import React, { Component, Fragment } from 'react';
import Router from 'next/router';
import { Mutation } from 'react-apollo';
import { LOGIN, SIGN_UP } from '../gql';

const styles = require('../styles/Login.scss');


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginForm: true,
      email: '',
      password: '',
      confirmPassword: '',
      passwordType: 'true'
    };

    this.handleOnchange = this.handleOnchange.bind(this);
    this.handleForm = this.handleForm.bind(this);
    this.togglePasswordView = this.togglePasswordView.bind(this);
  };

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
    const { loginForm, email, password, confirmPassword, passwordType } = this.state;
    return (
      <Mutation mutation={loginForm ? LOGIN : SIGN_UP}>
        {
          (login, { error, loading, data }) => {
            if (error) {
              console.log(error.message);
            }
            if (loading) return <p>Loading...</p>;

            if (data && (data.login || data.register)) {
              const { token, user } = data.login || data.register;
              if (token) {
                localStorage.setItem('token', token);
                localStorage.setItem('id', user.id);
                Router.push(`/home`);
              }
            }
            return (
              <div className={styles.Login}>
                <div className={styles.LoginTriangleLeft}/>
                <form
                  className={styles.LoginForm}
                  onSubmit={e => {
                    e.preventDefault();
                    login({
                      variables: {
                        email: this.state.email,
                        password: this.state.password
                      }
                    });
                  }}
                >
                  {loginForm ? <span>Login</span> : <span>Sign Up</span>}
                  <hr/>
                  <label htmlFor={'email'}>Email</label>
                  <input
                    type="email"
                    name={'email'}
                    value={email}
                    placeholder={'janedoe@example.com'}
                    onChange={this.handleOnchange}
                    required
                  />

                  <label htmlFor={'password'}>Password</label>
                  <input
                    type={passwordType ? 'password' : 'text'}
                    name={'password'}
                    placeholder={'*********'}
                    onChange={this.handleOnchange}
                    value={password}
                    required
                  />
                  <span role='button' className={styles.LoginShowPassword}
                        onClick={this.togglePasswordView}>
                    <img src={'/static/img/view-password.svg'}
                         alt={'view-password-eye'}/>
                  </span>
                  {/*<span className={styles.Error}>{error}</span>*/}

                  {!loginForm
                    ? <Fragment>
                      <label htmlFor={'confirmPassword'}>Confirm
                        Password</label>
                      <input
                        type={passwordType ? 'password' : 'text'}
                        name={'confirmPassword'} placeholder={'*********'}
                        onChange={this.handleOnchange}
                        value={confirmPassword}
                        required
                      />
                    </Fragment>
                    : null
                  }
                  {loginForm ? <span className={styles.LoginFormFPassword}>Forgot Password?</span> : null}
                  {loginForm
                    ? <button
                      type="submit"
                      disabled={!email || !password}
                      className={(!email || !password) ? styles.Disabled : ''}
                    >LOGIN</button>
                    : <button
                      type="submit"
                      disabled={(!email || !password || !confirmPassword || !(password === confirmPassword))}
                      className={
                        (!email || !password || !confirmPassword || !(password === confirmPassword))
                          ? styles.Disabled
                          : ''}
                    >SIGN UP</button>}
                </form>
                {/* TODO fix social authentication */}
                {/*{ loginForm ? <p>or login with</p>: <p>or create account with</p>}*/}
                {/*<div className={styles.LoginSocial}>*/}
                {/*  <a href="#"><img src={"/static/img/google-icon.svg"} alt="google"/></a>*/}
                {/*  <a href="#"><img src={"/static/img/github-icon.svg"} alt="github"/></a>*/}
                {/*</div>*/}
                {loginForm
                  ? <p>Don't have an account? <span onClick={this.handleForm}>Sign up</span>
                  </p>
                  : <p>Already have an account? <span onClick={this.handleForm}>Log in</span>
                  </p>
                }
                <div className={styles.LoginTriangleRight}/>
              </div>
            );
          }
        }
      </Mutation>
    );
  }
};

export default Login;
