const form = document.inputForm;
const output = form.querySelector('.output-list');
const input = form.querySelector('.input input');

const template = `
  <input type="text" />

  <div class="button-group">
    <button class="finish-button" type="button">완료</button>
    <button class="delete-button" type="button">삭제</button>
  </div>
`;

function createListItem() {
  const li = document.createElement('li');
  li.setAttribute('class', 'output-item');
  output.appendChild(li);
  return li;
}

function setHTMLforListItem(item) {
  item.innerHTML = template;
  item.querySelector('input').value = input.value;
}

function setEventForFinish(item) {
  const finishButton = item.querySelector('.finish-button');
  finishButton.addEventListener('click', () => {
    item.classList.toggle('is-finished');
  });
}

function setEventForDelete(item) {
  const deleteButton = item.querySelector('.delete-button');
  deleteButton.addEventListener('click', () => {
    output.removeChild(item);
  });
}

function initInput() {
  input.value = '';
  input.focus();
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!input.value) return;

  const li = createListItem();
  setHTMLforListItem(li);
  setEventForFinish(li);
  setEventForDelete(li);

  initInput();
});
