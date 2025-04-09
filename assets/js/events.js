import { AddTask } from './tasks.js';

export function setupEventListeners() {
  const todoInput = document.getElementById("todoInput");
  const todoButton = document.getElementById("todoButton");

  todoButton.addEventListener("click", () => {
    AddTask(todoInput.value);
    todoInput.value = '';
  });

  todoInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      AddTask(todoInput.value);
      todoInput.value = '';
    }
  });
}
