const file = require('fs');

// 3형태??
// rename(..., callback(error, data)) 
// renameSync(...) <- 콜백 x try catch로
// promise.rename().then().catch(0) 


// try {
//   file.renameSync('./text.txt', './text-new.txt');
// } catch (error) {
//   console.log(error);
//   console.log('잘못된 경로이거나 파일이 존재하지 않습니다.');
// }

// // 요건 동기로 되기 때문에 에러가 난다면 뒤의
// // 코드는 실행되지 않는다. 가급적 사용 지양

// file.rename('./text-new.txt', './text.txt', (error) => {
//   console.log(error);
// })
// console.log('hi');

file.promises
.rename('./text.txt', './text-new.txt')
.then(() => console.log('success'))
//.catch((error) => console.log(error))
.catch(console.error); // 위랑 아래는 같다.