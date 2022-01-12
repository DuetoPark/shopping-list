export class HandleList {
  constructor(list) {
    this.list = document.querySelector(list);
    this.template = null;
  }

  createListItem() {
    const li = document.createElement('li');
    this.list.appendChild(li);
    return li;
  }

  setHTML(item) {
    item.innerHTML = this.template;
  }

  setEventToDelete(item) {
    const deleteButton = item.querySelector('.delete-button');
    deleteButton.addEventListener('click', () => {
      this.list.removeChild(item);
    });
  }
}
