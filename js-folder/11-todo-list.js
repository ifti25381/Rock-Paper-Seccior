const todoList = [{
  name: 'make dinner',
  duedate: 4-12-2025},
  {name: 'wash dishes',
  duedate: 4-12-2025}];

renderTodoList();


function renderTodoList () {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `
    <p>${todo} 
    <button onclik = "
    todoList.splice(${i}, 1);
    renderTodoList();
    "
    >Delete</button>
    
    </p>`;
    todoListHTML = html + todoListHTML;
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
  }
}

function addTodo () {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  todoList.push(name);
  console.log(todoList);
  inputElement.value = '';
  renderTodoList();
}