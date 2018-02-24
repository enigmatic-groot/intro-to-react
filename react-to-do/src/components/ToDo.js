import React, { Component } from 'react';

class ToDo extends Component {
   render() {
     return (
       <li>                                                      {/* Event listener calls Anonymous function and Anonymous function pasess the index to modify*/}
         <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
         <span>{ this.props.description }</span>
         </li>
     );
   }
 }

 export default ToDo;
