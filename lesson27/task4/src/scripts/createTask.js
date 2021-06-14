import { renderTasks } from './renderTasks.js';
import { getItem, setItem } from './storage.js';

export const createTask = () => {
  const inputTaskElem = document.querySelector('.task-input');
  const inputTaskValue = inputTaskElem.value;

  if (inputTaskValue === '') {
    return;
  }

  const tasks = getItem('taskList') || [];

  const newTasks = tasks.concat({
    text: inputTaskValue,
    done: false,
    id: Math.random(),
    date: Date.now(),
  });

  setItem('taskList', newTasks);

  renderTasks();
};
