import React from 'react';
import styles from './BtnContainer.module.css';
import Btn from '../btn/Btn';

const BtnContainer = () => {

    const displayButtons = () => {
        const buttons = ['normal', 'hard', 'extreme'];
        return buttons.map((button, index) =>
                               <Btn key={ index } text={ button }/>
        )
    };

    return (
        <div className={ styles.levels }>
            { displayButtons() }
        </div>
    )

};

export default BtnContainer;
