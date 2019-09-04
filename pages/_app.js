import React from 'react';
import App, { Container } from 'next/app';
import { Router } from 'next/router';
import { ApolloProvider } from "@apollo/react-hooks";
import withApollo from '../lib/with-apollo';

class MyApp extends App {
  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApollo(MyApp);
