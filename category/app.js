var fs = require('fs');
var fsPromise = require('fs').promises; 
var path = require('path');
var filePath = path.join(__dirname, '../test/');
const filters = ['jpg', 'png', 'mov', 'mp4'];

let result = getAllFiles(filePath);

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
  if(filters.includes(element) && !checkExist(element)) {
    makeFolder(`${element}`);
  }
})

function checkExist(element){
  const folders = fs.readdirSync('./');
  if(folders.includes(element)){
    return true
  } else {
    console.log('이미 있거나 filter에 없슴둥')
    return false;
  }
}

function makeFolder(category) {
  fsPromise.mkdir(category)
  .catch(console.error);
}

// 폴더별로 파일 옮기기

result.map((element) => moveFiles(element));

async function moveFiles(file){
  result.map((file) => {
    const fileExtension = file.slice(file.indexOf('.') + 1);
    if(filters.includes(fileExtension)) {
      fsPromise.rename(`${filePath}/${file}`, `${__dirname}/${fileExtension}/${file}`)
    } else {
      fsPromise.rename(`${filePath}/${file}`, `${__dirname}/${file}`)
    }
  })
}