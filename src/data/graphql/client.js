import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { store } from 'store/store';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = new HttpLink({
  uri: 'http://127.0.0.1:8000/graphql/',
  headers: {
    authorization: `Authorization: JWT ${store.getState().JWT}`
  },
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    // do something with graphql error
  }

  if (networkError) {
    // do something with network error
  }
});

const link = ApolloLink.from([errorLink, httpLink]);

const cache = new InMemoryCache();

export default new ApolloClient({
  link,
  cache,
});
