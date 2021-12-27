import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import gql from "graphql-tag";
import env from "../../env";


const client = new ApolloClient({
  link: createHttpLink({ uri: "https://x.oozoo.site" }),
  cache: new InMemoryCache(),
});

async function send_value() {
  const data = await client.query({
    query: gql`
    query{
  createContent{
    ServerURL
  }
}
      `,
  });
  return data;
}

export default send_value;
