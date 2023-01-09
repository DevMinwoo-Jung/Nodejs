// buffer === fiex-size chuck of memory
// array of intergers, byte of data
const fs = require('fs');

const buf = Buffer.from('Hi');
console.log(buf);
console.log(buf.length);
console.log(buf[0], buf[1]); // 아스키 코드
console.log(buf.toString()); 

// create
const buf2 = Buffer.alloc(2);
buf2[0] = 72;
buf2[1] = 105;
const buf3 = Buffer.allocUnsafe(2); // fase
buf2.copy(buf3);
console.log(buf2.toString(), buf3);


// concat
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString());