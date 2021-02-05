import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Todos from './components/Todos'
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import About from './components/pages/About'

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

  // Toggle Complete
  markComplete = (id) => {
      this.setState({ todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  }

  //DelTodo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }

  //AddTodo
  addTodo = (title) => {
    const newTodo = {
      id: this.state.todos.length + 1,
      title, //ES6 key-value pair match so no need to assign value
      completed: false
    }

    this.setState({ todos: [...this.state.todos, newTodo] })
  }
  render() {
    return (
      <Router>
        <div className="App">
          <div className='container'>
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/> 
              </React.Fragment>
            )}/>
            <Route path="/about" component={About}/>
          </div>
        </div>
      </Router>
      
      
    )
  }
}



export default App;
