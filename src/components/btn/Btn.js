import React from 'react';
import styles from './Btn.module.css';

const Btn = props => {
    return [ 'normal', 'hard', 'extreme' ].map( ( text, index ) =>
        <span
            key={ index }
            className={ `${ styles.btn } ${ styles[ text ] }` }
            onClick={ () => props.onDificulty( text ) }>
            { text }
          </span>
    );
};

export default Btn;
