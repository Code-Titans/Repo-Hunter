import React, { Component, Fragment } from 'react';
import Router from 'next/router';
const styles = require('../styles/Login.scss');
import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';

const LOGIN = gql`
mutation Login($email: String!, $password: String!){
  login(input: { email: $email, password: $password}) {
      token
      user {
          id
          email
      }
  }
}
`;

const SIGN_UP = gql`
    mutation Register($email: String!, $password: String!){
        register(input: { email: $email, password: $password}) {
            token
            user {
                id
                email
            }
        }
    }
`;

class Login extends Component {
  constructor (props) {
    super(props);
    this.state = {
      loginForm: true,
      email:"",
      password: "",
      confirmPassword: "",
    };
    this.handleOnchange = this.handleOnchange.bind(this);
    this.handleForm = this.handleForm.bind(this);
  };

  handleForm = () => {
    this.setState({ loginForm: !this.state.loginForm })
  };

  handleOnchange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  render(){
    const { loginForm, email } = this.state;
    return(
      <Mutation mutation={loginForm ? LOGIN : SIGN_UP}>
        {
          (login, { error, loading, data }) => {
            if(error) {
              console.log(error.message)
            }
            if(loading) return <p>Loading...</p>;

            if (data && (data.login || data.register)) {
              const { token, user } = data.login || data.register;
              if(token) {
                localStorage.setItem("token", token);
                localStorage.setItem("id", user.id);
                Router.push(`/about`);
              }
            }
            return (
              <div className={styles.Login}>
                <div className={styles.LoginTriangleLeft}/>
                <form
                  className={styles.LoginForm}
                  onSubmit={e => {
                    e.preventDefault();
                    login({ variables: {
                      email: this.state.email,
                      password: this.state.password
                    }})
                  }}
                >
                  {loginForm ? <span>Login</span> : <span>Sign Up</span> }
                  <hr/>
                  <label htmlFor={"email"}>Email</label>
                  <input
                    type="email"
                    name={"email"}
                    value={email}
                    placeholder={"janedoe@example.com"}
                    onChange={this.handleOnchange}
                    required
                  />

                  <label htmlFor={"password"}>Password</label>
                  <input
                    type="password"
                    name={"password"}
                    placeholder={"*********"}
                    onChange={this.handleOnchange}
                    required
                  />
                  <span className={styles.LoginShowPassword}>
                    <img src={"/static/view-password.svg"} alt={"view-password-eye"}/>
                  </span>
                  {/*<span className={styles.Error}>{error}</span>*/}

                  { !loginForm
                    ? <Fragment>
                      <label htmlFor={"confirmPassword"}>Confirm Password</label>
                      <input type="password" name={"confirmPassword"} placeholder={"*********"} onChange={this.handleOnchange} required/>
                    </Fragment>
                    : null
                  }
                  { loginForm ? <span className={styles.LoginFormFPassword}>Forgot Password?</span>: null}
                  { loginForm ? <button type="submit">LOGIN</button> : <button type="submit">SIGN UP</button> }
                </form>
                {/* TODO fix social authentication */}
                {/*{ loginForm ? <p>or login with</p>: <p>or create account with</p>}*/}
                {/*<div className={styles.LoginSocial}>*/}
                {/*  <a href="#"><img src={"/static/google-icon.svg"} alt="google"/></a>*/}
                {/*  <a href="#"><img src={"/static/github-icon.svg"} alt="github"/></a>*/}
                {/*</div>*/}
                { loginForm
                    ? <p>Don't have an account? <span onClick={this.handleForm}>Sign up</span></p>
                    : <p>Already have an account? <span onClick={this.handleForm}>Log in</span></p>
                }
                <div className={styles.LoginTriangleRight}/>
              </div>
            )
          }
        }
      </Mutation>
    )
  }
};

export default Login;
