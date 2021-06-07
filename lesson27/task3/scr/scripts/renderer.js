import { getItem } from './storage.js';

export const renderTasks = () => {
  const taskList = getItem('taskList') || [];

  const tasksElems = taskList
    .sort((a, b) => {
      if (a.done - b.done !== 0) {
        return a.done - b.done;
      }
      if (a.done) {
        return new Date(b.dateEnd) - new Date(a.dateEnd);
      }
      return new Date(b.dateStart) - new Date(a.dateStart);
    })
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('data-id', id);
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      listElem.innerHTML = '';
      return listItemElem;
    });

  listElem.append(...tasksElems);
};
