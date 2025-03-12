# Todo List Application

A simple Todo List application that allows users to add tasks, which are stored in the browser's local storage. This project utilizes HTML, CSS, and JavaScript to provide a user-friendly interface for managing tasks.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Examples](#examples)

## Installation

To get started with the Todo List application, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/todo-list-app.git
   cd todo-list-app
   ```

2. **Open `index.html` in your browser:**
   Simply double-click the `index.html` file or open it through your preferred web browser.

## Usage

1. **Add a Task:**
   - Type your task in the input field and click the "Add" button or press the "Enter" key.
   - If the task already exists, a toast notification will appear, indicating that the task cannot be added again.

2. **View Tasks:**
   - All tasks will be displayed in a list format below the input field.

3. **Persistence:**
   - Tasks are stored in the browser's local storage, which means they will persist even after refreshing the page.

## API Reference

### Functions

- **`AddTask()`**
  - Adds a new task to the local storage and updates the UI.
  - Checks if the task already exists before adding it.

- **`CheckIfNameExist(text)`**
  - Checks if a task with the given text already exists in local storage.
  - Returns `true` if the task exists, otherwise returns `false`.

- **`RetrieveDataFromLocalStorage()`**
  - Loads existing tasks from local storage and displays them in the UI when the page is loaded.

### HTML Elements

- **`todoInput`**: Input field where users can type their tasks.
- **`todoButton`**: Button to trigger the addition of a new task.
- **`todoItems`**: Unordered list where tasks are displayed.

## Examples

### Adding a Task

1. Type "Buy groceries" in the input field.
2. Click the "Add" button or press "Enter".
3. The task will be added to the list, and a success toast notification will appear.

### Handling Duplicate Tasks

1. Type "Buy groceries" again in the input field.
2. Click the "Add" button or press "Enter".
3. A toast notification will appear stating "Task already exists".

### Viewing Tasks on Page Load

When you refresh the page, all previously added tasks will still be visible in the list as they are retrieved from local storage.

## Contributing

Contributions are welcome! If you have suggestions for improvements or features, feel free to create an issue or submit a pull request.

## License

This project is open-source and available under the [MIT License](LICENSE).
