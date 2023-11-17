import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://us-central1-ss-devops.cloudfunctions.net/GraphQL',
    cache: new InMemoryCache()
})