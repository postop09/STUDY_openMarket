const main = document.querySelector('.new_main');
const newType = main.querySelector('.list_newType');
const secNew = main.querySelectorAll('.sec_new');

// 회원 전환
function userChange() {
  const btns = newType.querySelectorAll('.btn_new');
  const inpAll = main.querySelectorAll('input');
  const btnJoin = main.querySelectorAll('.btn_join');
  
  newType.addEventListener('click', (e) => {
    let btnUser = e.target;

    [...btns, ...secNew].map((user) => {
      user.classList.remove('on');
    });
    btnUser.classList.add('on');

    if (btnUser.className == 'btn_new btn_customer on') {
      secNew[0].classList.add('on');
    } else if (btnUser.className == 'btn_new btn_seller on') {
      secNew[1].classList.add('on');
    };
    
    [...inpAll].map((inp) => {
      inp.value = '';
      inp.checked = false;
    });
    [...btnJoin].map((btn) => {
      btn.classList.remove('on');
    });
  });
}
userChange();

// 휴대폰 번호 앞자리 선택
function phoneChoose() {
  const listPhone = main.querySelectorAll('.list_phone');
  const btnPhone = main.querySelectorAll('.btn_front');
  const txtPhone = main.querySelectorAll('.txt_phone');
  
  [...btnPhone].map((btn) => {
    btn.addEventListener('click', () => {
      btn.nextElementSibling.classList.toggle('on');
    })
  });

  [...listPhone].map((list) => {
    list.addEventListener('click', (e) => {
      [...txtPhone].map((txt) => {
        txt.value = e.target.textContent;
      })
      list.classList.remove('on');
    })
  })
}
phoneChoose();

// 이용약관 확인
function confirmJoin() {
  const checkboxes = main.querySelectorAll('.inp_confirm');

  [...checkboxes].map((checkbox) => {
    checkbox.addEventListener('click', (e) => {
      if (e.target.checked == true) {
        e.target.parentNode.nextElementSibling.classList.add('on');
      } else if (e.target.checked == false){
        e.target.parentNode.nextElementSibling.classList.remove('on');
      }
    })
  })
}
confirmJoin();