import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../src/commons/store";
const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
    }
  }
`;

export default function LoginSuccessPage() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const router = useRouter();
  const [accessToken] = useRecoilState(accessTokenState);

  console.log(data);
  useEffect(() => {
    if (!accessToken) {
      alert("로그인을 먼저해주세요");
      return router.push("./login");
    }
    console.log("login");
  }, []);

  return (
    <div>
      {data ? data.fetchUserLoggedIn.email : "로그인을 먼저해주세요"}
      {/* {data?.fetchUserLoggedIn._id} <br />
      {data?.fetchUserLoggedIn.email}
      <br />
      {data?.fetchUserLoggedIn.name} 님 환영합니다. */}
    </div>
  );
}
