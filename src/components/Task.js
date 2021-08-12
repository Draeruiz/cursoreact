const Task = (props) =>{
return(
  <div className='task'>
    <h3>{props.text}  <button className='delete' onClick={()=>props.onDelete(props.id)}>X
    </button></h3>
    <p>{props.day}</p>
  </div>
)
}
export default Task
