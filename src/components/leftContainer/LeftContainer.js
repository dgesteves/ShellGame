import React, { Component } from 'react';
import styles from './LeftContainer.module.css';
import Logo from '../logo/Logo';

class LeftContainer extends Component {
    render() {
        return (

            <div className={ styles.left }>
                <Logo/>
            </div>
        )
    }
}

export default LeftContainer;
