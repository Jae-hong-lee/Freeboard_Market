import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import JestUnitTestPage from "../../pages/34-02-jest-unit-test";

it("내가 원하는대로 그려지는지 테스트하기", () => {
  render(<JestUnitTestPage />);
  const myText1 = screen.getByText("철수는 13살입니다.");
  // text 가 document에 있냐? 고 물어보는 함수
  expect(myText1).toBeInTheDocument();

  const myText2 = screen.getByText("철수의 취미 입력하기:");
  expect(myText2).toBeInTheDocument();

  const myText3 = screen.getByText("철수랑 놀러가기");
  expect(myText3).toBeInTheDocument();

  // 이렇게 하나하나 하드코딩하면 굉장히 비효율적이라고 느낄 것이다.
  //
});
