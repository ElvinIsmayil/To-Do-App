# 📝 Todo List Application

Welcome to the Todo List Application! This project allows users to manage their tasks using local storage. Users can add tasks, check for duplicates, and view existing tasks in a user-friendly interface. 

## 📦 Installation

To get started with this project, follow these simple steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/todo-list-app.git
   ```
   
2. **Navigate to the project directory:**
   ```bash
   cd todo-list-app
   ```

3. **Open the `index.html` file in your browser.**

## 🚀 Usage

1. **Add a Task:**
   - Type your task in the input field and click the "Add Task" button or press the "Enter" key.
   - If the task already exists, you will see an error message. Otherwise, the task will be added to your list.

2. **View Tasks:**
   - All added tasks will be displayed in the list below the input field.

3. **Local Storage:**
   - The tasks are stored in your browser's local storage, so they will persist even after refreshing the page.

## 📜 API Reference

### Functions

- **`AddTask()`**
  - Adds a new task to the local storage and the UI.
  - Checks for duplicate tasks before adding.

- **`CheckIfNameExist(text)`**
  - Checks if a task with the same name already exists in the local storage.
  - Returns `true` if the task exists, otherwise `false`.

- **`RetrieveDataFromLocalStorage()`**
  - Loads tasks from local storage and displays them in the UI when the page loads.

## 📚 Examples

Here are some examples of how to use the Todo List Application:

### Adding a Task

1. Type "Buy groceries" in the input field.
2. Click the "Add Task" button or press "Enter".
3. You will see "Buy groceries" added to your task list! 🎉

### Duplicate Task Handling

1. Type "Buy groceries" again in the input field.
2. Click the "Add Task" button or press "Enter".
3. You will see a toast notification saying "Task already exists" 🚫.

### Viewing Tasks

- All tasks are displayed in a list format under the input field, making it easy to keep track of what you need to do! 📋

## 🎉 Conclusion

This Todo List Application is a simple yet effective way to manage your tasks using local storage. Feel free to customize and expand upon this project as you see fit! If you have any questions or suggestions, please feel free to reach out.

Happy Tasking! 🥳
