it("페이지 이동 연습해보기", () => {
  // 페이지에서 버튼을 찾자! , 사람이 마우스로 하는 행동을 그대로 흉내낸 코드이다.
  cy.visit("http://localhost:3000/34-04-cypress-e2e-test-1");
  cy.get("button");
  // div 가 있꼬 그안에 컨테츠에 "철수야 놀자"가 있는지 확인
  cy.get("div").contains("철수야 놀자~~~~");
});
