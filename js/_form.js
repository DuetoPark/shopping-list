const form = document.shoppingListForm;
const productList = document.querySelector('.product-list');
const input = document.querySelector('.input-group input');
let flag = null;
const emoji = ['👽', '😎', '🌙', '🔥', '👀', '🦄', '🐻', '💜', '🐛', '🌈', '🍅'];

function createItem() {
  const frag = document.createDocumentFragment();

  const li = document.createElement('li');
  li.setAttribute('class', 'product-item');

  frag.appendChild(li);

  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('placeholder', '구매하실 물건을 입력해주세요');

  const finishBtn = document.createElement('button');
  finishBtn.setAttribute('class', 'btn-32 finish-button');
  finishBtn.setAttribute('type', 'button');
  finishBtn.setAttribute('aria-label', '구매 완료');
  finishBtn.innerHTML = '<i class="ic-check" aria-hidden="true"></i>';

  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class', 'btn-32 delete-button');
  deleteBtn.setAttribute('type', 'button');
  deleteBtn.setAttribute('aria-label', '목록 삭제');
  deleteBtn.innerHTML = '<i class="ic-trash" aria-hidden="true"></i>';

  li.appendChild(input);
  li.appendChild(finishBtn);
  li.appendChild(deleteBtn);

  productList.appendChild(frag);

  return li;
}

function setInputValue(li) {
  const inputInProductItem = li.querySelector('input');
  const randomNum = Math.floor(Math.random() * emoji.length);
  inputInProductItem.value = `${emoji[randomNum]} ${input.value}`;
}

function onFinish(li) {
  const finishButton = li.querySelector('.finish-button');
  finishButton.addEventListener('click', () => {
    li.classList.toggle('is-finished');
  });
}

function onDelete(li) {
  const deleteButton = li.querySelector('.delete-button');
  deleteButton.addEventListener('click', () => {
    li.classList.add('bye-bye');
  });

  li.addEventListener('animationend', () => {
    flag = li.classList.value.includes('bye');
    if (!flag) return;

    productList.removeChild(li);
  });
}

function init() {
  input.value = '';
  input.focus();
}

function showLastItem(li) {
  li.scrollIntoView(false);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!input.value) return;

  const li = createItem();
  setInputValue(li);
  showLastItem(li);
  onFinish(li);
  onDelete(li);
  init();
});
