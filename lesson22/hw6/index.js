const buttonElements = document.querySelectorAll('.btn');
function handleClick(event) {
  console.log(event.target.textContent);
}
buttonElements.forEach(element => {
  element.addEventListener('click', handleClick);
});
