// document
export default function randomNumber() {

    function Number() {
        let token = String(Math.floor( Math.random() * 1000000 )).padStart(6, "0");
        document.getElementById("count").innerText = token;
    }

    return(
        <div>
            <div id="count"> 000000 </div>
            <button onClick={Number}> 인증번호전송!!!</button>
        </div>

    )
}