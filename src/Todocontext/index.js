import React from "react";
import { useLocalStorage } from "./seLocalStorage.js";

const TodoContext = React.createContext();
function TodoProvider(props) {
  const [estadoVacio, setEstadoVacio]= React.useState(false);
  const [abrirModal, setAbrirModal] = React.useState(false);
  const { todos, saveTodos, loading, error } = useLocalStorage("Todos_v1", []);
  // El estado de nuestra búsqueda
  const [searchValue, setSearchValue] = React.useState("");
  const [textoFormulario, setTextoFormulario] = React.useState("");
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  // Creamos una nueva variable en donde guardaremos las coincidencias con la búsqueda
  let searchedTodos = [];

  // Lógica para filtrar
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const complateTodos = (text) => {
    const newTodos = [...todos];
    const indice = newTodos.findIndex((variable) => variable.text === text);
    newTodos[indice].completed = !newTodos[indice].completed;
    saveTodos(newTodos);
  };
  const deleteTodos = (text) => {
    const newTodos = [...todos];
    const indice = newTodos.findIndex((variable) => variable.text === text);
    newTodos.splice(indice, 1);
    saveTodos(newTodos);
  };
  const agregarFormulario = (texto) => {
    console.log(texto);
    const nuevoElemento = { text: texto, completed: false };
    todos.push(nuevoElemento);
    saveTodos(todos);
    
  };
  return (
    <TodoContext.Provider
      value={{
        error,
        loading,
        totalTodos,
        completedTodos,
        searchValue,
        searchedTodos,
        setSearchValue,
        complateTodos,
        deleteTodos,
        abrirModal,
        setAbrirModal,
        setTextoFormulario,
        agregarFormulario,
        textoFormulario,
        estadoVacio, 
        setEstadoVacio
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
