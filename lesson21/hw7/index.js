export const createButton = buttonText => {
  const newButtonElement = document.createElement('button');
  newButtonElement.textContent = buttonText;

  const bodyElement = document.querySelector('body');
  bodyElement.append(newButtonElement);
};
