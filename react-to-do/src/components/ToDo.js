import React, { Component } from 'react';

class ToDo extends Component {
  deleteToDo(description) {
    this.props.deleteToDo(description);
  }
   render() {
     return (
       <div className="wrapper">
      {/*Add a delete button to the ToDo component with onClick event listener*/}
       <button className="deleteToDo" onClick = {(e) =>
       this.deleteToDo(this.props.description)}>Delete</button>
       {() => this.props.deleteToDo(this.props.description)}

       <li>                                                      {/* Event listener calls Anonymous function and Anonymous function pasess the index to modify*/}
         <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
         <span>{ this.props.description }</span>
         </li>
       </div>
     );
   }
 }

 export default ToDo;
