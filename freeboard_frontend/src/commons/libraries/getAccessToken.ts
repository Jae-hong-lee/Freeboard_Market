import { GraphQLClient } from "graphql-request";
import { gql } from "@apollo/client";
import { Modal } from "antd";

const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken {
      accessToken
    }
  }
`;

export async function getAccessToken() {
  try {
    const grphQLClient = new GraphQLClient(
      "https://backend07.codebootcamp.co.kr/graphql",
      { credentials: "include" }
    );

    const result = await grphQLClient.request(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreAccessToken.accessToken;
    return newAccessToken;
  } catch (error) {
    console.log(error);
  }
}
