export const finishForm = () => {
  const newInputElement = document.createElement('input');
  newInputElement.setAttribute('type', 'text');
  newInputElement.setAttribute('name', 'login');

  const formElementOne = document.querySelector('.login-form');
  formElementOne.prepend(newInputElement);

  const formElementTwo = document.querySelector('input[name="password"]');
  formElementTwo.setAttribute('type', 'password');
};
