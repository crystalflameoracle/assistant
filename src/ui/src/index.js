import React from "react";
import ReactDOM from "react-dom";
import {ApolloClient,InMemoryCache,ApolloProvider,} from "@apollo/client";
import App from "./App"

export const client = new ApolloClient({
  uri: "http://192.168.1.5:4000/",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("react-body")
);
