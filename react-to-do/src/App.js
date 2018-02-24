import React, { Component } from 'react';

import './App.css';
import ToDo from './components/ToDo.js';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { description: 'Walk the cat', isCompleted: true },
        { description: 'Throw the dishes away', isCompleted: false },
        { description: 'Buy new dishes', isCompleted: false }
      ],                 //Value(newTodo) from text input, Store the users input value in state
      newTodoDescription: ''
    };
  } /*We call setState and pass an object despite also having todo property. Merged.*/
/*handleChange method*/
  handleChange(e) { /*e.target is the target element, the text input*/
    this.setState({ newTodoDescription: e.target.value })
  }
  //handleSubmit method
  handleSubmit(e) {
    if(!this.state.newTodoDescription) { return }
    e.preventDefault();
   //Add new to-do item
    const newTodo = { description: this.state.newTodoDescription, isCompleted: false };
   //Anti mutate, spread synax(JS-spread...) to pass setState a new array, with new to-do object add to the end.
    this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: '' });
  }
  toggleComplete(index) {
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true;
    this.setState({ todos: todos });
   }
  render() {
    return (
      <div className="App">
        <ul>
        { this.state.todos.map( (todo, index) =>
                                                                                                                  /*Anonymous function passing to-do->index->modify*/
          <ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } toggleComplete={ () => this.toggleComplete(index) } />
          )}
        </ul>                  {/*handleSubmit method*/}
      <form onSubmit ={ (e) => this.handleSubmit(e)}> {/*Add onChange event listener and arrow function that accepts e and calls this.handleChange, passig it the e  arguement.*/}
        <input type="text" value={ this.state.newTodoDescription} onChange={ (e) => this.handleChange(e) } />
        <input type="submit" />
      </form>
    </div>
    );
  }
}






export default App;
