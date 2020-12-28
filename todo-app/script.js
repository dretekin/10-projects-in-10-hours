const todoBody = document.querySelector('.todo__body');
const todoItems = document.querySelector('.todo__items');
const todoInput = document.getElementById('todo__input')

todoItems.addEventListener('click', function(e) {
    e.preventDefault()
    e.target.classList.toggle('done');
    setLocalStorage()
})

todoItems.oncontextmenu = function (e) {
    e.target.remove()
    setLocalStorage()
    return false;     // cancel default menu
}

todoInput.onkeypress = function (e) {
        e = e || window.event;
        if(todoInput.value != '' && e.keyCode == 13 ) {
            addTodListItem();
            setLocalStorage()
        }
    }

function addTodListItem() {
    let todoItem = document.createElement('li');
    todoItem.classList.add('todo__item');
    todoItem.textContent = todoInput.value;
    todoItems.appendChild(todoItem)
    todoInput.value = '';
    setLocalStorage()
}

function setLocalStorage() {
    localStorage.setItem('TodoListItems', todoItems.innerHTML);
}

let todoItemsLocalStorage = localStorage.getItem('TodoListItems')

if (todoItemsLocalStorage) todoItems.innerHTML = todoItemsLocalStorage
