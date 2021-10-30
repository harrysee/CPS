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
    const scoreT = cnt/10.00;
    let comment = '';
    if(scoreT <3.0){
        comment = '음... 좀 더 분발하세요';
    }else if(scoreT < 6.0){
        comment = '더 빠르게 더 힘차게!';
    }else if(scoreT < 10.0){
        comment = '나쁘지 않아영 좋아영';
    }else{
        comment = 'WoW 이정도면 달인인디';
    }

    score.innerHTML = `[ ${cnt/10.00} 점 ]`;
    setTimeout(() => {
        cnt = 0;
        time = 10.00;
        punch.style.pointerEvents = "auto";   
        viewScore(); 
        title.innerHTML = comment;
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