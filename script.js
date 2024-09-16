let mb = document.getElementById('bcon')
mb.addEventListener('click',
function(){
  let menu = document.getElementById('menu')
  let menubc = document.getElementById('menubc')
  let menucl = document.getElementById('menucl')
  
  menu.style.width = '65vw'
  menu.style.visibility = 'visible'
  menubc.style.visibility = 'visible'
  menucl.style.display = 'block'
  
  menucl.addEventListener('click',
  function(){
    menu.style.width = '0vw'
    menu.style.visibility = 'hidden'
    menubc.style.visibility = 'hidden'
    menucl.style.display = 'none'
  })
});

let items = document.getElementById('item')
let item1 = document.getElementById('item1')
let item2 = document.getElementById('item2')
let item3 = document.getElementById('item3')
let item4 = document.getElementById('item4')
let item5 = document.getElementById('item5')
let item6 = document.getElementById('item6')
let item7 = document.getElementById('item7')

let search = document.getElementById('search')

search.addEventListener('input',
function(){
  
  let input = search.value.toLowerCase().trim()
  let w = {'apple': item1,
  'banana': item2,
  'orange': item3,
  'mango': item4,
  'Strawberry': item5,
  'grapes': item6,
  'kiwi': item7
  }
  
  if (input == ''){
    items.style.display = 'none'
  }
  else {
    items.style.display = 'flex'
  }
  Object.keys(w).forEach(key => {
    if (key.toLowerCase().includes(input)) {
      w[key].style.display = 'block'
    }
    else {
      w[key].style.display = 'none'
    }
  });
});
