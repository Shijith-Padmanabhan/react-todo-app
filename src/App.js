import React from 'react';
import TodoItem from './components/todoItem'
import './App.css';
import todoData from './components/todoData'


class App extends React.Component{
  constructor(){
    super()
    this.state={
      todos : todoData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id){
    
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todoArrayItem => {
        if(todoArrayItem.id === id){
          todoArrayItem.completed = !todoArrayItem.completed          
        }
        console.log(todoArrayItem)
        return todoArrayItem
      })
      return {
        todos : updatedTodos
      }
    })
  }


  render(){
    const todoItems = this.state.todos.map( item=>  <TodoItem item = {item} key = {item.id} handleChange = {this.handleChange} /> )
    return (
      
      <div className="todo-list">
        {todoItems}
      </div>
    )
  }
}




/* class App extends React.Component{
  constructor(){
    super()
    this.state = {
      isLoggedIn : false
    }
  }
  render(){
    return (
      <div>
        <h1>You're logged : {this.state.isLoggedIn?`In`:`Out`}</h1>
      </div>
  
    )
  }
  
} */

export default App;
