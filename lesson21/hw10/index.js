export const manageClasses = () => {
  const firstElement = document.querySelector('.one');
  firstElement.classList.add('selected');

  const twoElement = document.querySelector('.two');
  twoElement.classList.remove('selected');

  const thirdElement = document.querySelector('.three');
  thirdElement.classList.toggle('three_done');

  const fourElement = document.querySelector('.four');

  if (fourElement.classList.contains('some-class')) {
    fourElement.classList.add('another-class');
  }
};
