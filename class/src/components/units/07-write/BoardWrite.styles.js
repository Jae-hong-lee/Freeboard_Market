import styled from '@emotion/styled'

export const WriterInput = styled.input`

`;

export const SubmitButton = styled.button`
  background-color: ${ (props) => props.isActive === true ? "yellow" : "" };
  /* 함수를 강제로 만들고 그 안에 props */
  /* 삼항 연산자로 isActive가 true라면 yellow, false = "" */
`;