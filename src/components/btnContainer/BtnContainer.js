import React, { Component } from 'react';
import styles from './BtnContainer.module.css';
import Btn from '../btn/Btn';

class BtnContainer extends Component {

    displayButtons() {
        const buttons = ['normal', 'hard', 'extreme'];
        return buttons.map((button, index) =>
                               <Btn key={ index } text={ button }/>
        )
    }

    render() {
        return (
            <div className={ styles.levels }>
                { this.displayButtons() }
            </div>
        )
    }
}

export default BtnContainer;
