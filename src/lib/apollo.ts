import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ng5ulr00h001xyemtlf4jb/master',
  cache: new InMemoryCache(),
});