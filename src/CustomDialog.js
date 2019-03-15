import React, { Component } from "react";

const style = {
    backViewStyle: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        opacity: 0.2,
    },
    containerViewStyle: {
        position: 'fixed',
        top: '20%',
        left: '20%',
        width: '60%',
        backgroundColor: 'white',
        height: '60%',
    },
};

class CustomDialog extends Component{
    render() {
        return (
            <div style={style.backViewStyle}>
                <div style={style.containerViewStyle}>
                </div>
            </div>
        )
    }
}

export default CustomDialog;