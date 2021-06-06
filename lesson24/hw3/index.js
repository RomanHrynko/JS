const tasks = [
  {
    text: 'Buy milk',
    done: false,
    dateStart: new Date(),
    dateEnd: undefined,
    id: Math.random(),
  },
  {
    text: 'Pick up Tom from airport',
    done: false,
    dateStart: new Date(),
    dateEnd: undefined,
    id: Math.random(),
  },
  {
    text: 'Visit party',
    done: false,
    dateStart: new Date(),
    dateEnd: undefined,
    id: Math.random(),
  },
  {
    text: 'Visit doctor',
    done: true,
    dateStart: new Date(),
    dateEnd: undefined,
    id: Math.random(),
  },
  {
    text: 'Buy meat',
    done: true,
    dateStart: new Date(),
    dateEnd: undefined,
    id: Math.random(),
  },
];

const listElem = document.querySelector('.list');

const renderTasks = tasksList => {
  listElem.innerHTML = '';
  const tasksElems = tasksList
    .sort((a, b) => {
      if (a.done - b.done !== 0) {
        return a.done - b.done;
      }
      if (a.done) {
        return new Date(b.dateEnd) - new Date(a.dateEnd);
      }
      return new Date(b.dateStart) - new Date(a.dateStart);
    })
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('data-id', id);
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

const completedTask = event => {
  const isCheckbox = event.target.classList.contains('list__item-checkbox');
  console.log(isCheckbox);
  if (!isCheckbox) {
    return null;
  }

  const choseCheckbox = event.target.dataset.id;

  const choseTask = tasks.find(el => el.id === +choseCheckbox);
  choseTask.done = event.target.checked;

  choseTask.dateEnd = choseTask.done ? new Date() : undefined;

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
