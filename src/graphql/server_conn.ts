import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import gql from "graphql-tag";

const client = new ApolloClient({
  link: createHttpLink({ uri: "https://x.oozoo.site" }),
  cache: new InMemoryCache(),
});

async function send_value(navigator) {
  const brands = navigator.userAgentData.brands;
  // console.log(navigator.userAgentData.platform);
  const val = JSON.stringify(brands).replace(/"([^(")"]+)":/g, "$1:");
  const data = await client.query({
    query: gql`
    query{
  createContent(contentInput:{
    brands:${val}
    mobile:${navigator.userAgentData.mobile}
    platform:"${navigator.userAgentData.platform}"
}){
    ServerURL
  }
}
      `,
  });
  return data;
}

export default send_value;
