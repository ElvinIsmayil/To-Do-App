function getTasksFromStorage() {
  return JSON.parse(localStorage.getItem("tasks") || "[]");
}

function saveTasksToStorage(tasksArray) {
  localStorage.setItem("tasks", JSON.stringify(tasksArray));
}

export { getTasksFromStorage, saveTasksToStorage };
