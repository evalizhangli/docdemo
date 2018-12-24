import React, { Component } from 'react'

class Test extends Component{
    render() {
        //当父组件的render被运行的时候，子组件的render都会被重新运行
        return (
            <div>
                {this.props.content}
            </div>
        )
    }
}

export default Test;