const form = document.shoppingForm
const productList = document.querySelector('.product-list')
const input = document.querySelector('.shopping-form input')
const emoji = ['π½', 'π', 'π', 'π₯', 'π', 'π¦', 'π»', 'π', 'π', 'π', 'π']

function createItem() {
  const id = uuidv4()

  const li = document.createElement('li')
  li.setAttribute('class', 'product-item')
  li.setAttribute('data-id', id)
  li.innerHTML = `
  <input
    type="text"
    value="${setTextWithRandomEmoji()}"
    placeholder="κ΅¬λ§€νμ€ λ¬Όκ±΄μ μλ ₯ν΄μ£ΌμΈμ}"/>
  
  <button
    class="btn-32 finish-button"
    type="button"
    aria-label="κ΅¬λ§€ μλ£"
    data-id=${id}
  >
    <i class="ic-check" aria-hidden="true"></i>
  </button>
  
  <button
    class="btn-32 delete-button"
    type="button"
    aria-label="λͺ©λ‘ μ­μ "
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
