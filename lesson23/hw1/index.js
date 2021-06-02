const listElem = document.querySelector('.list');

const tasks = [
  { text: 'Buy milk', done: false, id: Math.random() },
  { text: 'Pick up Tom from airport', done: false, id: Math.random() },
  { text: 'Visit party', done: false, id: Math.random() },
  { text: 'Visit doctor', done: true, id: Math.random() },
  { text: 'Buy meat', done: true, id: Math.random() },
];

const renderTasks = tasksList => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');

      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.dataset.id = id;
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');

      if (done) {
        listItemElem.classList.add('list__item_done');
      }

      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.innerHTML = '';
  listElem.append(...tasksElems);
};

const completedTask = event => {
  const isCheckbox = event.target.classList.contains('list__item-checkbox');

  if (!isCheckbox) {
    return;
  }

  const choseCheckbox = event.target.dataset.id;
  const choseTask = tasks.find(el => el.id == choseCheckbox);
  choseTask.done = event.target.checked;

  renderTasks(tasks);
};

listElem.addEventListener('click', completedTask);

const createTask = () => {
  const inputTaskElem = document.querySelector('.task-input');
  const inputTaskValue = inputTaskElem.value;

  if (inputTaskValue === '') {
    return;
  }

  tasks.push({ text: inputTaskValue, done: false, id: Math.random() });
  inputTaskElem.value = '';
  renderTasks(tasks);
};

const buttonElem = document.querySelector('.create-task-btn');
buttonElem.addEventListener('click', createTask);

renderTasks(tasks);
