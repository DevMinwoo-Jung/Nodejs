const fs = require('fs'); 
// 이건 노드 모듈이구나 라고 알게 해줌

console.log(global);

global.hi = () => {
  console.log('hi node');
  // global.console.log ~ 이거랑 같다
}

global.hi();
hi();

// 전역 객체인 global은 생략 가능
// node는 global js는 window