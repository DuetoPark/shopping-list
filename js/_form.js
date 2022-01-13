const form = document.shoppingListForm;
const productList = document.querySelector('.product-list');
let flag = true;
const input = document.querySelector('.input-group input');

function addProductItem() {
  const li = document.createElement('li');
  productList.appendChild(li);

  li.setAttribute('class', 'product-item');

  li.innerHTML = `
    <input type="text" />
    <button class="finish-button" type="button">완료</button>
    <button class="delete-button" type="button">삭제</button>
  `;

  const inputInProductItem = li.querySelector('input');
  inputInProductItem.value = input.value;

  return li;
}

function setEventToApplyFinishedStyle(li) {
  const finishButton = li.querySelector('.finish-button');
  finishButton.addEventListener('click', () => {
    li.classList.toggle('is-finished');
  });
}

function setEventToDeleteProductItem(li) {
  const deleteButton = li.querySelector('.delete-button');
  deleteButton.addEventListener('click', () => {
    productList.removeChild(li);
  });
}

function init() {
  input.value = '';
  input.focus();
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!input.value) return;

  const li = addProductItem();
  setEventToApplyFinishedStyle(li);
  setEventToDeleteProductItem(li);
  init();
});

const selectAllButton = document.querySelector('.select-all');

selectAllButton.addEventListener('click', () => {
  const productItems = document.querySelectorAll('.product-item');

  productItems.forEach((item) => {
    item.classList[flag ? 'add' : 'remove']('is-finished');
  });

  flag = flag ? false : true;
});
