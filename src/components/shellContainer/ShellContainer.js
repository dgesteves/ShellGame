import React, { Component } from 'react';
import styles from './ShellContainer.module.css';
import Shell from '../shell/Shell';

class ShellContainer extends Component {
    state = {
        top: '200px',
        left: this.props.left,
        className: styles.shellContainer
    };

    changeClassHandler = () => {
        this.setState({
                          className: `${ styles.shellContainer } ${ styles.animation }`
                      });
    };

    render() {
        return (
            <div
                style={ {
                    top: this.state.top,
                    left: this.state.left,

                } }
                className={ this.state.className }>
                <Shell/>
                <button onClick={ this.changeClassHandler }>Click me</button>
            </div>
        )
    }
}

export default ShellContainer;
