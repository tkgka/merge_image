import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import gql from "graphql-tag";

const client = new ApolloClient({
  link: createHttpLink({ uri: "https://x.oozoo.site" }),
  cache: new InMemoryCache(),
});

async function send_value(UserAgentData: string) {
  const val = JSON.stringify(UserAgentData).replace(/"([^(")"]+)":/g, "$1:");
  const data = await client.query({
    query: gql`
    query{
  createContent(contentInput:{
    UserAgentData:${val}
}){
    ServerURL
  }
}
      `,
  });
  return data;
}

export default send_value;
