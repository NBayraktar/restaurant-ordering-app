import {
  menuArray
} from '/data.js'


function getMenuHtml() {
  let menuHtml = ''
  menuArray.forEach(function (menu) {
    menuHtml += `
    <div class="item-wraper">
      <div class="section-1">
        <div class="item-emoji">${menu.emoji}</div>
        <div class="text__wraper">
          <p class="text item-title">${menu.name}</p>
          <p class="text item-description">${menu.ingredients}</p>
          <p class="text item-price">£ ${menu.price}</p>
        </div>
      </div> 

      <div class="section-2">
        <div class="add-btn">
          +
        </div>
      </div> 

    </div>
    `
  })
  return menuHtml
}

function render() {
  document.getElementById('main-section').innerHTML = getMenuHtml()
}

render()