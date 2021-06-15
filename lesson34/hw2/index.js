const baseUrl = 'https://60c88362afc88600179f73f9.mockapi.io/api/v1/form';

const buttonElem = document.querySelector('.submit-button');
const inputElem = document.querySelector('.login-form');
const errorElem = document.querySelector('.error-text');

const onValidInput = () => {
  inputElem.reportValidity() ? (buttonElem.disabled = false) : (buttonElem.disabled = true);
};

inputElem.addEventListener('input', onValidInput);

const onSubmitForm = event => {
  event.preventDefault();
  const formData = [...new FormData(inputElem)].reduce(
    (acc, [field, value]) => ({ ...acc, [field]: value }),
    {},
  );
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(formData),
  })
    .then(data => data.json())
    .then(data => {
      alert(JSON.stringify(data));
      inputElem.reset();
    })
    .catch(() => {
      errorElem.textContent = 'Failed to create user';
    });
};

inputElem.addEventListener('submit', onSubmitForm);
