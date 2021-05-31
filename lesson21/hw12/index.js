export const getSection = num => {
  const spanElement = document.querySelector(`span[data-number="${num.toFixed()}"]`);
  const parentElement = spanElement.closest('.box');

  return parentElement.getAttribute('data-section');
};
