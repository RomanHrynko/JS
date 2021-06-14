const tasks = [
  {
    text: 'Buy milk',
    done: false,
    id: Math.random(),
    date: Date.now(),
  },
  {
    text: 'Pick up Tom from airport',
    done: false,
    id: Math.random(),
    date: Date.now(),
  },
  {
    text: 'Visit party',
    done: false,
    id: Math.random(),
    date: Date.now(),
  },
  {
    text: 'Visit doctor',
    done: true,
    id: Math.random(),
    date: Date.now(),
  },
  {
    text: 'Buy meat',
    done: true,
    id: Math.random(),
    date: Date.now(),
  },
];

const listElem = document.querySelector('.list');

const renderTasks = tasksList => {
  listElem.innerHTML = '';
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done || new Date(b.data) - new Date(a.data))
    .map(({ text, done, id, data }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('data-id', id);
      checkbox.setAttribute('data-data', data);
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

  choseTask.date = Date.now();

  renderTasks(tasks);
};

listElem.addEventListener('click', completedTask);

const createTask = () => {
  const inputTaskElem = document.querySelector('.task-input');
  const inputTaskValue = inputTaskElem.value;

  if (inputTaskValue === '') {
    return;
  }

  tasks.push({
    text: inputTaskValue,
    done: false,
    id: Math.random(),
    date: Date.now(),
  });

  inputTaskElem.value = '';
  renderTasks(tasks);
};

const buttonElem = document.querySelector('.create-task-btn');
buttonElem.addEventListener('click', createTask);
