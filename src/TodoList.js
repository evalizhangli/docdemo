import React, { Component } from 'react';
import { connect } from 'react-redux';//核心API
import {changeInpuValue, addItem } from './store/action'
import CustomSwitch from "./CustomSwitch";
import {Button} from "antd";
import CustomDialog from './CustomDialog'

const TodoList = (props) => {
    const {inputValue,list,changeInputValue,handleClick} = props;

    return (
        <div>
            <div>
                <input value={inputValue} onChange={changeInputValue}/>
                <button onClick={handleClick}>提交</button>
            </div>
            <ul>
                {
                    list.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
            <CustomSwitch/>
            <div>
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="danger">Danger</Button>
            </div>
            <CustomDialog></CustomDialog>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        inputValue:state.inputValue,
        list: state.list
    }
}

const mapDispatchToProps = (dispatch) => {
        return {
            changeInputValue (e){
                const action = changeInpuValue(e.target.value);
                dispatch(action)
            },
            handleClick() {
                const action = addItem();
                dispatch(action)
            }
        }
}

//connect是做连接，这个组件和store做连接
//TodoList其实是一个UI组件
//但是这段代码connect执行生成的结果返回的是一个容器组件
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);