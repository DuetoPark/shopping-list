const form = document.shoppingListForm;
const productList = document.querySelector('.product-list');
const input = document.querySelector('.input-group input');
let flag = null;
const emoji = ['👽', '😎', '🌙', '🔥', '👀', '🦄', '🐻', '💜', '🐛', '🌈', '🍅'];

function createItem() {
  const li = document.createElement('li');
  productList.appendChild(li);

  li.setAttribute('class', 'product-item');

  li.innerHTML = `
    <input type="text" placeholder="구매하실 물건을 입력해주세요" />

    <button
      class="btn-32 finish-button"
      type="button"
      aria-label="완료"
    >
      <i class="ic-check" aria-hidden="true"></i>
    </button>

    <button
      class="btn-32 delete-button"
      type="button"
      aria-label="삭제"
    >
      <i class="ic-trash" aria-hidden="true"></i>
    </button>
  `;

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
