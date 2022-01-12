import { HandleList } from './_handle-list.js';

class Product extends HandleList {
  constructor(list) {
    super(list);
    this.template = `
      <input type="text" />
    
      <div class="button-group">
        <button class="finish-button" type="button">완료</button>
        <button class="delete-button" type="button">삭제</button>
      </div>
    `;
  }

  setAttr(item) {
    item.setAttribute('class', 'product-item');
  }

  setValueToInput(item) {
    item.querySelector('input').value = input.value;
  }

  setEventToFinish(item) {
    const finishButton = item.querySelector('.finish-button');
    finishButton.addEventListener('click', () => {
      item.classList.toggle('is-finished');
    });
  }

  init(target) {
    target.value = '';
    target.focus();
  }
}

const product = new Product('.product-list');
const form = document.inputForm;
const input = form.querySelector('.input input');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!input.value) return;

  const li = product.createListItem();
  product.setHTML(li);
  product.setAttr(li);
  product.setValueToInput(li);
  product.setEventToFinish(li);
  product.setEventToDelete(li);
  product.init(input);
});
