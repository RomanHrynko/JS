import { getItem } from './storage.js';

export const renderTasks = () => {
  const listElem = document.querySelector('.list');
  listElem.innerHTML = '';

  const tasksList = getItem('tasksList') || [];

  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done || new Date(b.data) - new Date(a.data))
    .map(({ text, done, id, data }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('data-id', id);
      checkbox.setAttribute('data-data', data);
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};
