let todoInput = document.getElementById("todoInput");
let todoItems = document.getElementById("todoItems");
let todoButton = document.getElementById("todoButton");

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

todoButton.addEventListener("click", function () {
  if (todoInput.value.trim() === "") {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "You cannot leave the input empty!",
    });
    return;
  }

  let newLi = document.createElement("li");
  let input = document.createElement("input");
  let span = document.createElement("span");
  let editButton = document.createElement("button");
  let deleteButton = document.createElement("button");

  newLi.classList.add("list-group-item", "d-flex", "align-items-center");

  input.classList.add("form-check-input", "me-3", "fs-5");
  input.type = "checkbox";

  span.classList.add("fs-5", "flex-grow-1");
  span.innerText = todoInput.value;

  editButton.innerHTML = `<i class="bi bi-pencil-square"></i>`;
  editButton.classList.add("btn", "btn-success", "mx-2", "editButton");

  deleteButton.innerHTML = `<i class="bi bi-trash-fill"></i>`;
  deleteButton.classList.add("btn", "btn-danger", "deleteButton");

  newLi.append(input, span, editButton, deleteButton);

  deleteButton.addEventListener("click", function () {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your task has been deleted.",
          icon: "success",
        });
        newLi.remove();
      }
    });
  });

  editButton.addEventListener("click", function () {
    let editInput = document.createElement("input");
    let characterCount = document.createElement("span");

    editInput.classList.add("form-control", "form-control-sm");
    editInput.value = span.innerText;

    characterCount.classList.add("small", "d-block");
    characterCount.innerText = `${editInput.value.length}/30`;

    newLi.replaceChild(editInput, span);
    editInput.insertAdjacentElement("afterend", characterCount);
    editInput.focus();

    let isCooldown = false;

    editInput.addEventListener("blur", function () {
      if (isCooldown) return;

      if (editInput.value.trim() !== "" && editInput.value.length <= 30) {
        span.innerText = editInput.value;
        Toast.fire({
          icon: "success",
          title: "Task updated successfully!",
        });
      } else {
        Toast.fire({
          icon: "error",
          title: "Error",
          text: "Task length must be between 1-30 characters!",
        });
      }

      isCooldown = true;
      setTimeout(() => {
        isCooldown = false;
      }, 3000);

      newLi.replaceChild(span, editInput);
      characterCount.remove();
    });

    editInput.addEventListener("input", function () {
      if (editInput.value.length <= 30) {
        characterCount.innerText = `${editInput.value.length}/30`;
        characterCount.style.color = "black";
      } else {
        characterCount.innerText = "30/30";
        characterCount.style.color = "red";
        editInput.value = editInput.value.substring(0, 30);
      }
    });

    editInput.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        editInput.blur();
      }
    });
  });

  todoItems.appendChild(newLi);
  resetInput();

  Toast.fire({
    icon: "success",
    title: "Task added successfully!",
  });
});

function resetInput() {
  todoInput.value = "";
}
