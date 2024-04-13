document.getElementById('todoForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var todoInput = document.getElementById('todoInput');
    var todoText = todoInput.value.trim();
    if (todoText === '') return;
    var todoList = document.getElementById('todoList');
    var todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    var label = document.createElement('label');
    label.textContent = todoText;
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
        todoItem.remove();
    });
    todoItem.appendChild(checkbox);
    todoItem.appendChild(label);
    todoItem.appendChild(deleteButton);
    todoList.appendChild(todoItem);
    todoInput.value = '';
});

document.getElementById('todoList').addEventListener('change', function (event) {
    var checkbox = event.target;
    var todoItem = checkbox.parentElement;
    if (checkbox.checked) {
        todoItem.classList.add('completed');
    } else {
        todoItem.classList.remove('completed');
    }
});