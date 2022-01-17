const form = document.shoppingListForm;
const productList = document.querySelector('.product-list');
const input = document.querySelector('.input-group input');
let flag = null;
const emoji = ['👽', '😎', '🌙', '🔥', '👀', '🦄', '🐻', '💜', '🐛', '🌈', '🍅'];

function createItem() {
  const id = uuidv4();

  const li = document.createElement('li');
  li.setAttribute('class', 'product-item');
  li.setAttribute('data-id', id);
  productList.appendChild(li);

  li.innerHTML = `
    <input type="text" placeholder="구매하실 물건을 입력해주세요"/>

    <button class="btn-32 finish-button" type="button" aria-label="구매 완료" data-id=${id}>
      <i class="ic-check" aria-hidden="true"></i>
    </button>
    
    <button class="btn-32 delete-button" type="button" aria-label="목록 삭제" data-id=${id}>
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

function onDelete(li) {
  li.addEventListener('animationend', () => {
    flag = li.classList.value.includes('bye');
    if (!flag) return;

    productList.removeChild(li);
  });
}

function showLastItem(li) {
  li.scrollIntoView(false);
}

function init() {
  input.value = '';
  input.focus();
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!input.value) return;

  const li = createItem();
  setInputValue(li);
  showLastItem(li);
  onDelete(li);
  init();
});

productList.addEventListener('click', (event) => {
  const id = event.target.dataset.id;

  if (!id) return;

  const toBeDeleted = document.querySelector(`.product-item[data-id='${id}']`);
  const finishBtn = document.querySelector(`.finish-button[data-id='${id}']`);
  const deleteBtn = document.querySelector(`.delete-button[data-id='${id}']`);

  if (event.target === finishBtn) {
    toBeDeleted.classList.toggle('is-finished');
  }

  if (event.target === deleteBtn) {
    toBeDeleted.classList.add('bye-bye');
  }
});
