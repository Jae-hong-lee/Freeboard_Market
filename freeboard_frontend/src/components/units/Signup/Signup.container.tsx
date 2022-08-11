import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import SignUpPresenterPage from "./Signup.presenter";
import { CREATE_USER } from "./Signup.queries";

export default function SignUpContainerPage() {
  const router = useRouter();
  const [createUser] = useMutation(CREATE_USER);

  const onClickSignup = async (data: any) => {
    const { name, email, password } = data;
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            name,
            email,
            password,
          },
        },
      });

      Modal.success({ content: "회원가입성공!" });
      router.push("./Login");
    } catch (error) {
      Modal.error({ content: "회원가입실패" });
    }
  };
  return <SignUpPresenterPage onClickSignup={onClickSignup} />;
}
