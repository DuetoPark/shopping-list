const productList = document.querySelector('.product-list')

function toggleItem(item) {
  item.classList.toggle('is-finished')
}

function deleteItem(item) {
  item.classList.add('bye-bye')
  item.addEventListener('animationend', () => {
    const productList = item.parentNode
    productList.removeChild(item)
  })
}

function handleProductItem(event) {
  const target = event.target
  const id = target.dataset.id
  if (!id || target.tagName !== 'BUTTON') return

  const productItem = target.parentNode
  const [, finishButton, deleteButton] = productItem.children

  if (target === finishButton) {
    toggleItem(productItem)
  } else if (target === deleteButton) {
    deleteItem(productItem)
  }
}

productList.addEventListener('click', handleProductItem)
