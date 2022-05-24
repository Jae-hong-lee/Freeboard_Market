import { AppleOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

const MyIcon = styled(AppleOutlined)`
  color: cornflowerblue;
  font-size: 200px;
  /* width , height 로 조절하는게 아닌 fontsize */
`;

export default function LibraryIconPage() {
  return (
    <>
      <MyIcon />
    </>
  );
}
