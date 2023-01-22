import React from 'react';
import '../css/TodoButton.css';
import { TodoContext } from '../Todocontext';

function TodoButton(props) {
  const {abrirModal, setAbrirModal}=React.useContext(TodoContext);
  const click =()=> {
    setAbrirModal(!abrirModal);
  }
  return (
    <button 
    className="CreateTodoButton"
    onClick={click}
    >+</button>
  );
}

export { TodoButton };