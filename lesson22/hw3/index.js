const checkBoxElem = document.querySelector('.task-status');
function changeCheckBox() {
  if (checkBoxElem.checked) {
    console.log(true);
  } else {
    console.log(false);
  }
}

checkBoxElem.addEventListener('change', changeCheckBox);
