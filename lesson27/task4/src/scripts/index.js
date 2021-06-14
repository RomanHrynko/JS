import { initTodoListHundlers } from './todoList.js';
import { renderTasks } from './renderTasks.js';

document.addEventListener('DOMContentLoaded', () => {
  renderTasks();
  initTodoListHundlers();
});

const onStorageChange = event => {
  if (event.key === 'tasksList') {
    renderTasks();
  }
};

window.addEventListener('storage', onStorageChange);
