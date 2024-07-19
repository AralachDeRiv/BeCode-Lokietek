const olTodos = document.getElementById("olTodos");

async function start() {
  olTodos.innerHTML = "";
  let todos = await fetch("http://localhost:3000/todos");
  todos = await todos.json();
  todos.forEach((element) => {
    let todo = document.createElement("li");
    todo.setAttribute("id", element.createdAt);
    todo.innerHTML = `
          <h2>${element.title}</h2>
          <p>
            ${element.description}
          </p>
          <button>Delete</button>
    `;
    olTodos.appendChild(todo);

    const button = todo.querySelector("button");
    button.addEventListener("click", deleteItem);
  });
}

const deleteItem = async (e) => {
  const target = e.target;
  const date = target.parentElement.id;
  try {
    const response = await fetch("http://localhost:3000/todos/" + date, {
      method: "DELETE",
    });
    await start();
  } catch (err) {
    console.log(err.message);
  }
};

start();

const todoList = document.getElementById("todoList");

todoList.addEventListener("submit", async (e) => {
  e.preventDefault();
  const titleR = document.getElementById("title").value;
  const descriptionR = document.getElementById("description").value;
  const data = { title: titleR, description: descriptionR };

  try {
    const response = await fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      console.log("ERROR with fetch");
    }

    todoList.reset();
    start();
  } catch (err) {
    console.log(err.message);
  }
});
