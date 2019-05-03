import React, { Component } from 'react';
import styles from './ShellGame.module.css';
import LeftContainer from '../leftContainer/LeftContainer';
import RightContainer from '../rightContainer/RightContainer';

class ShellGame extends Component {
    render() {
        return (

            <div className={ styles.container }>
                <LeftContainer/>
                <RightContainer/>
            </div>
        )
    }
}

export default ShellGame;
