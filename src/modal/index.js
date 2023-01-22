import React from 'react';
import ReactDOM from 'react-dom';
import { TodoContext } from '../Todocontext';
import './modal.css'
function Contenedor(){
    const {abrirModal, setAbrirModal, textoFormulario, setTextoFormulario, agregarFormulario, estadoVacio, setEstadoVacio}=React.useContext(TodoContext);
    const ver=(event)=>{
        event.preventDefault();
    }
    const agregarElemento = ()=>{
        if(textoFormulario===''){
            setEstadoVacio(true);
        }else{
            setEstadoVacio(false);
            agregarFormulario(textoFormulario);

        }
        
    }
    const cerrar = ()=>{
        setAbrirModal(false);
    }
    const cambiar = (event)=>{
        setTextoFormulario(event.target.value);
    }
    return (
        <div className='contenedor'>
            <form className='formulario' onSubmit={ver}>
            <input 
            type="text"
            placeholder='Agregar elemento'
            className='entrada'
            onChange={cambiar}
            />
            {estadoVacio && (<p className='avizo'>No puedes agregar elementos vacios</p>)}
            <div className='areaBotones'>
            <button className='boton' type="submit" onClick={agregarElemento}>Añadir</button>
                <button className='boton' onClick={cerrar}>Cancelar</button>
            </div>
        </form>
        </div>
    );
}
function Modal({children}){
    return ReactDOM.createPortal(
      <Contenedor/> ,
        document.getElementById('modal')
    );
}
export{Modal}