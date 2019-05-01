import React from 'react';
import styles from './BoardContainer.module.css';
import ShellContainer from '../shellContainer/ShellContainer';

const displayShells = () => {
    const positions = ['100px', '200px', '300px', '400px', '500px'];
    return positions.map((left, index) => <ShellContainer key={ index } left={ left }/>)
};

const BoardContainer = () => <div className={ styles.board }>{ displayShells() }</div>;

export default BoardContainer;
