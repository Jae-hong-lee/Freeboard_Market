import * as SC from "./BoardCommentWrite.style";
import { Rate } from "antd";
import "antd/dist/antd.css";

export default function BoardCommentWriteUI(props) {
  return (
    <SC.Box>
      <SC.Wrapper>
        {/* 작성자, 비밀번호 */}
        <SC.Header>
          <SC.Input
            type="text"
            placeholder="작성자"
            onChange={props.onChangeWriter}
            defaultValue={props.el?.writer}
            readOnly={!!props.el?.writer}
          />
          <SC.Error>{props.writerError}</SC.Error>
          <SC.Input
            type="password"
            placeholder="비밀번호"
            onChange={props.onChangePassword}
          />
          <SC.Error>{props.passwordError}</SC.Error>

          {/* reting 별점. */}
          <div>
            <Rate onChange={props.onChangeStar} value={props.rating} />
          </div>
        </SC.Header>
        {/* contents */}
        <SC.ContentsBox>
          <SC.Contents
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            onChange={props.onChangeContents}
            maxLength={100}
            defaultValue={props.el?.contents}
          />
          <SC.Error>{props.contentsError}</SC.Error>

          {/* footer */}
          <SC.Footer>
            <div>{props.contents.length}/ 100</div>

            <SC.ContentBtn
              onClick={
                props.isEdit ? props.UpdateCommentOnclick : props.onClickSubmit
              }
            >
              {props.isEdit ? "수정" : "등록"} 하기!!!
            </SC.ContentBtn>
          </SC.Footer>
        </SC.ContentsBox>
      </SC.Wrapper>
    </SC.Box>
  );
}
