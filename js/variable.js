let box;
box=10;
console.log(box);

// 문자형 자료 string
let name = "홍길동";
console.log(name);

let yourName='홍길동2';
console.log(yourName);

let ourName = '홍길순';

// 숫자형 자료 number
let num = 10;
console.log(num);

// 논리형 자료 boolean
let bool = true;
let t = 100<10;
console.log(bool);
console.log(t);

// 배열형 자료 array
let arr = [10,20,30];
console.log(arr);

// typeof 연산자
console.log(typeof box);
console.log(typeof name);
console.log(typeof num);
console.log(typeof bool);
console.log(typeof arr);

// 산술연산자 5종
let a = 10;
let b = 20;
let c = a+b;
let d = a-b;
let e = a*b;
let f = a/b;
let g = a%b;
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);

// 비교연산자
let h = a>b;
let i = a<b;
let j = a>=b;
let k = a<=b;
let l = a==b;
let m = a!=b;
console.log(h);
console.log(i);
console.log(j);
console.log(k);
console.log(l);
console.log(m);

console.log(10!='10');
console.log(10!=='10');

const kiloGram = 110;
const meter = 1.78;
let properWeight = (meter-1)*0.9;
console.log(properWeight*100);

// 조건문
num = 13;
if(num%2==0){
    console.log("짝수");
}
else{
    console.log("홀수");
}

//switch 예시
let day = 15;
let dayName = day%7;
switch(dayName){
    case 0:
        console.log("일요일");
        break;
    case 1:
        console.log("월요일");
        break;
    case 2:
        console.log("화요일");
        break;
    case 3:
        console.log("수요일");
        break;
    case 4:
        console.log("목요일");
        break;
    case 5:
        console.log("금요일");
        break;
    case 6:
        console.log("토요일");
        break;
    default:
        console.log("잘못된 요일");
        break;
}

// 삼항연산자
let score = 80;
let result = score>=60?"합격":"불합격";
console.log(result);