import * as BC from "./BoardCommentList.style";
import { getDate } from "../../../../../commons/libraries/utils";
import { Rate, Modal } from "antd";
import InfiniteScroll from "react-infinite-scroller";
import BoardCommentWrite from "../write/BoardCommentWrite.container";
import { useState } from "react";

export default function BoardCommentListUI(props) {
  const [isEdit, setIsEdit] = useState(false);

  const onClickEdit = (event) => {
    console.log(event.target);
    // if (event.target.id === event.target.el._id) {
    setIsEdit(true);
    //   console.log(isEdit);
    // }
    console.log("tlfvo!");
  };
  return (
    <>
      {/* 수정버튼 고치기 */}

      <BC.Wrapper>
        {/* 무한스크롤 5.27 */}
        {isEdit === false && (
          <InfiniteScroll
            pageStart={0}
            loadMore={props.loadFunc}
            hasMore={true}
          >
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
                    {/* 수정 */}
                    <BC.EditBtn
                      src="/images/Edit.png"
                      id={el._id}
                      onClick={onClickEdit}
                    />
                  </BC.BtnWrapper>
                </BC.WriterWrapper>
                <BC.Footer>
                  <BC.Contents>{el.contents}</BC.Contents>
                  <BC.Date>{getDate(el.createdAt)}</BC.Date>
                </BC.Footer>
              </BC.CommentWrapper>
            ))}
          </InfiniteScroll>
        )}
      </BC.Wrapper>

      {/* 수정버튼 고치기 */}
      {isEdit === true && <BoardCommentWrite isEdit={isEdit} el={props.el} />}
    </>
  );
}
