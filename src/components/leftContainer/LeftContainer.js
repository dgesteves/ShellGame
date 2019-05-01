import React from 'react';
import styles from './LeftContainer.module.css';
import Logo from '../logo/Logo';
import Title from '../title/Title';

const LeftContainer = () => {

    const renderTitle = () => `score : ${ 0 }`;

    return (
        <div className={ styles.left }>
            <Logo/>
            <Title text={ renderTitle() }/>
        </div>
    )
};

export default LeftContainer;
