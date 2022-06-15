import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";

export default function ApolloSetting(props: any) {
  const [accessToken] = useRecoilState(accessTokenState);

  const uploadLink = createUploadLink({
    uri: "http://backend07.codebootcamp.co.kr/graphql",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    connectToDevTools: true,
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
