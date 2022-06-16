import styled from "@emotion/styled";

export const UploadBtn = styled.div`
  width: 78px;
  height: 78px;
  margin-right: 24px;
  background-color: gray;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const UploadImage = styled.img`
  width: 78px;
  height: 78px;
  margin-right: 24px;
  cursor: pointer;
  object-fit: cover;
`;

export const UploadFileHidden = styled.input`
  display: none;
`;
