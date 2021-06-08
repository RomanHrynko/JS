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

      //якщо справа зроюлена, додаємо класс на елемент

      if (done) {
        listItemElem.classList.add('list__item_done');
      }

      //додаємо кожному елементу checkbox

      const checkbox = document.createElement('input');

      //клжному checkbox-елементу треба задати тип атрибута "checkbox"

      checkbox.setAttribute('type', 'checkbox');
      checkbox.dataset.id = id;

      //checkbox-елемент повинен зчитати з tasks властивість done і встановити значення через властивість "checked"
      checkbox.checked = done; // чекбокс повертає true/false (і ми можемо записати в нього true/false)

      //в checkbox назначаємо клас

      checkbox.classList.add('list__item-checkbox');

      //в кожний сформований елемент списка додаємо checkbox і текст

      listItemElem.append(checkbox, text); // пушимо в елемент списка чекбокс і текст з масиву

      return listItemElem;
    });
  //перед додаванням задачі обновляємо весь список
  listElem.innerHTML = '';
  //массив створених елементів вставляємо в ".list"
  listElem.append(...tasksElems); // пушимо всі створені елементи з їх атрибутами в наш список
};

//при кліці на checkbox змінити стан елемента
const completedTask = event => {
  const isCheckbox = event.target.classList.contains('list__item-checkbox');

  if (!isCheckbox) {
    return;
  }

  const choseCheckbox = event.target.dataset.id; //в змінну закидаємо id чеккбокса на який клікнули
  //слідкувати за типом даних при порівнянні
  const choseTask = tasks.find(el => el.id === +choseCheckbox); //перебираємо масив і якщо знаходимо елемент з таким же id записуємо в змінну
  choseTask.done = event.target.checked; //в цьому елементі міняємо done на булеве  checked

  renderTasks(tasks);
};

listElem.addEventListener('click', completedTask);

//додаємо нове завдання після вводу в поле і натиснення на кнопку Create
const createTask = () => {
  const inputTaskElem = document.querySelector('.task-input');
  const inputTaskValue = inputTaskElem.value; // тут отримуємо дані з поля вводу
  //якщо поле пусте - тоді не додаємо задачу
  if (inputTaskValue === '') {
    return;
  }

  tasks.push({ text: inputTaskValue, done: false, id: Math.random() });

  //перевірити через дебаггер додавання завдання в массив tasks
  inputTaskElem.value = ''; // очищаємо поле вводу
  renderTasks(tasks); // повертаємо наш новий маисв
};

const buttonElem = document.querySelector('.create-task-btn');
buttonElem.addEventListener('click', createTask);

renderTasks(tasks);
