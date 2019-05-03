import React, { Component } from 'react';
import styles from './BoardContainer.module.css';
import ShellContainer from '../shellContainer/ShellContainer';

class BoardContainer extends Component {

    displayShells = () => {
        const startPositions = ['100px', '200px', '300px', '400px', '500px'];
        return startPositions.map((left, index) =>
                                 <ShellContainer key={ index } left={ left }/>)
    };

    render() {
        return <div className={ styles.board }>{ this.displayShells() }</div>
    }
}

export default BoardContainer;
