const form = document.shoppingForm
const productList = document.querySelector('.product-list')
const input = document.querySelector('.shopping-form input')
const emoji = ['👽', '😎', '🌙', '🔥', '👀', '🦄', '🐻', '💜', '🐛', '🌈', '🍅']

function createItem() {
  const id = uuidv4()

  const li = document.createElement('li')
  li.setAttribute('class', 'product-item')
  li.setAttribute('data-id', id)
  li.innerHTML = `
  <input
    type="text"
    value="${setTextWithRandomEmoji()}"
    placeholder="구매하실 물건을 입력해주세요}"/>
  
  <button
    class="btn-32 finish-button"
    type="button"
    aria-label="구매 완료"
    data-id=${id}
  >
    <i class="ic-check" aria-hidden="true"></i>
  </button>
  
  <button
    class="btn-32 delete-button"
    type="button"
    aria-label="목록 삭제"
    data-id=${id}
  >
    <i class="ic-trash" aria-hidden="true"></i>
  </button>
  `
  productList.appendChild(li)
  li.scrollIntoView(false)
}

function setTextWithRandomEmoji() {
  const randomNum = Math.floor(Math.random() * emoji.length)
  const text = input.value
  return `${emoji[randomNum]} ${text}`
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  if (!input.value) return

  createItem()

  input.value = ''
  input.focus()
})
