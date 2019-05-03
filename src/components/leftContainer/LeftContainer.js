import React, { Component } from 'react';
import styles from './LeftContainer.module.css';
import Logo from '../logo/Logo';
import Title from '../title/Title';

class LeftContainer extends Component {
    render() {
        return (

            <div className={ styles.left }>
                <Logo/>
                <Title titleText={ `score: ${ 0 }` }/>
            </div>
        );
    }
}

export default LeftContainer;
