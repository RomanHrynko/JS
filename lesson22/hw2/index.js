const inputElement = document.querySelector('.text-input');
function changeInput() {
  console.log(inputElement.value);
}
inputElement.addEventListener('change', changeInput);
