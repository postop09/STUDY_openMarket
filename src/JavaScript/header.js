// 로그인 버튼 클릭
const header = document.querySelector('.index_header');
const btnLogin = header.querySelector('.btn_pageLogin');
const modalLogin = document.querySelector('.sec_navModal');
// if 로그인한 상태 확인 후 내비게이션 바 스타일
if (sessionStorage.Authorization === 'null' || sessionStorage.id === 'null' || sessionStorage.Authorization === undefined || sessionStorage.id === undefined) {
  btnLogin.innerHTML = `<img src="../img/icon-user.png" alt="" class="img_icon">로그인`;
} else {
  btnLogin.innerHTML = `<img src="../img/icon-user.png" alt="" class="img_icon">마이페이지`;
};
// if 로그인을 하지 않은 경우, 로그인 페이지로 이동
btnLogin.addEventListener('click', (e) => {
  if (sessionStorage.Authorization === 'null' || sessionStorage.id === 'null' || sessionStorage.Authorization === undefined || sessionStorage.id === undefined) {
    location.href = 'login.html'
  } else {
    e.preventDefault();
    modalLogin.classList.toggle('on');
  }
});

// 로그아웃
async function logout() {
  const url = 'https://openmarket.weniv.co.kr';
  const res = await fetch(url + '/accounts/logout/', {
    method : 'GET',
    headers : {
      'Content-Type' : 'application/json'
    },
  })
  const json = await res.json();
  sessionStorage.Authorization = 'null';
  sessionStorage.id = 'null';
  modalLogin.classList.remove('on');
  alert(json.detail);
  btnLogin.innerHTML = `<img src="../img/icon-user.png" alt="" class="img_icon">로그인`;
}
const btnLogout = modalLogin.querySelector('.btn_logout');
btnLogout.addEventListener('click', logout);

// 장바구니 이동
function toMyBag() {
  const btnBag = header.querySelector('.btn_myBag');
  const secModalLogin = document.querySelector('.sec_noticeLogin');
  const modalBtns = secModalLogin.querySelectorAll('.btn_modal');
  const btnClose = secModalLogin.querySelector('.btn_close');

  btnBag.addEventListener('click', (e) => {
    if (sessionStorage.Authorization === 'null' || sessionStorage.id === 'null' || sessionStorage.Authorization === undefined || sessionStorage.id === undefined) {
      e.preventDefault();
      secModalLogin.classList.add('on');
    } else {
      location.href = 'cart.html'
    };
  })
  modalBtns[0].addEventListener('click', () => {
    secModalLogin.classList.remove('on');
  })
  modalBtns[1].addEventListener('click', () => {
    secModalLogin.classList.remove('on');
    location.href = 'login.html';
  })
  btnClose.addEventListener('click', () => {
    secModalLogin.classList.remove('on');
  })
}
toMyBag()

