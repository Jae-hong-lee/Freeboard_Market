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

export const SignUpHeader = styled.div`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 40px;
`;

export const SignUpBody = styled.div`
  margin-bottom: 30px;
`;

export const SignUpLabel = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

export const SignUpEmailInput = styled.input`
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

export const DivideLine = styled.div`
  border-top: 1px dotted gray;
  width: 500px;
  margin: 20px 0px 40px;
`;

// 핸드폰 과 인증번호
export const PhoneNumWrapper = styled.div`
  margin-bottom: 30px;
  width: 500px;
`;

export const NumberWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* background-color: red; */
`;
export const NumberInput = styled.input`
  width: 400px;
  height: 52px;
  border: none;
  padding: 14px;
  border-bottom: 1px solid gray;
`;

export const NumberBtn = styled.button`
  width: 90px;
  height: 52px;
  border: none;
  border-radius: 15px;
`;

export const Error = styled.div`
  padding-top: 10px;
  font-size: 14px;
  color: red;
`;
