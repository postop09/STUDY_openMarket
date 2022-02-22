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
userChange()