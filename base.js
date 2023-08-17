// node.js에서 터미널에서 출력하려면 prompt가 아닌, readline 모듈을 사용
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin, 
  output: process.stdout
});

//ans를 비어있는 문자열로 할당.
let ans = "";
while (ans.length < 3) {
  let a = String(Math.floor(Math.random() * 10));
  if (!ans.includes(a)) ans += a;
} // 0~9까지의 숫자를 3자리수로 랜덤으로 생성
console.log("컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!") // 화면에 보이는 내용
let cnt = 1; // count 숫자 초기화
Play(); // Play 함수 호출 

//[B,S]배열로 표현하기 ; 숫자와 위치까지 일치해야하는 특성 ; n.indexOf(num) 배열 n에서 num이라는 값이 처음 등장하는 위치의 인덱스 찾음.
function Count_BS(n) {
  let B = 0;
  let S = 0;
  for (var num of n) {
    if (ans.includes(num)) {
      if (n.indexOf(num) === ans.indexOf(num)) S++;
      else B++;
    }
  }
  return [B, S]
}

//터미널에 내용 출력, 게임 종료 또는 2B1S형태로 보여주기 (트러블 슈팅 지점)
function Play() {
  rl.on("line", (n) => {
    let [B, S] = Count_BS(n);
    if (S === 3) {
      console.log(`3S\n${cnt}번만에 맞히셨습니다.\n게임을 종료합니다.`);
      rl.close();
    } else {
      console.log(`${cnt}번째 시도 : ${n}`);
      console.log(`${B}B${S}S`);
      cnt++;
    }
  });
}
