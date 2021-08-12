//import logo from './logo.svg';
//import './App.css';
import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
/* En esta parte del código se agrega un hook useState que es una función que epermite acceder alas funcionalida des de React
  useState es para añadir un etado interno a nuestros componentes par ahacerlos dináicos e interactivos
*/
function App() {
const [tasks, setTasks] = useState([
{
  id:1,
  text:'Cita con el Doctor',
  day: '12 de Agosto 2021',
  reminder: true
},
{
  id:2,
  text:'Videoconferencia ITA',
  day: '3 de Septiembre 2021',
  reminder: true
},
{
  id:3,
  text:'Entrega de Avance de Proyecto',
  day: '15 de Agosto 2021',
  reminder: false
  },
  {
    id:4,
    text:'Entregar instrumentación didáctica',
    day: '20 de Agosto 2021',
    reminder: false
    }
])

const deleteTask=(id)=>{
 // console.log('Delete',id);
 setTasks(tasks.filter((task)=>task.id!==id))
}
const toggleReminder=(id)=>{
   console.log('Reminder',id);
  //setTasks(tasks.filter((task)=>task.id!==id))
  //Cambiar formado al hacer doble click
setTasks(tasks.map((task)=>task.id===id ? {...task,reminder:!task.reminder} : task))

 }
 const addTask=(task)=>{
   console.log(task);

 }


const nombre = 'Elvia Ruiz Beltrán'
const x = true
const valor=10

  return (
    <div>
   
    <Header title={'Recordatorios de ' + nombre}/>
    <AddTask onAdd={ addTask}/>
    <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>

    </div>
  );
}

export default App;
