const tasks = [
  { text: 'Buy milk', done: false, id: Math.random() },
  { text: 'Pick up Tom from airport', done: false, id: Math.random() },
  { text: 'Visit party', done: false, id: Math.random() },
  { text: 'Visit doctor', done: true, id: Math.random() },
  { text: 'Buy meat', done: true, id: Math.random() },
];

//вибір класу, в якому створюємо елементи "li"
const listElem = document.querySelector('.list');

//через map, на каждой ітерації створюємо "li", призначаємо класс и додаємо id
const renderTasks = tasksList => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');

      //если справа зроюлена, додаємо класс на елемент

      if (done) {
        listItemElem.classList.add('list__item_done');
      }

      //додаємо кожному елементу checkbox

      const checkbox = document.createElement('input');

      //клжному checkbox-елементу треба задати тип атрибута "checkbox"

      checkbox.setAttribute('type', 'checkbox');
      checkbox.dataset.id = id;

      //checkbox-елемент повинен зчитати з tasks властивість done і встановити значення через властивість "checked"
      checkbox.checked = done;

      //в checkbox назначаємо клас

      checkbox.classList.add('list__item-checkbox');

      //в кожний сформований елемент списка додаємо checkbox і текст

      listItemElem.append(checkbox, text);

      return listItemElem;
    });
  //перед додаванням задачі обновляємо весь список
  listElem.innerHTML = '';
  //массив створених елементів вставляємо в ".list"
  listElem.append(...tasksElems);
};

//при кліці на checkbox змінити стан елемента
const completedTask = event => {
  const isCheckbox = event.target.classList.contains('list__item-checkbox');

  if (!isCheckbox) {
    return;
  }

  const choseCheckbox = event.target.dataset.id;
  //слідкувати за типом даних при порівнянні
  const choseTask = tasks.find(el => el.id === +choseCheckbox);
  choseTask.done = event.target.checked;

  renderTasks(tasks);
};

listElem.addEventListener('click', completedTask);

//додаємо нове завдання після вводу в поле і натиснення на кнопку Create
const createTask = () => {
  const inputTaskElem = document.querySelector('.task-input');
  const inputTaskValue = inputTaskElem.value;
  //якщо поле пусте - тоді не додаємо задачу
  if (inputTaskValue === '') {
    return;
  }

  tasks.push({ text: inputTaskValue, done: false, id: Math.random() });

  //перевірити через дебаггер додавання завдання в массив tasks
  inputTaskElem.value = '';
  renderTasks(tasks);
};

const buttonElem = document.querySelector('.create-task-btn');
buttonElem.addEventListener('click', createTask);

renderTasks(tasks);
