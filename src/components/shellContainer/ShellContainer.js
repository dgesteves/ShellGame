import React from 'react';
import styles from './ShellContainer.module.css';
import Shell from '../shell/Shell';

const ShellContainer = props => {
    return (
        <div
            style={ { top: '200px', left: props.left } }
            className={ styles.shellContainer }>
            <Shell/>
        </div>
    )
};

export default ShellContainer;
