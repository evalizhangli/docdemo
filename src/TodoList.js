import React, { Component } from 'react'
import 'antd/dist/antd.css'
import TodoListUI from './TodoListUI'
import store from './store';
import { getInputChangeAction, getAddTodoItemAction, getDeleteItemAction } from './store/actionCreators'

class TodoList extends Component{


    constructor(props){
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        store.subscribe(this.handleStoreChange);
        this.handleClick = this.handleClick.bind(this);
        this.handleItemClickDelete = this.handleItemClickDelete.bind(this);
    }

    render() {
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                list={this.state.list}
                handleInputChange={this.handleInputChange}
                handleClick={this.handleClick}
                handleItemClickDelete={this.handleItemClickDelete}
            />
        )
    }

    handleInputChange(e) {
      const action = getInputChangeAction(e.target.value);
      store.dispatch(action);
    }

    handleStoreChange() {
      this.setState(store.getState());
    }

    handleClick() {
      const action = getAddTodoItemAction();
      store.dispatch(action)
    }

    handleItemClickDelete (index) {
      const action = getDeleteItemAction(index);
      store.dispatch(action);
    }
}

export default TodoList;