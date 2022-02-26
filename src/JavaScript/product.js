const main = document.querySelector('.product_main');
const secModal = main.querySelectorAll('.sec_modal');

// API
async function products() {
  const url = 'http://13.209.150.154:8000';
  // products/${product_id}/를 저장해서 불러와야 된다.
  const res = await fetch(url + '/products/1/', {
    method : 'GET',
    headers : {
      'Content-Type' : 'application/json'
    }
  });
  const json = await res.json();
  const secOrder = main.querySelector('.wrap_order');

  secOrder.innerHTML = `
    <img src="${json.image}" alt="" class="img_product">
    <section class="sec_order">
      <h3 class="txt_hide">상품 선택 및 주문</h3>
      <div class="wrap_txt">
        <small>${json.product_info}</small>
        <p>${json.product_name}</p>
        <strong>${json.price}<span>원</span></strong>
      </div>
      <small class="txt_package">택배배송 / 무료배송</small>
      <div class="wrap_count">
        <button type="button" class="item_box"><img src="../img/icon-minus-line.png" alt="수량 빼기" class="img_minus"></button>
        <input type="text" value="1" class="item_box txt_count">
        <button type="button" class="item_box"><img src="../img/icon-plus-line.png" alt="수량 더하기" class="img_plus"></button>
      </div>
      <div class="wrap_price">
        <p class="txt_all">총 상품 금액</p>
        <p class="txt_number">총 수량 <strong class="txt_count">1</strong>개</p>
        <strong><span class="txt_price">${json.price}</span>원</strong>
      </div>
      <ul class="list_btn">
        <li><button type="button" class="btn_purchase">바로 구매</button></li>
        <li><button type="button" class="btn_bag">장바구니</button></li>
      </ul>
    </section>
  `

  function count() {
    const wrapCount = main.querySelector('.wrap_count');
    const txtCount = wrapCount.querySelector('.txt_count');
    const wrapPrice = main.querySelector('.wrap_price');
    const txtCount2 = wrapPrice.querySelector('.txt_count');
    const price = wrapPrice.querySelector('.txt_price');
  
    wrapCount.addEventListener('click', (e) => {
      if (e.target.className == 'img_minus' && txtCount.value > 1) {
        txtCount.value --;
      } else if (e.target.className == 'img_plus') {
        txtCount.value ++;
      }
      txtCount2.textContent = txtCount.value;
      price.textContent = txtCount.value * json.price
    })
  }

  anounceLogin();
  intoBag();
  count();
}
products();

// 로그인 안내
function anounceLogin() {
  const btnTake = main.querySelector('.btn_purchase');
  // 로그인 안한 경우
  btnTake.addEventListener('click', () => {
    secModal[0].classList.add('on');
  })
}

// 장바구니 안내
function intoBag() {
  const btnBag = main.querySelector('.btn_bag');
  // 로그인 해서 장바구니에 동일한 아이템 있는 경우
  btnBag.addEventListener('click', () => {
    secModal[1].classList.add('on');
  })
}

// 모달창 닫기
function modalClose() {
  secModal.forEach((i) => {
    const btnClose = i.querySelector('.btn_close');
    const btnNo = i.querySelector('.btn_no');
    btnClose.addEventListener('click', () => {
      i.classList.remove('on');
    })
    btnNo.addEventListener('click', () => {
      i.classList.remove('on');
    })
  })
}
modalClose();