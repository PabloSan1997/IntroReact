import React from "react";
import { TodoButton } from "../js/TodoButton";
import { TodoCounter } from "../js/TodoCounter";
import { TodoItem } from "../js/TodoItem";
import { TodoList } from "../js/TodoList";
import { TodoSearch } from "../js/Todosearch";
import { Modal } from "../modal";
import { TodoContext } from "../Todocontext";

function AppUi() {
  const {error, loading, searchedTodos, complateTodos, deleteTodos, abrirModal, setAbrirModal} = React.useContext(TodoContext);
  return (
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
          <TodoList>
          {loading && <p>Estamos cargando</p>}
          {error && <p>Nos cargo la verdolaga, si hay un error</p>}
          {(!loading && !searchedTodos.length) && <p>Crea tu primera tarea</p>}
          {searchedTodos.map((todo) => (
            <TodoItem
              llave={todo.text}
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => complateTodos(todo.text)}
              onDelete={() => deleteTodos(todo.text)}
            />
          ))}
        </TodoList>
        {!!abrirModal && (<Modal/>)}
      <TodoButton />
    </React.Fragment>
  );
}
export { AppUi };
