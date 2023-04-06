import {Component} from 'react'
import TodoItem from './components/TodoItem'
const initialTodoList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
    state={searchUser:'',
          todosList: initialTodosList            
}
  deleteUser = (id) => {
    const {todoList} = this.state
    const filteredTodoList=todoList.filter(each=>each.id !== id)
  }
  
  this.setState({
      todoList=filteredTodoList
  })
  render() {
    const{todosList} =this.state
    return (
      <div>
        <div className="card">
          <h1 className="heading">Simple Todos</h1>
          <ul className="list-container">
            {initialTodosList.map(eachItem => (
              <TodoItem
                listDetails={eachItem}
                deleteUser={this.deleteUser}
                key={eachItem.id}/>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos