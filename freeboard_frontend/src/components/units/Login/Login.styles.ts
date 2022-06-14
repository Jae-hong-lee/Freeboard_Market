import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 800px;
  border: 1px solid black;
  margin: 100px;
  padding: 50px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
`;

export const LoginHeader = styled.div`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 40px;
  text-align: center;
`;

export const LoginBody = styled.div`
  margin-bottom: 30px;
`;

export const LoginLabel = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

export const LoginEmailInput = styled.input`
  width: 500px;
  height: 52px;
  border: none;
  padding: 14px;
  border-bottom: 1px solid gray;
`;

export const LoginBtn = styled.button`
  width: 500px;
  height: 52px;
  margin-bottom: 15px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  background-color: ${(props) => (props.isActive ? "cornflowerblue" : "none")};
`;
// background-color: ${(props) => (props.isActive ? "cornflowerblue" : "none")};
export const SignupMoveBtn = styled.button`
  width: 500px;
  height: 52px;
  margin-bottom: 15px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  :hover {
    background-color: cornflowerblue;
  }
`;

export const DivideLine = styled.div`
  border-top: 1px solid gray;
  width: 500px;
  margin: 20px 0px 40px;
`;

export const Error = styled.div`
  padding-top: 10px;
  font-size: 14px;
  color: red;
`;

// 아이디 찾기, 비밀번호 재설정
export const LoginFooter = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-weight: 700;
`;
