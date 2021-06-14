import { renderTasks } from './renderTasks.js';
import { getItem, setItem } from './storage.js';

export const completedTask = event => {
  const isCheckbox = event.target.classList.contains('list__item-checkbox');

  if (!isCheckbox) {
    return;
  }

  const tasksList = getItem('tasksList') || [];
  const newTaskList = tasksList.map(task => {
    const isId = event.target.dataset.id;
    if (task.id === +isId) {
      const done = event.target.checked;
      return {
        ...task,
        done,
        date: Date.now(),
      };
    }
    return task;
  });
  setItem('tasksList', newTaskList);

  renderTasks();
};
