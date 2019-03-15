import React from 'react';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import TodoList from './TodoList';
import store from './store';

const App = (
    //链接store，他内部的组件都有能力获取store的数据
    <Provider store={store}>
        <TodoList/>
    </Provider>
)

// jsx语法，使用这种语法，必须要引入'react'
ReactDOM.render(App, document.getElementById('root'));

