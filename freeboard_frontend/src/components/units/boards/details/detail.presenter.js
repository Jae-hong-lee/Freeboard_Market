import * as DS from "./detail.styles";
import { getDate } from "../../../../commons/libraries/utils";
import ReactPlayer from "react-player";
import { Tooltip } from "antd";
export default function DetailUI(props) {
  return (
    // <S.writer> 작성자: {props.data?.fetchBoard.writer}</S.writer>
    <DS.Box>
      {/* Wrapper */}
      <DS.Wrapper>
        {/* WriterRapper */}
        <DS.WriterRapper>
          {/* profile */}
          <DS.WriterProfile>
            <DS.ProfileTitle>
              <DS.ProfileImg src="../Detailimage/Profile.png"></DS.ProfileImg>
              <DS.ProfileText>
                <DS.ProfileName>{props.data?.fetchBoard.writer}</DS.ProfileName>
                <DS.ProfileDate>
                  Date: {getDate(props.data?.fetchBoard.createdAt)}
                </DS.ProfileDate>
              </DS.ProfileText>
            </DS.ProfileTitle>
          </DS.WriterProfile>

          <DS.WrapperLink>
            <DS.LinkImage src="../Detailimage/Link.png"></DS.LinkImage>
            <Tooltip
              title={`${props.data?.fetchBoard.boardAddress?.address}
            ${props.data?.fetchBoard.boardAddress?.addressDetail}`}
            >
              <DS.LinkGPS src="../Detailimage/GPS.png"></DS.LinkGPS>
            </Tooltip>
          </DS.WrapperLink>
        </DS.WriterRapper>

        {/* Line */}
        <DS.DivideLine></DS.DivideLine>
        {/* Title */}
        <DS.Title>
          <DS.TitleText>{props.data?.fetchBoard.title}</DS.TitleText>
        </DS.Title>

        {/* IMG */}
        <DS.ContentImage>
          {props.data?.fetchBoard.images
            ?.filter((el) => el)
            .map((el) => (
              <DS.Image key={el} src={`https://storage.googleapis.com/${el}`} />
            ))}
        </DS.ContentImage>

        {/* contents */}
        <DS.Contents>{props.data?.fetchBoard?.contents}</DS.Contents>

        {/* Youtube */}
        {props.data?.fetchBoard.youtubeUrl && (
          <DS.ContentYoutube>
            <ReactPlayer url={props.data?.fetchBoard.youtubeUrl} />
          </DS.ContentYoutube>
        )}

        {/* like dlike */}
        <DS.LikeWrapper>
          <DS.LikeContent>
            <DS.LikeImg
              src="../Detailimage/Like.png"
              onClick={props.OnClickLikeCount}
            ></DS.LikeImg>
            <DS.LikeCount>{props.data?.fetchBoard.likeCount}</DS.LikeCount>
          </DS.LikeContent>
          <DS.DLlikeContent>
            <DS.DlikeImg
              src="../Detailimage/Dlike.png"
              onClick={props.OnClickDLikeCount}
            ></DS.DlikeImg>
            <DS.DlikeCount>{props.data?.fetchBoard.dislikeCount}</DS.DlikeCount>
          </DS.DLlikeContent>
        </DS.LikeWrapper>
      </DS.Wrapper>
      {/* ButtonList */}
      <DS.ButtonWrapper>
        <DS.Button onClick={props.onClickMoveBoardList}>목록으로</DS.Button>
        <DS.Button onClick={props.onClickEditBoard}>수정하기</DS.Button>
        <DS.Button onClick={props.DeleteButtonClick}>삭제하기</DS.Button>
      </DS.ButtonWrapper>
    </DS.Box>
  );
}
