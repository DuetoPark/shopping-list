# 🛒 showping-list
> *나도 자바스크립트를 잘 하고 싶다라는 마음에서 시작된 페이지*  
> *조금 더 진화한 체크리스트(쇼핑 리스트)* ∠( ᐛ 」∠)＿ 
### [개발배경](https://github.com/DuetoPark/showping-list/wiki/%EA%B0%9C%EB%B0%9C%EB%B0%B0%EA%B2%BD)
### [Wiki](https://github.com/DuetoPark/showping-list/wiki)
### [지금보다 더 못할 때 만든 체크리스트 Github](https://github.com/DuetoPark/to-do-list)

<img width="1137" alt="img-thumbnail" src="https://user-images.githubusercontent.com/69448900/149531689-0c53f895-4516-4a59-86fb-8fc6343dbed7.png">

## 🔥 코드 비교

| 구분        | 개선 전                                              | 개선 후                              |
| ----------- | ---------------------------------------------------- | ------------------------------------ |
| 이벤트 종류 | `click`이벤트, `keydown`이벤트                      | `submit` 이벤트                          |
| 이벤트 적용 | HTML onclick attr & Javascript addEventListener 혼용 | Javascript `addEventListener`로 통일 |
| 값 설정     | innerHTML 👉 "와 +연산자                             | 템플릿 리터럴 사용으로 가독성 향상   |

### 1. 개선 전
```javascript
function newList(cnt) {
  var appendList = document.createElement('p')
  appendList.setAttribute('id', 'p' + cnt)
  appendList.textContent = data.value
  appendList.innerHTML ="<input type='checkbox' id='ckbox" + cnt + "' onclick='checkedEvent(" + cnt + ")' ><label for='ckbox" + cnt + "'></label>" + appendList.textContent + " <button onclick='remove(" + cnt + ")' class='setting_X_button'>X</button>"
  toDoList.appendChild(appendList)
}
```

### 2. 개선 후
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

  return li;
}
```

## 📆 제작기간
2022.01.11 ~ 2022.01.14


## 🙌 사용언어
- HTML
- CSS, Sass
- Javascript
