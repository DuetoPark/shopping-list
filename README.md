# ๐ showping-list
> *๋๋ ์๋ฐ์คํฌ๋ฆฝํธ๋ฅผ ์ ํ๊ณ  ์ถ๋ค๋ผ๋ ๋ง์์์ ์์๋ ํ์ด์ง*  
> *์กฐ๊ธ ๋ ์งํํ ์ฒดํฌ๋ฆฌ์คํธ(์ผํ ๋ฆฌ์คํธ)* โ ( แ ใโ )๏ผฟ 
### [๊ฐ๋ฐ๋ฐฐ๊ฒฝ](https://github.com/DuetoPark/showping-list/wiki/%EA%B0%9C%EB%B0%9C%EB%B0%B0%EA%B2%BD)
### [Wiki](https://github.com/DuetoPark/showping-list/wiki)
### [์ง๊ธ๋ณด๋ค ๋ ๋ชปํ  ๋ ๋ง๋  ์ฒดํฌ๋ฆฌ์คํธ Github](https://github.com/DuetoPark/to-do-list)

<img width="1137" alt="img-thumbnail" src="https://user-images.githubusercontent.com/69448900/149531689-0c53f895-4516-4a59-86fb-8fc6343dbed7.png">

## ๐ฅ ์ฝ๋ ๋น๊ต ์์ฝ
| ๊ตฌ๋ถ        | ๊ฐ์  ์                                                    | ๊ฐ์  ํ                                              |
| ---------- | ------------------------------------------------------- | --------------------------------------------------- |
| ๋งํฌ์      | ๊ณผ๋ํ `aria-label`                                       | ๋ถํ์ํ `aria-label` ์ญ์                               |
| ํ์ผ ๊ด๋ฆฌ    | ํ๋์ ํ์ผ์ ์์ฑ                                          | ์ด๋ฒคํธ ๋์๋ณ๋ก ํ์ผ ๋ถ๋ฆฌ                                  |
| ์ด๋ฒคํธ ์ ์ฉ | HTML์ eventListener & Javascript์ addEventListener ํผ์ฉ   | Javascript addEventListener๋ง ์ฌ์ฉ                    |
| innerHTML   | "(์์ ๋ฐ์ดํ)์ +์ฐ์ฐ์ ์ฌ์ฉ                                | ํํ๋ฆฟ ๋ฆฌํฐ๋ด ์ฌ์ฉ                                       |
| ํจ์๋ช      | newList, checkedEvent, remove                           | ๋ช์์ ์ผ๋ก ๋ณ๊ฒฝ<br/> createItem, toggleItem, deleteItem  |

## ๐ ์ฝ๋ ๋น๊ต
### 1. ๋งํฌ์
๋ถํ์ํ aria-label ์ญ์ ํ์ฌ ๊ฐ๋์ฑ ํฅ์ํ์๊ณ , HTML์ eventListener ์ญ์ ํ์ฌ ์ ์ง๋ณด์๋ ์ฌ์์ก์ต๋๋ค!  

- ๊ฐ์  ์ 
  ```html
  <input type="text"
    placeholder="Please type a task"
    onkeydown="enterKeyEvent()" // ๐ฅ๐ฉ๐ฉ๐ฉ
    aria-label="please type a task here."/> // ๐ฅ๐ฉ๐ฉ๐ฉ
  <button type="button" aria-label="Add tasks">Insert</button>
  ```
  
- ๊ฐ์  ํ
  ```html
  <input type="text" placeholder="๊ตฌ๋งคํ์ค ๋ฌผ๊ฑด์ ์๋ ฅํด์ฃผ์ธ์" />
  <button type="submit" aria-label="์๋ ฅ">
    <i aria-hidden="true">โ</i>
  </button>
  ```

### 2. ํ์ผ ๊ด๋ฆฌ
์ด๋ฒคํธ ๋์๋ณ๋ก ํ์ผ์ ๋ถ๋ฆฌํ์ฌ ์ ์ง๋ณด์๊ฐ ์ฌ์์ก์ต๋๋ค!

- ๊ฐ์  ์  : `function.js`
- ๊ฐ์  ํ : `form-submit.js`, `product-list.js`, `input-color.js`, `title-color.js`

### 3. innerHTML
์์ ๋ฐ์ดํ์ ํ๋ฌ์ค ์ฐ์ฐ์๋ฅผ ํํ๋ฆฟ ๋ฆฌํฐ๋ด๋ก ์์ ํ์ฌ ๊ฐ๋์ฑ์ ๋์์ต๋๋ค!

- ๊ฐ์  ์ 
  ```javascript
  function newList(cnt) {
    var appendList = document.createElement('p')
    appendList.setAttribute('id', 'p' + cnt)
    appendList.textContent = data.value
    appendList.innerHTML =
      "<input type='checkbox' id='ckbox" +
      cnt +
      "' onclick='checkedEvent(" +
      cnt +
      ")' ><label for='ckbox" +
      cnt +
      "'></label>" +
      appendList.textContent +
      " <button onclick='remove(" +
      cnt +
      ")' class='setting_X_button'>X</button>" // ๐ฅ๐ฉ๐ฉ๐ฉ ๋๋ฌด๋ ๋ฅ์ด๋ค
    toDoList.appendChild(appendList)
  }
  ```
  
- ๊ฐ์  ํ
  ```javascript
  function createItem() {
    const id = uuidv4();

    const li = document.createElement('li');
    li.setAttribute('class', 'product-item');
    li.setAttribute('data-id', id);
    productList.appendChild(li);

    li.innerHTML = `
      <input type="text" placeholder="๊ตฌ๋งคํ์ค ๋ฌผ๊ฑด์ ์๋ ฅํด์ฃผ์ธ์"/>

      <button class="btn-32 finish-button" type="button" aria-label="๊ตฌ๋งค ์๋ฃ" data-id=${id}>
        <i class="ic-check" aria-hidden="true"></i>
      </button>
    
      <button class="btn-32 delete-button" type="button" aria-label="๋ชฉ๋ก ์ญ์ " data-id=${id}>
        <i class="ic-trash" aria-hidden="true"></i>
      </button>
    `;

    productList.appendChild(li)
    li.scrollIntoView(false)
  }
  ```

## ๐ ์ ์๊ธฐ๊ฐ
2022.01.11 ~ 2022.01.14


## ๐ ์ฌ์ฉ์ธ์ด
- HTML
- CSS, Sass/SCSS
- Javascript
