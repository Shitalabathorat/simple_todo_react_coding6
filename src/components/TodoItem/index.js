// Write your code here
import './index.css'

const TodoItem = props => {
  const {listDetails, deleteUser} = props
  const {title, id} = listDetails
  const onDelete = () => {
    deleteUser(id)
  }
  return (
    <li className="user-card-container">
      <p className="para">{title}</p>
      <button type="button" onClick={onDelete} className="delete-button">
        Delete
      </button>
    </li>
  )
}
export default TodoItem
