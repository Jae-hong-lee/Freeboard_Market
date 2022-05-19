import * as DS from './detail.styles'
import { getDate } from '../../../../commons/libraries/utils'
export default function DetailUI(props) {
  return(
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
                  <DS.ProfileDate>Date: {getDate(props.data?.fetchBoard.createdAt)}</DS.ProfileDate>
                </DS.ProfileText>
              </DS.ProfileTitle>
            </DS.WriterProfile>

            <DS.WrapperLink>
              <DS.LinkImage src="../Detailimage/Link.png"></DS.LinkImage>
              <DS.LinkGPS src="../Detailimage/GPS.png"></DS.LinkGPS>
            </DS.WrapperLink>
          </DS.WriterRapper>

          {/* Line */}
          <DS.DivideLine></DS.DivideLine>
          {/*Title */}
          <DS.Title>
            <DS.TitleText>{props.data?.fetchBoard.title}</DS.TitleText>
          </DS.Title>

          {/* IMG */}
          <DS.ContentImage></DS.ContentImage>

          {/* contents */}
          <DS.Contents>
            {props.data?.fetchBoard.contents}
          </DS.Contents>

          {/* Youtube */}
          <DS.ContentYoutube></DS.ContentYoutube>

          {/* like dlike */}
          <DS.LikeWrapper>
            <DS.LikeContent>
              <DS.LikeImg src="../Detailimage/Like.png"></DS.LikeImg>
              <DS.LikeCount>{props.data?.fetchBoard.likeCount}</DS.LikeCount>
            </DS.LikeContent>
            <DS.DLlikeContent>
              <DS.DlikeImg src="../Detailimage/Dlike.png"></DS.DlikeImg>
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

)
}