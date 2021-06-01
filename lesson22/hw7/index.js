const inputElement = document.querySelector('.text-input');
function changeInput(event) {
  console.log(event.target.value);
}

inputElement.addEventListener('change', changeInput);
