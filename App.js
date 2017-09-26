import React from 'react';
import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
} from 'react-apollo';
import Hello from './Hello'

const uri = 'https://zvn57lnl7.lp.gql.zone/graphql';
const networkInterface = createNetworkInterface({ uri });
const client = new ApolloClient({ networkInterface });
const App = () => (
  <ApolloProvider client={client}>
    <Hello />
  </ApolloProvider>
);

export default App;
