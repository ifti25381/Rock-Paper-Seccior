const todoList = ['make dinner', 'wash dishes']; //Initial todo list

renderTodoList(); // Initial rendering of the todo list

function renderTodoList() {

  let todoListHTML = ''; // Variable to hold the HTML representation

  for (let i = 0; i < todoList.length; i++) {
    const html = `<p>${todoList[i]}</p>`;
    todoListHTML += html;
  }
  console.log(todoListHTML); // Log the HTML representation of the todo list
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}
function addTodo() {
  const inputElement = document.querySelector('.js-name-input'); // Select the input element

  const name = inputElement.value; // Get the value from the input field

  todoList.push(name); // Add the new todo item to the array
  console.log(todoList);
  inputElement.value = ''; // To clear the input field after adding
  renderTodoList(); // Re-render the todo list to include the new item

}