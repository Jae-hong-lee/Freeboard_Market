// 검증 부분은 따로 다른 파일에 만들어 놓고 import해서 사용한다-> 조건이 계속 늘어날 경우도 생각.
// 이미지 검증부분!!
// 파일의 사이즈가 아닐경우!! return 으로 바로 끝내기

// files는 있을수도 있고,없을수도 있기 때문에 옵셔널 체이닝
export const CheckFileValidation = (file?: File) => {
  if (!file?.size) {
    alert("파일이 없습니다");
    return false;
  }
  // 5MB = 5 * 1024 * 1024
  // 이미지 파일의 사이즈가 있지만, 5MB보다 클경우 경고를 띄우고 함수를 종료합니다.
  if (file.size > 5 * 1024 * 1024) {
    alert("파일 용량이 너무 큽니다.(제한: 5MB)");
    return false;
  }
  // 이미지 파일의 확장자 검증
  if (!file.type.includes("png") && !file.type.includes("jpeg")) {
    alert("jpeg 파일 또는 png 파일만 업로드 가능합니다.");
    return false;
  }

  return true;
};

// 유효하지 않다면 return 값을 false로 보내주고
// 유효하다면 true를 return 값으로 보내준다.

// 파일 확장자 검증 방법중 accept이라는 태그를 사용할 수도 있다.
// http://www.tcpschool.com/html-tag-attrs/input-accept
