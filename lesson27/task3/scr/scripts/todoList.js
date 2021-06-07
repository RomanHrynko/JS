import { createTask } from './createTask.js';
import { completedTask } from './updateTask';

export const initTodoListHandlers = () => {
  const buttonElem = document.querySelector('.create-task-btn');
  buttonElem.addEventListener('click', createTask);

  const listElem = document.querySelector('.list');
  listElem.addEventListener('click', completedTask);
};
