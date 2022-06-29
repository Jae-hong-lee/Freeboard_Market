import { GraphQLClient } from "graphql-request";
import { gql } from "@apollo/client";

const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken {
      accessToken
    }
  }
`;
// refreshToken도 만료가 될 수 있다 (try catch)
export async function getAccessToken() {
  try {
    // 2. refreshToken으로 AccessToken 재발급 받기
    const grphQLClient = new GraphQLClient(
      "https://backend07.codebootcamp.co.kr/graphql",
      { credentials: "include" }
    );
    const result = await grphQLClient.request(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreAccessToken.accessToken;
    // 재발급 받은 토큰 return 해주는 역할!
    return newAccessToken;
  } catch (error) {
    console.log(error.message);
    // 이때는 토큰두개다 만료라 로그인을 새로 해주는 방법 밖에 없음.
  }
}
