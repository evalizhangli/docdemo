import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const styles = theme => ({
    colorSwitchBase: {
        color: '#f78f31',
        '&$colorChecked': {
            color: '#f78f31',
            '& + $colorBar': {
                backgroundColor: '#f78f31',
            },
        },
    },
    colorBar: {},
    colorChecked: {},
});

class CustomSwitch extends React.Component {
    state = {
        checkedA: true,
        checkedB: true,
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    render() {
        const { classes } = this.props;

        return (
            <FormGroup row>
                <FormControlLabel
                    control={
                        <Switch
                            checked={this.state.checkedA}
                            onChange={this.handleChange('checkedA')}
                            value="checkedA"
                            classes={{
                                switchBase: classes.colorSwitchBase,
                                checked: classes.colorChecked,
                                bar: classes.colorBar,
                            }}
                        />
                    }
                    label="Custom color"
                />
            </FormGroup>
        );
    }
}

CustomSwitch.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomSwitch);
