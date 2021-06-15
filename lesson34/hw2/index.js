const baseUrl = 'https://60c88362afc88600179f73f9.mockapi.io/api/v1/form';

const buttonElem = document.querySelector('.submit-button');
const inputElem = document.querySelector('.login-form');
const errorElem = document.querySelector('.error-text');

const onValidInput = () => {
  inputElem.reportValidity() ? (buttonElem.disabled = false) : (buttonElem.disabled = true);
};

inputElem.addEventListener('input', onValidInput);

const createDataForm = formData => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(formData),
  });
};

const onSubmitForm = () => {
  const formData = Object.fromEntries(new FormData(inputElem));

  createDataForm(formData)
    .then(response => response.json())
    .then(response => {
      alert(JSON.stringify(response));
      inputElem.reset();
    })
    .catch(() => {
      errorElem.textContent = 'Failed to create user';
    });
};

buttonElem.addEventListener('submit', onSubmitForm);
