import React, { Component } from 'react';
 
class TodoItems extends React.Component {
  constructor(props, context) {
    super(props, context);
 
    this.createTasks = this.createTasks.bind(this);
    this.delete = this.delete.bind(this);
  }
 
  delete(key) {
    this.props.delete(key);
  }
  
  createTasks(item) {
    return <li onClick={(e) => this.delete(item.key, e)} 
              key={item.key}>{item.text}</li>
  }
 
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
    return (
      <li className="theList">
      <ol title="Delete this task?">
        {listItems}
        </ol>
      </li>
    );
  }
};
 
export default TodoItems;