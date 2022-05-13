// document
export default function MyPage(){
    
    // 여기는 자바스크립트 쓰는 곳
    function Click() {
        document.getElementById("hello").innerText = "반갑습니다"

    }
    return(
        <button id="hello" onClick={Click}>안녕하세요</button>
    )
}