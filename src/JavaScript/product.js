const main = document.querySelector('.product_main');
const secModal = main.querySelectorAll('.sec_modal');

// 로그인 안내
function anounceLogin() {
  const btnTake = main.querySelector('.btn_purchase');

  btnTake.addEventListener('click', () => {
    secModal[0].classList.add('on');
  })
}
anounceLogin();

// 장바구니 안내
function intoBag() {
  const btnBag = main.querySelector('.btn_bag');

  btnBag.addEventListener('click', () => {
    secModal[1].classList.add('on');
  })
}
intoBag();

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

// 제품 개수 카운팅
function count() {
  const wrapCount = main.querySelector('.wrap_count');
  const txtCount = wrapCount.querySelector('.txt_count');

  wrapCount.addEventListener('click', (e) => {
    if (e.target.className == 'img_minus' && txtCount.value > 0) {
      txtCount.value --;
    } else if (e.target.className == 'img_plus') {
      txtCount.value ++;
    }
  })
}
count();

// API
async function products() {
  const url = 'http://13.209.150.154:8000';
  const res = await fetch(url + '/products', {
    method : 'GET',
    headers : {

    }
  });

  console.log(res.json());
}