// document

// 규칙: 함수 = 페이지 이름 만들때 폴더이름과 비슷하게.
export default function CounterDocumentPage() {


    function counter() {
        const result = Number(document.getElementById("count").innerText) + 1
        document.getElementById("count").innerText = result;
    }

    return (
        <div>
            <div id="count">0</div>
            <button onClick={counter}>카운트 올리기!!!</button>
        </div>
    )
}
