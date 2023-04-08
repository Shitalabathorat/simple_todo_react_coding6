

import './index.css'

const todoItem = props => {
  const {userDetails, deleteUser} = props
  const {title, id} = userDetails

  const onDelete = () => {
    deleteUser(id)
  }

  return (
    <li className="list">
      <p>{title}</p>
      <button className="btn" onClick={onDelete} type="button">
        Delete
      </button>
    </li>
  )
}
export default todoItem
