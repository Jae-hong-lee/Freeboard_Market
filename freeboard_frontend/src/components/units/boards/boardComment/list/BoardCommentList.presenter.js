import * as BC from "./BoardCommentList.style";
import { getDate } from "../../../../../commons/libraries/utils";
import { Rate, Modal } from "antd";

export default function BoardCommentListUI(props) {
  return (
    <>
      <BC.Wrapper>
        {props.data?.fetchBoardComments.map((el) => (
          <BC.CommentWrapper key={el._id}>
            {/* 헤더 */}
            <BC.WriterWrapper>
              <BC.WriteRatingWrapper>
                <BC.ProfileImg src="/images/Profile.png" />
                <BC.Writer>{el.writer}</BC.Writer>
                {/* 별점 */}
                <Rate value={el.rating} />
              </BC.WriteRatingWrapper>
              {/* 수정 삭제 */}
              <BC.BtnWrapper>
                <BC.DeleteBtn
                  src="/images/Delete.png"
                  onClick={props.DeleteCommentOnclick}
                  id={el._id}
                />

                {/* 모달버튼 */}
                <Modal
                  visible={props.isModalVisible}
                  onOk={props.onOKclick}
                  onCancel={props.onCancelclick}
                >
                  비밀번호 입력:
                  <input type="password" onChange={props.onChagePassword} />
                </Modal>

                <BC.EditBtn src="/images/Edit.png" id={el._id} />
              </BC.BtnWrapper>
            </BC.WriterWrapper>
            <BC.Footer>
              <BC.Contents>{el.contents}</BC.Contents>
              <BC.Date>{getDate(el.createdAt)}</BC.Date>
            </BC.Footer>
          </BC.CommentWrapper>
        ))}
      </BC.Wrapper>
    </>
  );
}
