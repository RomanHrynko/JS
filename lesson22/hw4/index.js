const buttonElement = document.querySelector('.search__btn');
function clickButton() {
  const inputElement = document.querySelector('.search__input');
  console.log(inputElement.value);
}

buttonElement.addEventListener('click', clickButton);
