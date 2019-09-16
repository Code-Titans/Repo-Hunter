import withApollo from 'next-with-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';

export default withApollo(({ initialState }) => new ApolloClient({
  uri: process.env.URI,
  request: (operation) => {
    const token = localStorage.getItem('token');
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  cache: new InMemoryCache().restore(initialState || {}),
}, {
  getDataFromTree: 'always',
}));
