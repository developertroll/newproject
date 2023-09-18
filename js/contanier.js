// 배열 선언
let array = [1,2,3,4,5];
console.log(array[0]);
console.log(array.slice(0,3));
console.log(array.slice(3,5));
array[0] = 10;
console.log(array);

let arr = [1,2,3,4,5];
let index = arr.indexOf(3);
console.log(index);
console.log(arr.slice(index,index+1));
console.log(arr.length);

const arr1 = [5,6,7,8,9];
const [first,second,third,fourth,fifth] = arr1;
console.log(first, second, third, fourth, fifth);

// 객체
let userInfo = {
    name: "홍길동",
    age: 20,
    password: "1234",
    email: "dummy@dummy.com"
}
console.log(userInfo.name);
console.log(userInfo["name"]);
console.log(userInfo.age);
console.log(userInfo.password);
console.log(userInfo.email);

userInfo.age = 30;
console.log(userInfo.age);
delete userInfo.email;
console.log(userInfo);

let schedule = {
    title : "코하전자",
    date : "2020-10-10",
    users: []
}
schedule.users.push({
    email:"dummy@dummy.com",
    password:"a123"
}
);
console.log(schedule);

// while 반복문
let i = 0;
while(i<10){
    console.log("안녕");
    i++;
}

let j = 1;
while(j<=50){
    if(j%5==0){
        console.log(j);
    }
    j++;
}

for(let k=1; k<=50; k++){
    if(k%5==0){
        console.log(k);
    }
}

const arr3 = [5,6,7,8];

for(let index in arr3){
    console.log(arr3[index]);
}

for(let value of arr3){
    console.log(value);
}

const jsonArr = {
    email:"dummy",
    password:"a123"
}

for(let key in jsonArr){
    console.log(jsonArr[key]);
}

let basic = function(num1, num2){
    console.log(num1+num2);
};

basic(1,3);

function bmi(weight,height){
    return weight/(height*height);
}

console.log(bmi(110,1.78));

const userInfo1 = {
    name:"홍길동",
    birth:1990,
    getName: function(){
        return this.name;
    },
}

console.log(userInfo1.getName());

const obj = {
    name:"홍길동",
    age:20,
    say: function(){
        console.log(this);
        console.log('제 이름은 ${this.name}입니다, 나이는 ${this.age}입니다');
    }
}

obj.say();

const obj1 = {
    setNumbers: function(num1, num2){
        (this.num1 =num1), (this.num2 = num2);
    },
    sum:function(){
        return this.num1 + this.num2;
    },
    multiply:function(){
        return this.num1 * this.num2;
    }
}

obj1.setNumbers(3,5);
console.log(obj1.sum());
console.log(obj1.multiply());

class Car{
    constructor(){
        this.wheels = 4;
    }

    say(){
        console.log('나는 자동차다');
        return 'say()는 실행되었다'
    }
}

class smallCar extends Car{
    constructor(){
        super();
        this.size = '소형';
        this.doors = 2;
    }
}
const mySmallCar = new smallCar();
console.log(mySmallCar);

class Aircraft{
    constructor(){
        this.isTakeOff = false;
    }
    takeOff(){
        this.isTakeOff = true;
        console.log('이륙합니다');
    }
}

class FighterAircraft extends Aircraft{
    constructor(){
        super();
        this.missile = 4;
    }
    fire(){
        if(this.isTakeOff==true){
        if(this.missile>0){
            console.log('미사일을 발사합니다');
            this.missile--;
            return "미사일을 발사했습니다";
        }else{
            console.log('미사일이 없습니다');
        }
    }else{
        console.log('이륙하지 않았습니다');
        return false;
    }
}
}

const myCraft = new FighterAircraft();
myCraft.fire();
myCraft.takeOff();
myCraft.fire();