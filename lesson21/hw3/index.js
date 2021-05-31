export const getTitle = () => {
  const titleElement = document.querySelector('.title');

  return titleElement.textContent;
};

console.log(getTitle());

export const getDescription = () => {
  const descriptionElement = document.querySelector('.about');

  return descriptionElement.innerText;
};

console.log(getDescription());

export const getPlans = () => {
  const plansElement = document.querySelector('.plans');

  return plansElement.innerHTML;
};

console.log(getPlans());

export const getGoal = () => {
  const goalElement = document.querySelector('.goal');

  return goalElement.outerHTML;
};

console.log(getGoal());
