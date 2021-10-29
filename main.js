'use strict';
let cnt = 0;
let time = 10.0;
const punch = document.querySelector(".punch");
const score = document.querySelector(".result");
const title = document.querySelector(".title");

// toFixed(소수점자릿수)    - 반올림
// innerHTML : 이거 쓸때 무조건 쿼리셀렉터 써야됨...ㅠㅠ
console.log(score, title);
async function countTime() {
    let timeout = setInterval(function () {
        time = (time - 0.01).toFixed(2);
        score.innerHTML = `${cnt} / ${time}`;
    }, 10);
    setTimeout(function () {
        clearTimeout(timeout);
        punch.style.pointerEvents = "none";     // 마우스 클릭 이벤트 막기
        viewResult();
    }, 10000);
}

function viewScore() {
    score.innerHTML = `${cnt} / ${time}`;
    console.log(cnt + "/" + time);
}

function viewResult() {
    title.innerHTML = '와우~ 멋진데요';
    score.innerHTML = `[ ${cnt/10.00} 점 ]`;
    setTimeout(() => {
        cnt = 0;
        time = 10.00;
        punch.style.pointerEvents = "auto";   
        viewScore(); 
        title.innerHTML = '다시 한번 도전 ~!!';
    }, 5000);
}

function punchEvent() {
    if (cnt === 0) {
        countTime();
    }
    cnt = cnt + 1;
    viewScore(cnt);
    console.log(cnt);
}