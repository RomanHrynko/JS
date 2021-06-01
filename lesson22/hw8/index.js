const checkboxElement = document.querySelector('.task-status');

const inputCheckbox = event => {
  if (event.target.checked) {
    console.log(true);
  } else {
    console.log(false);
  }
};

checkboxElement.addEventListener('change', inputCheckbox);
