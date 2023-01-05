console.log('asdasd');


///log level
console.log('log'); // 개발
console.info('info'); // 정보
console.warn('warn'); // 치명적인 에러 ㄴ 
console.error('error'); // 치명적인 에러

// asert
console.assert(2 === 3, 'false일 때만 출력');
console.assert(1 === 1, '나는 출력 안됨');


// print obj
const obj = { name: 'minwoo', age: 31, major: { name: 'asd' }};
console.log(obj);
console.table(obj);
console.dir(obj); // option이 다양하다, 그냥이면 log랑 똑같음ㅁ
console.dir(obj, { showHidden: true, color: false, depth: 0}); // major는 안나옴

// time
console.time('foor loop');
for (let i = 0; i < 10; i++) {
  i++;
}
console.timeEnd('foor loop');

console.time('foor loop');
const arr = [0,1,2,3,4,5,6,7,8,9];
arr.map((element) => element);
// map이 for보다 빠름

console.timeEnd('foor loop');



// counting
function a() {
  console.count('a function');
}
a();
a();
console.countReset('asd');
a();


//trace

function f1() {
  f2();
}

function f2() {
  f3();
}

function f3() {
  console.log('f3');
  console.trace();
}

f1();