import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import { onError } from "@apollo/client/link/error";
import { useEffect } from "react";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";

export default function ApolloSetting(props: any) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  useEffect(() => {
    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions.code === "UNAUTHENTICATED") {
          getAccessToken().then((newAccessToken) => {
            setAccessToken(newAccessToken);
            operation.setContext({
              headers: {
                ...operation.getContext().headers,
                Authorization: `Bearer ${newAccessToken}`,
              },
            });
          });

          return forward(operation);
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend10.codebootcamp.co.kr/graphql",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: "include",
  });

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    connectToDevTools: true,
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
