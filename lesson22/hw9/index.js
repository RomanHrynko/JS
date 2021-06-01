const buttonElements = document.querySelectorAll('.pagination__page');

const handleClick = event => {
  console.log(event.target.dataset.pageNumber);
};

buttonElements.forEach(el => el.addEventListener('click', handleClick));
