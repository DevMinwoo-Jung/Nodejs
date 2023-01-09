const fs = require('fs').promises; // fs의 promise들을 가지고 있다.

fs.readFile('./text.txt', 'utf8')
  .then((data) => console.log(data))
  .catch(console.error);


  //wire
  fs.writeFile('./file.txt', '안녕 나는 민우야')
  .then(() => {
    //copy
    fs.copyFile('./file.txt', './file2.txt')
    .catch(console.error);
  })
  .catch(console.error);
// folder

fs.mkdir('sub')
.catch(console.error);

fs.readdir('./')
.then((data) => console.log(data))
.catch(console.error);