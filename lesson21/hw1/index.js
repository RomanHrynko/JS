const getTitleElement = () => {
  const titleElem = document.querySelector('.title');
  console.dir(titleElem);
  return titleElem;
};
console.log(getTitleElement());

const getInputElement = () => {
  const inputElem = document.querySelector('[type = "text"]');
  console.dir(inputElem);
  return inputElem;
};
console.log(getInputElement());
