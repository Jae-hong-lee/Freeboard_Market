import { gql, useQuery } from "@apollo/client";

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
  return (
    <div>
      {data?.fetchUserLoggedIn._id} <br />
      {data?.fetchUserLoggedIn.email}
      <br />
      {data?.fetchUserLoggedIn.name} 님 환영합니다.
    </div>
  );
}
// HTTP Header 에는 어디에서 추가해줘야할까 app.tsx
// uploadLink 부분에 추가.
// accessToken은 여러 곳에서 쓰이니 전역으로 두고 쓰는게 효율적 -> recoil
