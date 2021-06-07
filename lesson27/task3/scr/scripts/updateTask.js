import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage';

export const completedTask = event => {
  const isCheckbox = event.target.classList.contains('list__item-checkbox');

  if (!isCheckbox) {
    return null;
  }
  const taskList = getItem('taskList');
  const newTaskList = taskList.map(task => {
    if (task.id === event.target.dataset.id) {
      const done = event.target.checked;
      return {
        ...task,
        done,
        dateEnd: choseTask.done ? new Date() : undefined,
      };
    }

    return task;
  });

  setItem('taskList', newTaskList);

  renderTasks();
};
