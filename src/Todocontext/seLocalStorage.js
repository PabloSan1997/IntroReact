import React from "react";
function useLocalStorage(itemName, initialValue){
    const [loading, setLoading]=React.useState(true);
    const [error, setError]=React.useState(false);
    const [item, setitem] = React.useState(initialValue);
    React.useEffect(()=>{
      setTimeout(()=>{
       try{ let parseItem;
        const localSotrageItem = localStorage.getItem(itemName);
    
    if(!localSotrageItem){
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parseItem=[];
    }else{
      parseItem = JSON.parse(localSotrageItem);
    }
  
    setitem(parseItem);
    setLoading(false);
  }catch(err){
    setError(true);
  }
      }, 2000);
    });
    const saveTodos = (newTodos)=>{
     try{
      localStorage.setItem(itemName, JSON.stringify(newTodos));
      setitem(newTodos); 
     }catch(err){
      setError(true);
     }
    }
    return {todos:item, saveTodos, loading, error};
  }
  export{useLocalStorage};