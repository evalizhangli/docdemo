import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Input from '@material-ui/core/Input';

const styles = {
    wapper: {
        textAlign: 'center',
    },
    dialogTitle: {
        fontFamily: 'Open Sans',
        fontSize: '16px',
        textColor: '#000000',
        textDecoration: 'none solid rgb(0,0,0)',
        margin: '10px 20px 10px 20px',
        textAlign: 'left',
    },
    content: {
        textAlign: 'left',
    },
    title: {
        fontFamily: 'Open Sans',
        fontSize: '16px',
        textColor: '#000000',
        textDecoration: 'none solid rgb(0,0,0)',
        margin: '10px 20px 10px 20px',
        textAlign: 'left',
    },

    scopeContainer: {
        display: 'inline-flex',
        fontSize: '16px',
        textAlign: 'center',
        padding: '0px 0px 30px 0px',
    },
    scopeInput: {
        width: '368px',
        left: '40px',
        height: '40px',
        padding: '5px 10px',
        border: '1px solid #807f7e',
        borderRadius: '3px',
        backgroundColor: '#fff',
        fontFamily: 'Open Sans',
        fontSize: '16px',
        color: '#808285',
        textDecoration: 'none solid rgb(128, 130, 133)',
    },
    descriptionInput: {
        width: '368px',
        left: '45px',
        height: '40px',
        padding: '5px 10px',
        border: '1px solid #807f7e',
        borderRadius: '3px',
        backgroundColor: '#fff',
        fontFamily: 'Open Sans',
        fontSize: '16px',
        color: '#808285',
        textDecoration: 'none solid rgb(128, 130, 133)',
    },
    productInput: {
        width: '368px',
        height: '40px',
        padding: '5px 10px',
        border: '1px solid #807f7e',
        borderRadius: '3px',
        backgroundColor: '#fff',
        fontFamily: 'Open Sans',
        fontSize: '16px',
        color: '#808285',
        textDecoration: 'none solid rgb(128, 130, 133)',
    },
    descriptionContainer: {
        display: 'inline-flex',
        fontSize: '16px',
        textAlign: 'center',
        padding: '0px 0px 30px 0px',
    },
    productContainer: {
        display: 'inline-flex',
        fontSize: '16px',
        textAlign: 'center',
        padding: '0px 0px 20px 0px',
    },
};


class CustomDialog extends Component{

    state = {
        isOpen: true,
    }

    handleClose = () => {
        const { isOpen } = this.props;
        isOpen = false;
    }

    render() {
        const { isOpen } = this.state;
        return (
            <div>
                <Dialog
                    onClose={this.handleClose}
                    open={isOpen}
                    aria-labelledby="dialog-title"
                    aria-describedby="dialog-description"
                >
                    <div style={styles.wapper}>
                        <DialogTitle style={styles.dialogTitle}>
                            Create scope
                        </DialogTitle>
                        <DialogContent style={styles.content}>
                            <div style={styles.scopeContainer}>
                                <div style={styles.title}>
                                    Scope Name
                                </div>
                                <Input
                                    placeholder="scope name"
                                    style={styles.scopeInput}
                                    disableUnderline="true"
                                />
                            </div>
                            <div style={styles.descriptionContainer}>
                                <div style={styles.title}>
                                    Description
                                </div>
                                <Input
                                    placeholder="description"
                                    style={styles.descriptionInput}
                                    disableUnderline="true"
                                />
                            </div>
                            <div style={styles.productContainer}>
                                <div style={styles.title}>
                                    Consumer Product
                                </div>
                                <Input
                                    placeholder="Consumer Product"
                                    style={styles.productInput}
                                    disableUnderline="true"
                                />
                            </div>
                        </DialogContent>
                    </div>
                </Dialog>
            </div>
        );
    }
}


export default CustomDialog;
