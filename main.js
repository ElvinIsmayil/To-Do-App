if(localStorage.getItem("tasks") === null)
  localStorage.setItem("tasks","[]");

//Elements
const todoInput = document.getElementById("todoInput");
const todoButton = document.getElementById("todoButton");
const todoItems = document.getElementById("todoItems");

RetrieveDataFromLocalStorage();

todoButton.addEventListener("click",function(){
  AddTask();
})

todoInput.addEventListener("keypress",function(event){
  if(event.key === "Enter"){
    AddTask();
  }
})

function AddTask(){
  if(CheckIfNameExist(todoInput.value)){
    const Toast = Swal.mixin({
      showConfirmButton: false,
      toast: true,
      position: 'top-end',
      timer: 3000,
      timerProgressBar: true
    })
    Toast.fire('Task already exists', '', 'error')
    return;
  }


  // Takes string data from the local storage and converts it to json array 
  const tasks = localStorage.getItem("tasks");
  const tasksArray = JSON.parse(tasks);

  // initiliaze task object
  const task = {
    text: todoInput.value,
    id: Date.now(),
    isCompleted: false
  }

  
  tasksArray.push(task);

  // json array is converted to string form and then overwritten to the local storage
  const stringfiedArray = JSON.stringify(tasksArray);
  localStorage.setItem("tasks",stringfiedArray);

  const Toast = Swal.mixin({
    showConfirmButton: false,
    toast: true,
    position: 'top-end',
    timer: 3000,
    timerProgressBar: true
  })

  //displaying the task in the ui when the task is added
  const LiElement = document.createElement("li");
  LiElement.innerText = task.text;
  todoItems.appendChild(LiElement);

  Toast.fire('Task has been added', '', 'success')
  console.log(task)
}

function CheckIfNameExist(text){
  const tasks = localStorage.getItem("tasks");
  const tasksArray = JSON.parse(tasks)
  const existElement =  tasksArray.find(e=>e.text==text)
  if(existElement != null)
    return true;
  return false;

}

// when the page loads the string form of the array loads from localstorage and then converts it to the real json array (creating elements in loop)
function RetrieveDataFromLocalStorage(){
  const tasks = localStorage.getItem("tasks");
  const tasksArray = JSON.parse(tasks);
  tasksArray.forEach(element => {
    const LiElement = document.createElement("li");
    LiElement.innerText = element.text;
    todoItems.appendChild(LiElement);
  });
}




