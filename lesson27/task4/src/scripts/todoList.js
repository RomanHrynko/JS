import { completedTask } from './updateTask.js';
import { createTask } from './createTask.js';

export const initTodoListHundlers = () => {
  const buttonElem = document.querySelector('.create-task-btn');
  buttonElem.addEventListener('click', createTask);

  const listElem = document.querySelector('.list');
  listElem.addEventListener('click', completedTask);
};
