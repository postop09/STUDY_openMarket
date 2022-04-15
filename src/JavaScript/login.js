const main = document.querySelector('.login_main');

userChange = () => {
  const btnChange = main.querySelectorAll('.btn_userChange');
  const [btnCustomer, btnSeller] = [...btnChange]
  const secLogin = main.querySelectorAll('.sec_login');
  const [secCustomer, secSeller] = [...secLogin];

  btnCustomer.addEventListener('click', (e) => {
    [...btnChange, ...secLogin].map((btn) => {
      btn.classList.remove('on')
    });
    btnCustomer.classList.add('on');
    secCustomer.classList.add('on');
  });

  btnSeller.addEventListener('click', (e) => {
    [...btnChange, ...secLogin].map((btn) => {
      btn.classList.remove('on')
    });
    btnSeller.classList.add('on');
    secSeller.classList.add('on');
  });
}
userChange();

// API
async function login() {
  const id = main.querySelector('#inp_customerId');
  const pw = main.querySelector('#inp_customerPw');
  const err = main.querySelector('.txt_err');
  const url = 'https://openmarket.weniv.co.kr';
  const loginData = {
		'username': id.value,
		'password': pw.value,
		'login_type': 'BUYER' // BUYER : 일반 구매자, SELLER : 판매자
  }
  const res = await fetch(url+'/accounts/login/', {
    method : 'POST',
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(loginData)
  })
  const json = await res.json();
  // console.log(res.headers);
  // console.log(json);
  // console.log(document.cookie);
  
  if (res.statusText == 'OK') {
    sessionStorage.setItem('Authorization', json.token);
    sessionStorage.setItem('id', json.id);
    history.back();
  } else if (res.statusText == 'Bad Request' && id.value == '') {
    err.classList.add('on');
    err.innerHTML = '아이디를 입력해주세요.';
    id.focus();
  } else if (res.statusText == 'Bad Request' && pw.value == '') {
    err.classList.add('on');
    err.innerHTML = '비밀번호를 입력해주세요.';
    pw.focus();
  } else if (res.statusText == 'Unauthorized') {
    err.classList.add('on');
    err.innerHTML = '아이디 또는 비밀번호가 일치하지 않습니다.';
    pw.value = '';
    pw.focus();
  }
}
const btnLogin = main.querySelector('.btn_customerLogin');
btnLogin.addEventListener('click', login);

// 로그인 정보를 저장하는 방법
