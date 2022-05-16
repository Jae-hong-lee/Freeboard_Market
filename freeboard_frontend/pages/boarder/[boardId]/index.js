import * as DS from "../../../styles/boarder/detail/emotion"
import { useQuery, gql} from '@apollo/client'
import { useRouter } from 'next/router'

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!){
    fetchBoard(boardId: $boardId){
      _id
      writer
      title
      contents
      createdAt
      likeCount
      dislikeCount
    }
  }
`;

export default function DetailPage(){

  const router = useRouter()

  const { data } = useQuery(FETCH_BOARD, {
    variables:{boardId: `${router.query.boardId}`}
  })
  

  return(
      // Wrapper
      <DS.Wrapper>
          {/* WriterRapper */}
          <DS.WriterRapper>
            {/* profile */}
            <DS.WriterProfile>
              <DS.ProfileTitle>
                <DS.ProfileImg src="../Detailimage/Profile.png"></DS.ProfileImg>
                <DS.ProfileText>
                  <DS.ProfileName>{data?data.fetchBoard?.writer: "loading.."}</DS.ProfileName>
                  <DS.ProfileDate>Date:{data?data.fetchBoard?.createdAt: "loading.."}</DS.ProfileDate>
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
            <DS.TitleText>{data?data.fetchBoard?.title: "loading.."}</DS.TitleText>
          </DS.Title>

          {/* IMG */}
          <DS.ContentImage></DS.ContentImage>

          {/* contents */}
          <DS.Contents>
            {data?data.fetchBoard?.contents: "loading.."}
          </DS.Contents>

          {/* Youtube */}
          <DS.ContentYoutube></DS.ContentYoutube>

          {/* like dlike */}
          <DS.LikeWrapper>
            <DS.LikeContent>
              <DS.LikeImg src="../Detailimage/Like.png"></DS.LikeImg>
              <DS.LikeCount>{data?data.fetchBoard?.likeCount: "loading.."}</DS.LikeCount>
            </DS.LikeContent>
            <DS.DLlikeContent>
              <DS.DlikeImg src="../Detailimage/Dlike.png"></DS.DlikeImg>
              <DS.DlikeCount>{data?data.fetchBoard?.dislikeCount: "loading.."}</DS.DlikeCount>
            </DS.DLlikeContent>
          </DS.LikeWrapper>

      </DS.Wrapper>
      
  )
}