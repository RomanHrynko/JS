export const finishList = () => {
  const newLiElement1 = document.createElement('li');
  newLiElement1.textContent = 1;

  const newLiElement4 = document.createElement('li');
  newLiElement4.textContent = 4;

  const newLiElement6 = document.createElement('li');
  newLiElement6.textContent = 6;

  const newLiElement8 = document.createElement('li');
  newLiElement8.textContent = 8;

  const listElement = document.querySelector('.list');
  listElement.prepend(newLiElement1);
  listElement.append(newLiElement8);

  const newSpecialElement = document.querySelector('.special');
  newSpecialElement.before(newLiElement4);
  newSpecialElement.after(newLiElement6);
};
