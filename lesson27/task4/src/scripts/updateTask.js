import { renderTasks } from './renderTasks.js';
import { getItem, setItem } from './storage.js';

export const completedTask = event => {
  const isCheckbox = event.target.classList.contains('list__item-checkbox');

  if (!isCheckbox) {
    return;
  }

  const taskList = getItem('taskList') || [];
  const newTaskList = taskList.map(task => {
    const choseCheckbox = event.target.dataset.id;
    if (task.id === +choseCheckbox) {
      const done = event.target.checked;
      return {
        ...task,
        done,
        date: Date.now(),
      };
    }
    return task;
  });
  setItem('taskList', newTaskList);

  renderTasks();
};
