# 🛒 showping-list
> *나도 자바스크립트를 잘 하고 싶다라는 마음에서 시작된 페이지*  
> *조금 더 진화한 체크리스트(쇼핑 리스트)* ∠( ᐛ 」∠)＿ 
### [개발배경](https://github.com/DuetoPark/showping-list/wiki/%EA%B0%9C%EB%B0%9C%EB%B0%B0%EA%B2%BD)
### [Wiki](https://github.com/DuetoPark/showping-list/wiki)
### [지금보다 더 못할 때 만든 체크리스트 Github](https://github.com/DuetoPark/to-do-list)

<img width="1137" alt="img-thumbnail" src="https://user-images.githubusercontent.com/69448900/149531689-0c53f895-4516-4a59-86fb-8fc6343dbed7.png">

## 🔥 코드 비교 요약
| 구분        | 개선 전                                                   | 개선 후                                              |
| ---------- | ------------------------------------------------------- | --------------------------------------------------- |
| 마크업      | 과도한 `aria-label`                                       | 불필요한 `aria-label` 삭제                              |
| 파일 관리    | 하나의 파일에 작성                                          | 이벤트 대상별로 파일 분리                                  |
| 이벤트 적용 | HTML의 eventListener & Javascript의 addEventListener 혼용   | Javascript addEventListener만 사용                    |
| innerHTML   | "(작은 따옴표)와 +연산자 사용                                | 템플릿 리터럴 사용                                       |
| 함수명      | newList, checkedEvent, remove                           | 명시적으로 변경<br/> createItem, toggleItem, deleteItem  |

## 🙌 코드 비교
### 1. 마크업
불필요한 aria-label 삭제하여 가독성 향상하였고, HTML의 eventListener 삭제하여 유지보수도 쉬워졌습니다!  

- 개선 전
  ```html
  <input type="text"
    placeholder="Please type a task"
    onkeydown="enterKeyEvent()" // 🔥💩💩💩
    aria-label="please type a task here."/> // 🔥💩💩💩
  <button type="button" aria-label="Add tasks">Insert</button>
  ```
  
- 개선 후
  ```html
  <input type="text" placeholder="구매하실 물건을 입력해주세요" />
  <button type="submit" aria-label="입력">
    <i aria-hidden="true">⏎</i>
  </button>
  ```

### 2. 파일 관리
이벤트 대상별로 파일을 분리하여 유지보수가 쉬워졌습니다!

- 개선 전 : `function.js`
- 개선 후 : `form-submit.js`, `product-list.js`, `input-color.js`, `title-color.js`

### 3. innerHTML
작은 따옴표와 플러스 연산자를 템플릿 리터럴로 수정하여 가독성을 높였습니다!

- 개선 전
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
      ")' class='setting_X_button'>X</button>" // 🔥💩💩💩 너무나 똥이다
    toDoList.appendChild(appendList)
  }
  ```
  
- 개선 후
  ```javascript
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

    productList.appendChild(li)
    li.scrollIntoView(false)
  }
  ```

## 📆 제작기간
2022.01.11 ~ 2022.01.14


## 🙌 사용언어
- HTML
- CSS, Sass/SCSS
- Javascript
