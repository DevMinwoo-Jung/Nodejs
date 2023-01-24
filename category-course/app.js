const path = require('path');
const os = require('os');
const fs = require('fs');
// get folders user want
// make video, captured... folders
// move files to matched folders

// get params
const folder = process.argv[2];
const workingDir = path.join(os.homedir(), 'Pictures', folder);

if(!folder || fs.existsSync(workingDir)) {
  console.error('사진이나 폴더 이름이 없습니다.');
}


console.log(workingDir);
