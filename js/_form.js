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

function onAdd(li) {
  const inputInProductItem = li.querySelector('input');
  const randomNum = Math.floor(Math.random() * emoji.length);
  inputInProductItem.value = `${emoji[randomNum]} ${input.value}`;

  li.scrollIntoView(false);

  input.value = '';
  input.focus();
}

function onFinish(item) {
  item.classList.toggle('is-finished');
}

function onDelete(item) {
  item.classList.add('bye-bye');

  item.addEventListener('animationend', () => {
    productList.removeChild(item);
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!input.value) return;

  const li = createItem();
  onAdd(li);
});

productList.addEventListener('click', (event) => {
  const id = event.target.dataset.id;

  if (!id) return;

  const isSelected = document.querySelector(`.product-item[data-id='${id}']`);
  const finishBtn = document.querySelector(`.finish-button[data-id='${id}']`);
  const deleteBtn = document.querySelector(`.delete-button[data-id='${id}']`);

  if (event.target === finishBtn) {
    onFinish(isSelected);
  }

  if (event.target === deleteBtn) {
    onDelete(isSelected);
  }
});
