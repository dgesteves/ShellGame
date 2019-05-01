import React from 'react';
import styles from './ShellGame.module.css';
import LeftContainer from '../leftContainer/LeftContainer';
import RightContainer from '../rightContainer/RightContainer';

const ShellGame = () => {
    return (
        <div className={ styles.container }>
            <LeftContainer/>
            <RightContainer/>
        </div>
    )
};

export default ShellGame;
