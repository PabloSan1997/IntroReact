import React from 'react';
import { TodoProvider } from '../Todocontext';

import { AppUi } from './AppUi';




// import './App.css';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: false},
//   { text: 'Tomar el curso de intro a React', completed: false},
//   { text: 'Llorar con la llorona', completed: false },
//   { text: 'LALALALAA', completed: false },
//   { text: 'Arreglar mi estomago', completed: false }
// ];
function App() {

  // React.useEffect(()=>{
  //   console.log('useEfect');
  // }, [totalTodos]);

  return (
    <TodoProvider>
      <AppUi/>
    </TodoProvider>
  );
}

export default App;