import React from 'react';
import styles from './LeftContainer.module.css';
import Logo from '../logo/Logo';

const LeftContainer = () => {
    return (
        <div className={ styles.left }>
            <Logo/>
            <h1 className={ styles.title }>{ `score: ${ 0 }` }</h1>;
        </div>
    );
};

export default LeftContainer;
