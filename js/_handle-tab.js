const addTabButton = document.querySelector('.add');
const tabList = document.querySelector('.tab-list');

const tabTamplate = `
  <input type="text" placeholder="마트" />
  <button class="delete-button" type="button">탭 삭제</button>
`;

function createTabItem() {
  const li = document.createElement('li');
  li.setAttribute('class', 'tab-item');
  li.setAttribute('role', 'tab');
  tabList.appendChild(li);

  return li;
}

function setHTMLForTabItem(item) {
  item.innerHTML = tabTamplate;
}

function setEventForDelete(item) {
  const deleteButton = item.querySelector('.delete-button');
  deleteButton.addEventListener('click', () => {
    tabList.removeChild(item);
  });
}

addTabButton.addEventListener('click', () => {
  const li = createTabItem();
  setHTMLForTabItem(li);
  setEventForDelete(li);
});
