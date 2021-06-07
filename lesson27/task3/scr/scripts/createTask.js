import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';

export const createTask = () => {
  const inputTaskElem = document.querySelector('.task-input');
  const inputTaskValue = inputTaskElem.value;

  if (inputTaskValue === '') {
    return;
  }
  inputTaskElem.value = '';

  const taskList = getItem('taskList') || [];

  const newTaskList = taskList.concat({
    text: inputTaskValue,
    done: false,
    dateStart: new Date(),
    dateEnd: undefined,
    id: Math.random(),
  });

  setItem('tasksList', newTaskList);

  renderTasks();
};
