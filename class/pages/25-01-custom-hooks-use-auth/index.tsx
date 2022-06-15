import { useAuth } from "../../src/components/commons/hooks/useAuth";

// 커스텀 훅.
export default function CustomHooksUseAuthPage() {
  useAuth();
  return <div>프로필 페이지 입니다!</div>;
}
