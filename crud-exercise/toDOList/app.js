const todoList = [];
const myForm = document.getElementById("myForm");
const containerTodos = document.querySelector(".container-todos");

function setLocalStorage() {
  localStorage.clear();
  for (let i = 0; i < todoList.length; i++) {
    localStorage.setItem(i, todoList[i]);
  }
}

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let newTodo = document.getElementById("new-todo").value;
  todoList.push(newTodo);
  let indexOfNewToDo = todoList.lastIndexOf(newTodo);
  localStorage.setItem(indexOfNewToDo, newTodo);

  const todoItem = document.createElement("p");
  todoItem.innerHTML = `${newTodo} <button class="delete-button">Delete</button><hr />`;
  containerTodos.appendChild(todoItem);

  document.getElementById("new-todo").value = "";

  const deleteButton = todoItem.querySelector(".delete-button");
  deleteButton.addEventListener("click", () => {
    containerTodos.removeChild(todoItem);
    // If there are items that repeat multiple times it will change the order
    const index = todoList.indexOf(newTodo);
    todoList.splice(index, 1);
    setLocalStorage();
  });
});
