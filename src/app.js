import React from 'react';
import styles from './App.module.css';
import LeftContainer from './components/leftContainer/LeftContainer';
import RightContainer from './components/rightContainer/RightContainer';

const App = () => {
    return (
        <div className={ styles.container }>
            <LeftContainer/>
            <RightContainer/>
        </div>
    );
};

export default App;
