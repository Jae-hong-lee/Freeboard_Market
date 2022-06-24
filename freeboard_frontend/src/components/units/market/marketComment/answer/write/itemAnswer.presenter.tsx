import * as SC from "./itemAnswer.styles";

export default function MarketCommentAnswerWriteUI(props) {
  return (
    <SC.Box>
      <SC.Wrapper>
        {/* contents */}
        <SC.ContentsBox>
          <SC.Contents
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            onChange={props.onChangeContents}
            maxLength={100}
            defaultValue={props.el?.contents}
          />
          {/* footer */}
          <SC.Footer>
            <div>{props.contents.length || props.el?.contents.length}/ 100</div>
            <SC.ContentBtn
              onClick={props.isEdit ? props.UpdateOnclick : props.onClickSubmit}
              id={props.id}
            >
              {props.isEdit ? "답글수정" : "답글"}하기
            </SC.ContentBtn>
          </SC.Footer>
        </SC.ContentsBox>
      </SC.Wrapper>
    </SC.Box>
  );
}
