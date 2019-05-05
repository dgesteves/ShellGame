import React from 'react';
import styles from './App.module.css';
import LeftContainer from '../leftContainer/LeftContainer';
import RightContainer from '../rightContainer/RightContainer';

const App = () => {
    return (
        <div className={ styles.container }>
            <LeftContainer/>
            <RightContainer/>
        </div>
    );
};

export default App;
