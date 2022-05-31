// import styles from "../styles/Home.module.css";
import styled from "@emotion/styled";

const HomeWrapper = styled.div`
  background: url("../SiteName.gif") center/cover;
  width: 100vw;
  height: 100vh;
`;
export default function Home() {
  return <HomeWrapper></HomeWrapper>;
  // className={styles.container}
}
