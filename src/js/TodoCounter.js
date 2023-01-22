import React from "react";
import "../css/todoCounter.css";
import { TodoContext } from "../Todocontext";
function TodoCounter() {
  const { totalTodos, completedTodos} = React.useContext(TodoContext);
  let textos;
  if (totalTodos == completedTodos) {
    textos = `Haz completado  ${completedTodos} de ${totalTodos}, todas las tareas cumplidas`;
  } else {
    textos = `Haz completado ${completedTodos} de ${totalTodos}`;
  }
  return <h2 className="TodoCounter">{textos}</h2>;
}

export { TodoCounter };
