let toDoArray = [];
let goFurther = true;

while (goFurther) {
  let command = prompt("What do u want bro ?").toLocaleLowerCase();

  switch (command) {
    case "new":
      let newTodo = prompt("New tastk :");
      toDoArray.push(newTodo);
      break;

    case "list":
      console.log("********* TODO LIST *********");
      for (toDo of toDoArray.entries()) {
        console.log(`${toDo[0] + 1}. ${toDo[1]}`);
      }
      break;

    case "delete":
      while (true) {
        let indexOfTodo = parseInt(prompt("Wich one ?"));
        if (!indexOfTodo || indexOfTodo < 0 || indexOfTodo > toDoArray.length) {
          alert("Not valid command");
        } else {
          indexOfTodo--;
          toDoArray.splice(indexOfTodo, 1);
          alert("Done !");
          break;
        }
      }
      break;

    case "quit":
      goFurther = false;
      break;

    default:
      alert("Not valide command !");
      break;
  }
}
