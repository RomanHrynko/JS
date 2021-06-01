const buttonElement = document.querySelector('.single-use-btn');
function buttonClick() {
  console.log('clicked');
  buttonElement.removeEventListener('click', buttonClick);
}

buttonElement.addEventListener('click', buttonClick);
