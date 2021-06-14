import { renderTasks } from './renderTasks.js';
import { getItem, setItem } from './storage.js';

export const createTask = () => {
  const inputTaskElem = document.querySelector('.task-input');
  const text = inputTaskElem.value;

  if (text === '') {
    return;
  }
  const tasks = getItem('tasksList') || [];

  const newTasks = tasks.concat({
    text: text,
    done: false,
    id: Math.random(),
    date: Date.now(),
  });

  setItem('tasksList', newTasks);

  renderTasks();
};
