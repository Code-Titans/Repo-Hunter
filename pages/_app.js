import React from 'react';
import Head from 'next/head';
import App, { Container } from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';
import withApollo from '../lib/with-apollo';

class MyApp extends App {
  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <Container>
        <Head>
          <title>Repohunter</title>
        </Head>
        <ApolloProvider client={apollo}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApollo(MyApp);
