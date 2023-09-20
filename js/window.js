// console.log(window);

// window.alert('안녕하세요');
// window.confirm('안녕하세요');
// window.prompt('안녕하세요');

document.body.style.background = "red";
navigator.userAgent;

console.log(document.getElementsByTagName('div'));
console.log(document.getElementById('hi'));
console.log(document.getElementsByClassName('welcome'));
console.log(document.querySelector('div.welcome'));
console.log(document.querySelectorAll('div'));

const divTag = document.querySelector('div');

console.log(divTag);

divTag.innerText = '<h1>반갑습니다</h1>';
divTag.innerHTML = '<h1>반갑습니다</h1>';
divTag.style.color = 'blue';

const divTag2 = document.getElementsByTagName('div')[0];
console.log(divTag2);

const contanier = document.querySelector('.contanier');
console.log(contanier);

//부모태그
console.log(contanier.parentElement);
//자식태그
console.log(contanier.children);
//인접형제태그
console.log(contanier.nextElementSibling);

console.log(contanier.children[1].children[1]);