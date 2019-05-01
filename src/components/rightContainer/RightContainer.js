import React from 'react';
import styles from './RightContainer.module.css';
import Title from '../title/Title';
import BtnContainer from '../btnContainer/BtnContainer';
import Btn from '../btn/Btn';
import BoardContainer from '../boardContainer/BoardContainer';

const RightContainer = () => {
    const text = 'pick your level';
    return (
        <div className={ styles.right }>
            <Title text={ text }/>
            <BtnContainer/>
            <BoardContainer/>
            <Btn text={ 'play' }/>
        </div>
    )
};

export default RightContainer;
