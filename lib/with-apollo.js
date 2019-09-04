import withApollo from 'next-with-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
// TODO check for the use of ctx and  headers
export default withApollo(({ initialState }) => new ApolloClient({
  uri: 'http://localhost:4200',
  cache: new InMemoryCache().restore(initialState || {}),
}, {
  getDataFromTree: 'always',
}));
