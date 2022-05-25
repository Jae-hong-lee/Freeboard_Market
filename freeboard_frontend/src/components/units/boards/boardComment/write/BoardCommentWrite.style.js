import styled from "@emotion/styled";

export const Box = styled.div``;

export const Wrapper = styled.div`
  width: 1200px;
  border: 1px solid black;
  margin: 0px 100px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Error = styled.div`
  padding-top: 10px;
  font-size: 14px;
  color: red;
`;

export const Input = styled.input`
  width: 180px;
  height: 55px;
  margin: 0px 20px 20px 20px;
  border: 1px solid lightgray;
`;

export const Contents = styled.textarea`
  width: 98%;
  height: 108px;
  border: 1px solid lightgray;
  margin-left: 20px; ;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 20px;
`;

export const ContentBtn = styled.button`
  width: 91px;
  height: 51px;
  background-color: black;
  color: white;
  cursor: pointer;
`;

export const ContentsBox = styled.div`
  /* background-color: green; */
`;
