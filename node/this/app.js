function hi() {
  console.log(this);
  console.log(this === global);
}

hi();

class A {
  constructor(num) {
    this.num = num;
  }

  memberFuc() {
    console.log('---- from class ----');
    console.log(this === global);
    console.log(this); // 클래스 자체를 가리킴, 그리고 global이 아님
  }
}

const aClass = new A(1);
aClass.memberFuc();

console.log('asdasd');
console.log(this);
console.log(this === module.exports);