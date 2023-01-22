var fs = require('fs');
var fsPromise = require('fs').promises; 
var path = require('path');
var filePath = path.join(__dirname, '../test/');
const filters = ['jpg', 'png', 'mov', 'mp4'];

let result = getAllFiles(filePath);

console.log(result);

function getAllFiles(path) {
  let file = fs.readdirSync(path);
  return file;
};

// 파일별로 폴더 만들기
function getFolders() {
  let allFIles = getAllFiles(filePath);
  let folderCategory = new Set();
  allFIles
  .map((element) => element.slice(element.indexOf('.') + 1))
  .map((element) => folderCategory.add(element))
  return folderCategory;
}

let folders = [...getFolders()];

folders.map((element) => {
  if(filters.includes(element)) {
    makeFolder(`${element}`)
  }
})

// 폴더별로 파일 옮기기

result.map((element) => moveFiles(element));

function moveFiles(file){
  result.map((element) => {
    if(filters.includes(element)) {
      checkExtension(file);
    } else {
      fsPromise.rename(filePath, `${__dirname}`)
    }
  })
}

function checkExtension(file){
  const fileExtension = file.slice(element.indexOf('.') + 1)
  fsPromise.rename(filePath, `${__dirname}}/${fileExtension}`)
}




///////
function makeFolder(category) {
  fsPromise.mkdir(category)
  .catch(console.error);
}

function checkFolder(){
  const folders = fs.readdirSync('./');
  let reuslt = [];
  folders.map((element) => filters.includes(element) ? reuslt = [...reuslt, element] : null);
  return reuslt;
}