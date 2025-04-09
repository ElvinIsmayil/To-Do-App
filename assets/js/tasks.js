import { getTasksFromStorage, saveTasksToStorage } from './storage.js';
import { appendTaskToDOM } from './dom.js';
import { showToast } from './utils.js';

function AddTask(inputValue) {
  const taskText = inputValue.trim();

  if (!taskText) {
    showToast("Task cannot be empty!", "error");
    return;
  }

  if (CheckIfNameExist(taskText)) {
    showToast("Task already exists!", "error");
    return;
  }

  const task = {
    text: taskText,
    id: Date.now(),
    isCompleted: false
  };

  const tasksArray = getTasksFromStorage();
  tasksArray.push(task);
  saveTasksToStorage(tasksArray);
  appendTaskToDOM(task);
  showToast("Task has been added", "success");
}

function CheckIfNameExist(text) {
  const tasksArray = getTasksFromStorage();
  return tasksArray.some(e => e.text === text);
}

function RetrieveDataFromLocalStorage() {
  const tasksArray = getTasksFromStorage();
  tasksArray.forEach(task => appendTaskToDOM(task));
}

export{
    CheckIfNameExist,
    RetrieveDataFromLocalStorage,
    AddTask
}
