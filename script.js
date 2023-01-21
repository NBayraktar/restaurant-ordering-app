import {
  menuArray
} from '/data.js'

document.addEventListener('click', function (e) {
  if (e.target.dataset.add) {
    renderOrder()
  }
})

function renderOrder() {
  let orderHtml = ''


}

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
        <div class="add-btn" data-add='${menu.id}'>
          +
        </div>
      </div> 
      
    </div>
  
    `
  })
  return menuHtml
}
let orderHtml = ''
orderHtml += `
<p class="text item-title order-title">Your order</p>
<div class="order-wraper">
  <div class="order">
    <p class="text item-title order-text">Pizza</p>
    <p class="text item-title remove">remove</p>
  </div>
  <p class="text item-price order-price">£0</p>
</div>

<div class="order-wraper">
  <div class="order">
    <p class="text item-title order-text">Hamburger</p> 
    <p class ="text item-title remove">remove</p>
  </div> 
  <p class="text item-price order-price">£0</p>
</div>
<div class="order-wraper">
  <div class="order">
    <p class="text item-title order-text">Beer</p>
    <p class="text item-title remove">remove</p>
  </div>
  <p class="text item-price order-price">£0</p>
</div>
<div class="order-divider"></div>
<div class="order-wraper">
  <p class="text item-title order-text">Total prise:</p>
  <p class="text item-price order-price">£0</p>
</div>
<button class="complete-btn" id="complete-btn">Complete order</button>
`



function render() {
  document.getElementById('main-section').innerHTML = getMenuHtml()
  document.querySelector('.order-section').innerHTML = orderHtml
}

render()