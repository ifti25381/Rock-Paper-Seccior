const todoList = [{name: 'washe dishes', duedate: '5-12-2025'},
  {name: 'make dinner', duedate: '5-12-2022'}];

renderTodoList();


function renderTodoList () {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const name = todoList.name;
    const duedate = todoList.duedate;
    const html = `
    <p>${name} ${duedate} 
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