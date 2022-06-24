var employment = document.querySelector('.employment');
var x = document.getElementById('x');

employment.addEventListener('click', myFunction);
x.addEventListener('click', myFunction);

function myFunction() {
    var popup = document.getElementById('popup')
    popup.classList.toggle('show');
  }

var btn = document.querySelector('.btn');
btn.addEventListener('click', dropdown);

function dropdown(){
    btn.classList.toggle('btn-active');
    var menu = document.querySelector('.dropdown-menu');
    menu.classList.toggle('visible');
}