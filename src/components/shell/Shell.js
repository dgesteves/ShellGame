import React from 'react';
import shell from '../../assets/shell.png';
import styles from './Shell.module.css';

const Shell = props => {
    return props.numberOfShells.map( ( _, index ) => {
        return (
            <div
                style={ { top: props.top, left: props.left( index ) } }
                className={ props.classToUse }
                key={ index }>
                <img src={ shell } alt='shell' className={ styles.shell }/>
            </div>
        );
    } );
};

export default Shell;
