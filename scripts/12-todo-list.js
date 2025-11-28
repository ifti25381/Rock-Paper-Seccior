const todoList = [{name: "watch youtube", date: "2024-06-01"}, {name: "read book", date: "2024-06-02"}]; //Initial todo list

renderTodoList(); // Initial rendering of the todo list

function renderTodoList() {

  let todoListHTML = ''; // Variable to hold the HTML representation
  
  todoList.forEach(

    (todoObject, index) => {
    
    const Name = todoObject.name;
    const Date = todoObject.date;

    const html = `
    <div>${Name}</div>
    <div>${Date} </div>
    
    <button
    onclick = "todoList.splice(${index}, 1);
      renderTodoList()"; class = "delet-todo-button">
      Delete</button>
    `;
    todoListHTML += html;

    }
  );

  console.log(todoListHTML); // Log the HTML representation of the todo list
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
  addTodo();
});


function addTodo() {
  const inputElement = document.querySelector('.js-name-input'); // Select the input element
  const inputDateElement = document.querySelector('.js-due-date-input'); // Select the date from input element
  const duedate = inputDateElement.value;

  const name = inputElement.value; // Get the value from the input field

  todoList.push({
    name: name,
    date: duedate
  }); // Add the new todo item to the array
  console.log(todoList);
  inputElement.value = ''; // To clear the input field after adding
  renderTodoList(); // Re-render the todo list to include the new item
  clearDueDates();
}
function clearDueDates() {
document.getElementById("due-date").value = "";  
}