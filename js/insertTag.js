  // div.inner를 선택
  let inner = document.querySelector(".inner");
  // <div>태그 생성
  let element = document.createElement("div");
  // text 노드 hello 생성
  let hello = document.createTextNode("hello");
  // <div>hello</div>로 만들기
        element.appendChild(hello);
        element.setAttribute("class", "item");
  // div.inner에 element 추가
  inner.appendChild(element);

  let name = "홍길동";
  console.log('안녕하세요. 제 이름은 ${name}입니다.');