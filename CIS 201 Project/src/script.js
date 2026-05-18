

// night mode 
function toggleNight() {
  var isNight = document.body.classList.toggle('night');
  var btn = document.getElementById('nightBtn');

  if (isNight) {
    btn.textContent = '☀️ Light';
    localStorage.setItem('verdant-theme','night');
  } else {
    btn.textContent ='🌙 Night';
    localStorage.setItem('verdant-theme','light');
  }
}

// load the same theme
function loadTheme() {
  if (localStorage.getItem('verdant-theme') == 'night') {
    document.body.classList.add('night');
    document.getElementById('nightBtn').textContent = '🌞 Light';
  }
  addToCart(0);

}

//returns cart number
function getCartNum() {
  var num = localStorage.getItem('verdant-cart');
  if (num == null) {
    return 0;
  }
  return parseInt(num);
}

/*function updateCartCount() {
  var num = getCartNum();
  var inCart = document.querySelectorAll('.cart-count');

  for (var i = 0; i < inCart.length; i++) {
    inCart[i].textContent = num;
  }

} */


function addToCart(itemName) {
  if(itemName == 0){ var num= getCartNum(); }
  else{ var num= getCartNum() + 1; }


  localStorage.setItem('verdant-cart', num);
  
 
  var inCart = document.querySelectorAll('.cart-count');

  for (var i = 0; i < inCart.length; i++) {
    inCart[i].textContent = num;
  }


}




// contact form submit
function submitForm() {
  var name = document.getElementById('f-name').value;
  var email = document.getElementById('f-email').value;
  var topic = document.getElementById('f-topic').value;
  var msg = document.getElementById('f-msg').value;
  var replyBox = document.getElementById('form-msg');

  if (name == ''||email=='' ||msg == '') {
    alert('Please fill in all fields.');
    return;
  }

  document.getElementById('f-name').value = '';
  document.getElementById('f-email').value = '';
  document.getElementById('f-msg').value = '';
}