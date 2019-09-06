import React from 'react';
import App, { Container } from 'next/app';
import Router from 'next/router';
import { ApolloProvider } from '@apollo/react-hooks';
import jwt from 'jsonwebtoken';
import withApollo from '../lib/with-apollo';

class MyApp extends App {
  state = {
    user: {}
  };

  componentDidMount = () => {
    const token = localStorage.getItem('token');

    if (token){
      try {
        jwt.verify(token, process.env.SECRET_KEY);
        if (this.props.router.route === '/') {
          Router.push('/home');
        }
      } catch (e) {
        console.error(e);
        localStorage.clear();
        if (this.props.router.route !== '/') {
          Router.push('/');
        }
      }
    } else {
      if (this.props.router.route !== '/auth' && this.props.router.route !== '/') {
        Router.push('/');
      }
    }
  };

  render() {
    const { Component, pageProps, apollo } = this.props;
    //TODO
    // check the localstorage for a token then
    // decrypt the token and access the data to use in the homepage
    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Component {...pageProps} {...this.state.user}/>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApollo(MyApp);
