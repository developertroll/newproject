const pTag = document.querySelector('p');
pTag.addEventListener('click', changeText);

function changeText(){
    pTag.innerText = '문자열의 내용이 바뀌었습니다!';
}

const showBtn = document.querySelector('#btn');
showBtn.addEventListener('click', showText);
function showText(){
    document.getElementById('text').innerHTML = '문자열의 내용이 바뀌었습니다!';
}

const div = document.getElementById("container");
const input = document.getElementById("input-tag");
const button = document.getElementById("button-tag");

div.addEventListener("click", function (event) {
  console.log("div에서 클릭이벤트 감지");

},  true);
input.addEventListener("click", function (event) {
  console.log("input에서 클릭이벤트 감지");

},  true);
button.addEventListener("click", function (event) {
  console.log("button에서 클릭이벤트 감지");

}, true);