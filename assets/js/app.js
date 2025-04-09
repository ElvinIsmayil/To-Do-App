import { RetrieveDataFromLocalStorage } from './tasks.js';
import { setupEventListeners } from './events.js';

if (localStorage.getItem("tasks") === null) {
  localStorage.setItem("tasks", "[]");
}

document.addEventListener("DOMContentLoaded", () => {
  RetrieveDataFromLocalStorage();
  setupEventListeners();
});
