const todoList = [];

function addTodo() {
  const inputElement = document.querySelector('.js-name-input'); // Select the input element

  const name = inputElement.value; // Get the value from the input field

  todoList.push(name); // Add the new todo item to the array
  console.log(todoList);
  inputElement.value = ''; // To clear the input field after adding

}