import React, { Component } from 'react';
import PropTypes from 'prop-types'

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }

    // 当一个组件从父组件接受了参数
    //只要父组件的render函数被重新执行了，子组件的这个生命周期函数就会被执行
    //如果这个组件第一次存在于父组件中，不会执行
    //如果这个组件之前已经存在于父组件中，会被执行
    // componentWillReceiveProps(nextProps, nextContext) {
    //     console.log('child componentWillReceiveProps')
    // }
    //
    // componentWillUnmount() {
    //     console.log('child componentWillUnmount')
    // }

    render() {
        console.log('child render')
        const {content} = this.props;
        return (
            <div onClick={this.handleClick}>
                {content}
            </div>
        )
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (nextProps.content !== this.props.content) {
            return true;
        } else {
            return false;
        }
    }

    handleClick () {
        const { deleteItem, index } = this.props;
        deleteItem(index);
    }
}

// 做校验
TodoItem.propTypes = {
    content: PropTypes.string,
    deleteItem: PropTypes.func,
    index: PropTypes.number
}

TodoItem.defaultProps = {
    test: 'hello world'
}

export default TodoItem;