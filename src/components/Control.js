import React, { Component, PropTypes } from 'react'

const propTypes = {
    onPlus: propTypes.func,
    onSubtract: propTypes.func,
    onRandomizeColor: propTypes.func,
};

function createWarning(funcName) {
    return () => console.warn(funcName + " is not defined");
}

const defaultProps = {
    onPlus: createWarning("onPlus"),
    onSubtract: createWarning("onSubtract"),
    onRandomizeColor: createWarning("onRandomizeColor"),
};

class Control extends Component {
    render () {
        return (
            <div>
                <button onClick={this.props.onPlus}>+</button>
                <button onClick={this.props.onSubtract}>-</button>
                <button onClick={this.props.onRandomizeColor}>Randomize Color</button>
            </div>
        )
    }
}

Control.propTypes = propTypes;
Control.defaultProps = defaultProps;

export default Control