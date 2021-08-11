//import logo from './logo.svg';
//import './App.css';
//Se puden crear funciones o clases
import {useState} from 'react'
import Header from './componentes/Header'
import Header from './componentes/Tasks'

function App() {

  const [tasks, setTasks]=useState([
    {

    }
  ])
 const nombre='Elvia Ruiz' 
 const x=true
  return (
    <div >
          
    <Header title='Recordatorio'/>      
    <Header/> 
    <Header title='Prop de Ejemplo'/> 
    


    </div>
    
  );
}

export default App;
