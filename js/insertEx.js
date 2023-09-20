// const product = {title:"감자칩",weight:300};

// const app = document.querySelector("#app");
// app.innerHTML = `<div class="item">상품명: ${product.title}, 무게: ${product.weight}</div>`;


const productsData = [
    { title: "감자칩", weight: 300 },
    { title: "칙촉", weight: 100 },
    { title: "고구마칩", weight: 300 },
    { title: "오잉", weight: 50 },
  ];
let i = 0;
const app = document.querySelector("#app");
for(item of productsData){

    const innerElements = `<div class="item">상품명: ${item.title}, 무게: ${item.weight}</div>`;
    app.innerHTML += innerElements;
}