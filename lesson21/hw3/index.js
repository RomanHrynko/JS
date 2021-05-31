export const getTitle = () => {
  const titleElement = document.querySelector('.title');

  return titleElement.textContent;
};

export const getDescription = () => {
  const descriptionElement = document.querySelector('.about');

  return descriptionElement.innerText;
};

export const getPlans = () => {
  const plansElement = document.querySelector('.plans');

  return plansElement.innerHTML;
};

export const getGoal = () => {
  const goalElement = document.querySelector('.goal');

  return goalElement.outerHTML;
};
