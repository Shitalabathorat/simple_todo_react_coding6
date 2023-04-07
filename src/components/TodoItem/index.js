
import '.index.css'

//import todoList from './components/SimpleTodos'

const TodoItem = props => {
  const {todoDetails, deleteUser} = props
  const {title, id} = todoDetails

  const onDelete () => {
     deleteUser(id)
  }

  return (
    <li className="user-card-container">
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={onDelete}>Delete</button>
    </li>
  )
}
export default DestinationItem
