import * as BB from "./BestBoards.styles";
import Slider from "react-slick";
import styled from "@emotion/styled";

const SliderDiv = styled(Slider)`
  height: 300px;
  width: 100%;
`;

export default function BestBoardsUI(props) {
  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 500,
    cssEase: "linear",
  };
  return (
    <BB.Box>
      <SliderDiv {...settings}>
        {props.data?.fetchBoardsOfTheBest.map((el, i) => (
          <BB.Wrapper key={el._id}>
            <BB.Quizimg>
              {el.images[0] === undefined ? (
                <BB.BestBoardNotImg>이미지가 없습니다. </BB.BestBoardNotImg>
              ) : (
                <BB.BestBoardImg
                  src={`https://storage.googleapis.com/${el.images[0]}`}
                />
              )}
              <BB.BestBoardTitle>{el.title} </BB.BestBoardTitle>
              <BB.InputsWrapper>
                <BB.BestBoardInputs>{el.writer}</BB.BestBoardInputs>
                <BB.BestBoardInputs>{el.contents} </BB.BestBoardInputs>
                <BB.BestBoardInputs>{el.likeCount} </BB.BestBoardInputs>
              </BB.InputsWrapper>
            </BB.Quizimg>
          </BB.Wrapper>
        ))}
      </SliderDiv>
    </BB.Box>
  );
}
