import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import gql from "graphql-tag";

const client = new ApolloClient({
  link: createHttpLink({ uri: "https://x.oozoo.site" }),
  // link: createHttpLink({ uri: "http://localhost:4000" }),
  cache: new InMemoryCache(),
});

async function send_value(navigator) {
  let brands = null
  let mobile = null
  let platform = null

  if (navigator.userAgentData != undefined) {
  brands = JSON.stringify(navigator.userAgentData.brands).replace(/"([^(")"]+)":/g, "$1:");
  mobile = navigator.userAgentData.mobile
   platform = navigator.userAgentData.platform
  }
  const data = await client.query({
    query: gql`
    query{
  createContent(contentInput:{
    brands:${brands}
    mobile:${mobile}
    platform:"${platform}"
}){
    ServerURL
  }
}
      `,
  });
  return data;
}

export default send_value;
