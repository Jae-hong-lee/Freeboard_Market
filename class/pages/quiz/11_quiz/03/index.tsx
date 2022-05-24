import ReactPlayer from "react-player";
export default function Test4() {
  return (
    <ReactPlayer
      url="https://www.youtube.com/watch?v=hnanNlDbsE4"
      width="800px"
      height="600px"
      playing={true} // 자동 재생 on
      muted={true} //
      controls={true} // 컨트롤러
    ></ReactPlayer>
  );
}
