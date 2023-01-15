function sayHi() {
  console.log('say hi');
}

function calculate(x, y) {
  console.log('...ing...');
  const result = x + y;
  console.log(`result: ${result}`);
  sayHi();
  return result;
}

calculate(1, 2);

const stop = 4;
for (let i=0; i< 10; i++) {
  console.log(i);
  if (i ===4 ) {
    console.log('끝!')
    break;
  }
}