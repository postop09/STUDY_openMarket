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
  const url = 'http://13.209.150.154:8000';
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
  console.log(json);
}
const btnLogin = main.querySelector('.btn_customerLogin');
btnLogin.addEventListener('click', login);