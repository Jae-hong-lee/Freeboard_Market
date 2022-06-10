import { gql, useQuery } from "@apollo/client";
import { withAuth } from "../../src/components/commons/hocs/withAuth";
// import { useRouter } from "next/router";
// import { useEffect } from "react";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

// export default 는 아래에서 withAuth로 감싸서 해줌.
function LoginSuccessPage() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  // const router = useRouter();

  // useEffect(() => {
  //   if (!localStorage.getItem("accessToken")) {
  //     alert("로그인 후 이용가능합니다");
  //     router.push("/23-04-login-check");
  //   }
  // }, []);

  // HOC 페이지로 넘겨줌!!!

  return <div>{data?.fetchUserLoggedIn.name}님 환영합니다.</div>;
}

export default withAuth(LoginSuccessPage);
