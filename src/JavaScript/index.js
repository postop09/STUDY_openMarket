// API
async function product() {
  const url = 'http://13.209.150.154:8000';

  const res = await fetch(url + '/products/', {
    method : 'GET',
    headers : {
      'Content-Type' : 'application/json'
    },
  })
  const json = await res.json();
  // console.log(json.results);
  const results = [...json.results].reverse(); // 객체를 배열로 변환
  // console.log(results.length); // 배열의 길이 출력

  // json 배열 개수 만큼 순회해서 폼 생성
  for (let i = 0; i < results.length; i++) {
    // console.log(results[i]);
    // 데이터 삽입 및 출력 폼
    const listItem = document.querySelector('.list_product');

    listItem.innerHTML += `
      <li key="${results[i].product_id}" class="item_product">
        <img src="${results[i].image}" alt="" class="img_product">
        <small class="txt_cate">${results[i].product_info}</small>
        <p class="txt_name">${results[i].product_name}</p>
        <strong class="txt_price">${results[i].price}<span class="txt_unit">원</span></strong>
      </li>
    `
    // 1번 상품이 맨 아래로 간다??
    // 가장 먼저 등록한 제품이 최상단으로?
    // 배열을 뒤집는다?
  }
}
product();

function showItem() {
  const products = document.querySelector('.list_product');

  products.addEventListener('click', (e) => {
    localStorage.setItem('productId',e.target.parentNode.attributes.key.value);
    location.href = 'product.html';
  })
}
showItem();

// 로그인 버튼 클릭
const btnLogin = document.querySelector('.btn_pageLogin');
const modalLogin = document.querySelector('.sec_navModal');

btnLogin.addEventListener('click', (e) => {
  // if 로그인 해야할 때, 정상적으로 로그인 페이지로 이동

  // if 로그인한 상태 일시 (로그인한 상태 확인은..?)
  e.preventDefault();
  modalLogin.classList.toggle('on');
});

// 로그아웃
async function logout() {
  const url = 'http://13.209.150.154:8000';
  const res = await fetch(url + '/accounts/logout/', {
    method : 'GET',
    headers : {
      'Content-Type' : 'application/json'
    },
  })
  const json = await res.json();
  
  localStorage.removeItem('Authorization');
  modalLogin.classList.remove('on');
  alert(json.detail);
}
const btnLogout = modalLogin.querySelector('.btn_logout');
btnLogout.addEventListener('click', logout);