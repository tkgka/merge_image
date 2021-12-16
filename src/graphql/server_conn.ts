import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import gql from "graphql-tag";
import env from "../../env";

const authLink = setContext((_, { headers }) => {
  const token = env.VUE_APP_TOKEN;
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(createHttpLink({ uri: "https://x.oozoo.site" })),
  cache: new InMemoryCache(),
});

async function send_value(server_name: string) {
  const { data } = await client.mutate({
    mutation: gql`
    mutation{
  createContent(contentInput:{
    ServerURL: "${server_name}",
    Client: "merge_server"
  }){
    ServerURL
  }
}
      `,
  });
  return data;
}

export default send_value;
