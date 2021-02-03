import React, { Component } from 'react'
import Todos from './components/Todos'

class App extends Component {

  state = {
    todos: [{
      id: 1,
      title: 'Take out the trash',
      completed: false
    },{
      id: 2,
      title: 'Code',
      completed: false
    },{
      id: 3,
      title: 'Sleep',
      completed: false
    }]
  }

  render() {
    console.log(this.state.todos)
    return (
      <div>
        <h1>App</h1>
        <Todos todos={this.state.todos}/> 
      </div>
    )
  }
}

export default App;
