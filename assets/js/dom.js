function createTaskElement(taskText) {
  const li = document.createElement("li");
  li.innerText = taskText;
  return li;
}

function appendTaskToDOM(task) {
  const todoItems = document.getElementById("todoItems");
  const li = createTaskElement(task.text);
  todoItems.appendChild(li);
}

export{
    createTaskElement,
    appendTaskToDOM

}