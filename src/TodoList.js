import React, { Component } from 'react';
import TodoItems from './TodoItems';
import './TodoList.css';

 
class TodoList extends React.Component {
    constructor(props, context) {
    super(props, context);
  this.state = {
    items: []
  };
    this.addItem = this.addItem.bind(this);
     this.deleteItem = this.deleteItem.bind(this);
  }

deleteItem(key) {
  var filteredItems = this.state.items.filter(function (item) {
    return (item.key !== key);
  });
 
  this.setState({
    items: filteredItems
  });
}

  addItem(e) {
  var itemArray = this.state.items;
 
  if (this._inputElement.value !== "") {
    itemArray.unshift(
      {
        text: this._inputElement.value,
        key: Date.now()
      }
    );
 
    this.setState({
      items: itemArray
    });
 
    this._inputElement.value = "";
  }
 
   
  e.preventDefault();
}
deleteItem(key) {
  var filteredItems = this.state.items.filter(function (item) {
    return (item.key !== key);
  });
 
  this.setState({
    items: filteredItems
  });
}
  render() {
  return (
    <div className="todoListMain">
      <div className="header">
      <h2> Todo List</h2>
        <form onSubmit={this.addItem}>
          <input ref={(a) => this._inputElement = a}
                    required 
                  placeholder="Enter task">
          </input>
          <button type="submit">Add</button>
        </form>
      </div>
      <TodoItems  entries={this.state.items}
      delete={this.deleteItem}/>
    </div>
   );
  }
};
 
export default TodoList;