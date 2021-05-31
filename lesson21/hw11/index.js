export const squaredNumbers = () => {
  const numbersElement = document.querySelectorAll('.number');
  console.log(numbersElement);
  [...numbersElement].map(el => {
    const num = el.dataset.number;
    el.dataset.squaredNumber = num * num;
  });
};
