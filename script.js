var employment = document.querySelector('.employment');
var x = document.getElementById('x');

employment.addEventListener('click', myFunction);
x.addEventListener('click', myFunction);
console.log(x);

function myFunction() {
    var popup = document.getElementById('popup')
    popup.classList.toggle('show');
  }